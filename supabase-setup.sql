-- BSM Platform Database Setup
-- Run this in your Supabase SQL Editor

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  role TEXT CHECK (role IN ('admin', 'customer')) NOT NULL,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_login TIMESTAMP WITH TIME ZONE,
  is_verified BOOLEAN DEFAULT FALSE,
  metadata JSONB
);

-- Create tickets table
CREATE TABLE IF NOT EXISTS tickets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  status TEXT CHECK (status IN ('open', 'in_progress', 'resolved', 'closed')) DEFAULT 'open',
  priority TEXT CHECK (priority IN ('low', 'medium', 'high', 'urgent')) DEFAULT 'medium',
  category TEXT NOT NULL,
  assigned_to UUID REFERENCES users(id),
  created_by UUID REFERENCES users(id) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  resolved_at TIMESTAMP WITH TIME ZONE,
  sla_deadline TIMESTAMP WITH TIME ZONE,
  tags TEXT[] DEFAULT '{}',
  attachments TEXT[] DEFAULT '{}',
  metadata JSONB
);

-- Create knowledge_base table
CREATE TABLE IF NOT EXISTS knowledge_base (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  author_id UUID REFERENCES users(id) NOT NULL,
  status TEXT CHECK (status IN ('draft', 'published', 'archived')) DEFAULT 'draft',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  published_at TIMESTAMP WITH TIME ZONE,
  view_count INTEGER DEFAULT 0,
  helpful_count INTEGER DEFAULT 0,
  version INTEGER DEFAULT 1,
  metadata JSONB
);

-- Create workflows table
CREATE TABLE IF NOT EXISTS workflows (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  trigger_type TEXT NOT NULL,
  trigger_config JSONB NOT NULL,
  steps JSONB NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  created_by UUID REFERENCES users(id) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  metadata JSONB
);

-- Create analytics table
CREATE TABLE IF NOT EXISTS analytics (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  metric_name TEXT NOT NULL,
  metric_value NUMERIC NOT NULL,
  metric_type TEXT CHECK (metric_type IN ('counter', 'gauge', 'histogram')) NOT NULL,
  tags JSONB NOT NULL,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  metadata JSONB
);

-- Create chat_messages table for live chat
CREATE TABLE IF NOT EXISTS chat_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  content TEXT NOT NULL,
  sender_id UUID REFERENCES users(id) NOT NULL,
  sender_type TEXT CHECK (sender_type IN ('user', 'agent', 'system')) NOT NULL,
  ticket_id UUID REFERENCES tickets(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  attachments TEXT[] DEFAULT '{}',
  metadata JSONB
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_tickets_status ON tickets(status);
CREATE INDEX IF NOT EXISTS idx_tickets_priority ON tickets(priority);
CREATE INDEX IF NOT EXISTS idx_tickets_created_by ON tickets(created_by);
CREATE INDEX IF NOT EXISTS idx_tickets_assigned_to ON tickets(assigned_to);
CREATE INDEX IF NOT EXISTS idx_tickets_created_at ON tickets(created_at);
CREATE INDEX IF NOT EXISTS idx_knowledge_base_status ON knowledge_base(status);
CREATE INDEX IF NOT EXISTS idx_knowledge_base_category ON knowledge_base(category);
CREATE INDEX IF NOT EXISTS idx_knowledge_base_published_at ON knowledge_base(published_at);
CREATE INDEX IF NOT EXISTS idx_analytics_metric_name ON analytics(metric_name);
CREATE INDEX IF NOT EXISTS idx_analytics_timestamp ON analytics(timestamp);
CREATE INDEX IF NOT EXISTS idx_chat_messages_ticket_id ON chat_messages(ticket_id);
CREATE INDEX IF NOT EXISTS idx_chat_messages_created_at ON chat_messages(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE knowledge_base ENABLE ROW LEVEL SECURITY;
ALTER TABLE workflows ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;

-- RLS Policies for users table
DROP POLICY IF EXISTS "Users can read own data" ON users;
CREATE POLICY "Users can read own data" ON users
  FOR SELECT USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update own data" ON users;
CREATE POLICY "Users can update own data" ON users
  FOR UPDATE USING (auth.uid() = id);

DROP POLICY IF EXISTS "Admins can read all users" ON users;
CREATE POLICY "Admins can read all users" ON users
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- RLS Policies for tickets table
DROP POLICY IF EXISTS "Users can view own tickets" ON tickets;
CREATE POLICY "Users can view own tickets" ON tickets
  FOR SELECT USING (
    auth.uid() = created_by OR 
    auth.uid() = assigned_to OR
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

DROP POLICY IF EXISTS "Users can create tickets" ON tickets;
CREATE POLICY "Users can create tickets" ON tickets
  FOR INSERT WITH CHECK (auth.uid() = created_by);

DROP POLICY IF EXISTS "Assigned users and admins can update tickets" ON tickets;
CREATE POLICY "Assigned users and admins can update tickets" ON tickets
  FOR UPDATE USING (
    auth.uid() = assigned_to OR
    auth.uid() = created_by OR
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- RLS Policies for knowledge_base table
DROP POLICY IF EXISTS "Anyone can view published articles" ON knowledge_base;
CREATE POLICY "Anyone can view published articles" ON knowledge_base
  FOR SELECT USING (status = 'published');

DROP POLICY IF EXISTS "Authors can manage own articles" ON knowledge_base;
CREATE POLICY "Authors can manage own articles" ON knowledge_base
  FOR ALL USING (auth.uid() = author_id);

DROP POLICY IF EXISTS "Admins can manage all articles" ON knowledge_base;
CREATE POLICY "Admins can manage all articles" ON knowledge_base
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- RLS Policies for workflows table
DROP POLICY IF EXISTS "Admins can manage workflows" ON workflows;
CREATE POLICY "Admins can manage workflows" ON workflows
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

DROP POLICY IF EXISTS "Users can view active workflows" ON workflows;
CREATE POLICY "Users can view active workflows" ON workflows
  FOR SELECT USING (is_active = true);

-- RLS Policies for analytics table
DROP POLICY IF EXISTS "Admins can manage analytics" ON analytics;
CREATE POLICY "Admins can manage analytics" ON analytics
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- RLS Policies for chat_messages table
DROP POLICY IF EXISTS "Users can view messages for their tickets" ON chat_messages;
CREATE POLICY "Users can view messages for their tickets" ON chat_messages
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM tickets 
      WHERE id = chat_messages.ticket_id 
      AND (created_by = auth.uid() OR assigned_to = auth.uid())
    ) OR
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

DROP POLICY IF EXISTS "Users can create messages for their tickets" ON chat_messages;
CREATE POLICY "Users can create messages for their tickets" ON chat_messages
  FOR INSERT WITH CHECK (
    sender_id = auth.uid() AND
    EXISTS (
      SELECT 1 FROM tickets 
      WHERE id = chat_messages.ticket_id 
      AND (created_by = auth.uid() OR assigned_to = auth.uid())
    )
  );

-- Create functions for automatic timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for automatic timestamp updates
DROP TRIGGER IF EXISTS update_users_updated_at ON users;
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_tickets_updated_at ON tickets;
CREATE TRIGGER update_tickets_updated_at BEFORE UPDATE ON tickets
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_knowledge_base_updated_at ON knowledge_base;
CREATE TRIGGER update_knowledge_base_updated_at BEFORE UPDATE ON knowledge_base
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_workflows_updated_at ON workflows;
CREATE TRIGGER update_workflows_updated_at BEFORE UPDATE ON workflows
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data for testing
INSERT INTO users (id, email, full_name, role, is_verified) VALUES
  ('00000000-0000-0000-0000-000000000001', 'admin@bsm-platform.com', 'Admin User', 'admin', true),
  ('00000000-0000-0000-0000-000000000002', 'customer@bsm-platform.com', 'Customer User', 'customer', true)
ON CONFLICT (email) DO NOTHING;

-- Insert sample knowledge base articles
INSERT INTO knowledge_base (title, content, category, author_id, status, published_at) VALUES
  (
    'Getting Started with BSM Platform',
    'Welcome to the BSM Platform! This guide will help you get started with using our comprehensive business service management solution.',
    'Getting Started',
    '00000000-0000-0000-0000-000000000001',
    'published',
    NOW()
  ),
  (
    'How to Submit a Support Ticket',
    'Learn how to submit support tickets effectively to get the help you need quickly.',
    'Support',
    '00000000-0000-0000-0000-000000000001',
    'published',
    NOW()
  ),
  (
    'Understanding Ticket Priorities',
    'Learn about different ticket priority levels and when to use each one.',
    'Support',
    '00000000-0000-0000-0000-000000000001',
    'published',
    NOW()
  )
ON CONFLICT DO NOTHING;

-- Insert sample analytics data
INSERT INTO analytics (metric_name, metric_value, metric_type, tags) VALUES
  ('total_tickets', 156, 'gauge', '{"category": "tickets"}'),
  ('resolved_tickets', 147, 'gauge', '{"category": "tickets"}'),
  ('average_resolution_time', 2.5, 'gauge', '{"category": "performance", "unit": "hours"}'),
  ('customer_satisfaction', 4.2, 'gauge', '{"category": "satisfaction", "scale": "1-5"}'),
  ('knowledge_base_views', 1247, 'counter', '{"category": "knowledge_base"}'),
  ('published_articles', 892, 'gauge', '{"category": "knowledge_base"}')
ON CONFLICT DO NOTHING;
