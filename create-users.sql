-- Create users for BSM Platform login
-- Run this in your Supabase SQL Editor

-- First, create the users table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.users (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  role TEXT CHECK (role IN ('admin', 'customer')) DEFAULT 'customer',
  avatar_url TEXT,
  is_verified BOOLEAN DEFAULT false,
  last_login TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own profile" ON public.users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.users
  FOR UPDATE USING (auth.uid() = id);

-- Create function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, email, full_name, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'role', 'customer')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Now create the demo users
-- Note: You need to create these users through Supabase Auth first, then run this part

-- Insert demo users (replace with actual UUIDs from auth.users after creating them)
-- Admin user
INSERT INTO public.users (id, email, full_name, role, is_verified) VALUES
  ('00000000-0000-0000-0000-000000000001', 'admin@bsm.com', 'Admin User', 'admin', true)
ON CONFLICT (email) DO UPDATE SET
  role = EXCLUDED.role,
  full_name = EXCLUDED.full_name,
  is_verified = EXCLUDED.is_verified;

-- Customer user
INSERT INTO public.users (id, email, full_name, role, is_verified) VALUES
  ('00000000-0000-0000-0000-000000000002', 'customer@bsm.com', 'Customer User', 'customer', true)
ON CONFLICT (email) DO UPDATE SET
  role = EXCLUDED.role,
  full_name = EXCLUDED.full_name,
  is_verified = EXCLUDED.is_verified;
