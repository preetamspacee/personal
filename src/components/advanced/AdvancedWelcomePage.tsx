'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '@/lib/supabase/client'
import { QuantumBackground } from './QuantumBackground'
import { MorphingNavigation } from './MorphingNavigation'
import { ImmersiveHero } from './ImmersiveHero'
import { DataVisualization } from './DataVisualization'
import { InteractionEcosystem } from './InteractionEcosystem'

// Types for dynamic data
interface AnalyticsData {
  id: string
  metric_name: string
  metric_value: number
  metric_type: string
  tags: any
}

interface KnowledgeBaseArticle {
  id: string
  title: string
  content: string
  category: string
  tags: string[]
  view_count: number
  helpful_count: number
  published_at: string
}

export function AdvancedWelcomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  const [isFeaturesHovered, setIsFeaturesHovered] = useState(false)

  // Dynamic data states
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData[]>([])
  const [knowledgeBaseArticles, setKnowledgeBaseArticles] = useState<KnowledgeBaseArticle[]>([])
  const [totalTickets, setTotalTickets] = useState(0)
  const [resolvedTickets, setResolvedTickets] = useState(0)
  const [customerSatisfaction, setCustomerSatisfaction] = useState(0)

  // Load dynamic data from Supabase
  useEffect(() => {
    const loadDynamicData = async () => {
      try {
        // Load analytics data
        const { data: analytics, error: analyticsError } = await supabase
          .from('analytics')
          .select('*')
          .order('timestamp', { ascending: false })
          .limit(10)

        if (analyticsError) {
          console.error('Error loading analytics:', analyticsError)
        } else {
          setAnalyticsData(analytics || [])
          
          // Extract specific metrics
          const totalTicketsMetric = analytics?.find(a => a.metric_name === 'total_tickets')
          const resolvedTicketsMetric = analytics?.find(a => a.metric_name === 'resolved_tickets')
          const satisfactionMetric = analytics?.find(a => a.metric_name === 'customer_satisfaction')
          
          if (totalTicketsMetric) setTotalTickets(totalTicketsMetric.metric_value)
          if (resolvedTicketsMetric) setResolvedTickets(resolvedTicketsMetric.metric_value)
          if (satisfactionMetric) setCustomerSatisfaction(satisfactionMetric.metric_value)
        }

        // Load knowledge base articles
        const { data: articles, error: articlesError } = await supabase
          .from('knowledge_base')
          .select('*')
          .eq('status', 'published')
          .order('published_at', { ascending: false })
          .limit(6)

        if (articlesError) {
          console.error('Error loading articles:', articlesError)
        } else {
          setKnowledgeBaseArticles(articles || [])
        }

        // Minimal loading time for better performance
        setTimeout(() => {
          setIsLoading(false)
        }, 50)

      } catch (error) {
        console.error('Error loading dynamic data:', error)
        // Still show the page even if data loading fails
        setTimeout(() => {
          setIsLoading(false)
        }, 50)
      }
    }

    loadDynamicData()
  }, [])

  // Loading Screen with Advanced Animations
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50">
        <div className="text-center">
          {/* Quantum Loading Spinner */}
          <motion.div
            className="relative w-32 h-32 mx-auto mb-8"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-0 border-4 border-transparent border-t-cyan-400 border-r-purple-400 rounded-full" />
            <div className="absolute inset-2 border-4 border-transparent border-b-blue-400 border-l-pink-400 rounded-full" />
            <div className="absolute inset-4 border-4 border-transparent border-t-green-400 border-r-yellow-400 rounded-full" />
          </motion.div>

          {/* Morphing Text */}
          <motion.div
            className="text-4xl font-bold text-white mb-4"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{ duration: 0.5, repeat: Infinity }}
            style={{
              background: 'linear-gradient(90deg, #00FFFF, #8B5CF6, #10B981, #F59E0B, #00FFFF)',
              backgroundSize: '400% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            BSM Platform
          </motion.div>

          {/* Loading Progress */}
          <div className="w-64 h-1 bg-gray-800 rounded-full mx-auto overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94], type: "tween" }}
            />
          </div>

          <motion.p
            className="text-gray-400 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.05, type: "tween" }}
          >
            Initializing quantum systems...
          </motion.p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white gpu-accelerated high-performance">
      {/* Quantum Background System */}
      <QuantumBackground />

      {/* Advanced Navigation */}
      <MorphingNavigation />

      {/* Scrollable Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center gpu-accelerated performance-hint">
          <ImmersiveHero />
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gradient-to-b from-transparent to-black/50 gpu-accelerated performance-hint">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94], type: "tween" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About BSM Platform
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Our Business Service Management platform revolutionizes how organizations handle 
                customer service, workflow automation, and business operations through cutting-edge 
                AI technology and advanced analytics.
              </p>
            </motion.div>

            <div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              onMouseEnter={() => setIsFeaturesHovered(true)}
              onMouseLeave={() => setIsFeaturesHovered(false)}
            >
              {[
                {
                  title: "AI-Powered Automation",
                  description: "Intelligent workflow automation that learns and adapts to your business needs",
                  icon: "🤖"
                },
                {
                  title: "Real-time Analytics",
                  description: "Comprehensive insights and performance metrics for data-driven decisions",
                  icon: "📊"
                },
                {
                  title: "Multi-channel Support",
                  description: "Unified platform for managing all customer touchpoints and interactions",
                  icon: "🌐"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  animate={{
                    y: [0, -4, 4, 0],
                    scale: [1, 1.03, 1]
                  }}
                  transition={{
                    duration: 0.6 + Math.random() * 0.3,
                    repeat: Infinity,
                    ease: [0.4, 0, 0.2, 1],
                    delay: index * 0.02,
                    type: "tween"
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    zIndex: 20
                  }}
                  onHoverStart={() => setHoveredFeature(index)}
                  onHoverEnd={() => setHoveredFeature(null)}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Visualization Section */}
        <section id="data" className="py-20 gpu-accelerated performance-hint">
          <DataVisualization />
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gradient-to-b from-black/50 to-transparent gpu-accelerated performance-hint">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94], type: "tween" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Platform Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the comprehensive suite of tools designed to streamline your business operations
              </p>
            </motion.div>

            <div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              onMouseEnter={() => setIsFeaturesHovered(true)}
              onMouseLeave={() => setIsFeaturesHovered(false)}
            >
              {[
                { name: "Ticket Management", count: `${totalTickets.toLocaleString()}+`, color: "from-blue-500 to-cyan-500" },
                { name: "Resolved Tickets", count: `${resolvedTickets.toLocaleString()}+`, color: "from-purple-500 to-pink-500" },
                { name: "Customer Satisfaction", count: `${customerSatisfaction.toFixed(1)}/5`, color: "from-green-500 to-emerald-500" },
                { name: "Knowledge Base", count: `${knowledgeBaseArticles.length}+`, color: "from-yellow-500 to-orange-500" }
              ].map((feature, index) => (
                <motion.div
                  key={feature.name}
                  className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-30px" }}
                  animate={{
                    y: [0, -3, 3, 0],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{
                    duration: 0.5 + Math.random() * 0.2,
                    repeat: Infinity,
                    ease: [0.4, 0, 0.2, 1],
                    delay: index * 0.02,
                    type: "tween"
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -3,
                    zIndex: 20
                  }}
                  onHoverStart={() => setHoveredFeature(index)}
                  onHoverEnd={() => setHoveredFeature(null)}
                >
                  <div className={`text-3xl font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent mb-2`}>
                    {feature.count}
                  </div>
                  <div className="text-gray-300">{feature.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic Knowledge Base Section */}
        <section id="knowledge" className="py-20 gpu-accelerated performance-hint">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94], type: "tween" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Knowledge Base
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Access our comprehensive knowledge base with real-time articles and guides
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {knowledgeBaseArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.08, delay: index * 0.01, ease: [0.25, 0.46, 0.45, 0.94], type: "tween" }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                      {article.category}
                    </span>
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <span>👁️ {article.view_count}</span>
                      <span>👍 {article.helpful_count}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {article.content.substring(0, 150)}...
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="text-gray-500 text-sm">
                    Published: {new Date(article.published_at).toLocaleDateString()}
                  </div>
                </motion.div>
              ))}
            </div>

            {knowledgeBaseArticles.length === 0 && (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.02, duration: 0.08, type: "tween" }}
              >
                <div className="text-gray-400 text-lg">
                  Loading knowledge base articles...
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* Dynamic Analytics Section */}
        <section id="analytics" className="py-20 gpu-accelerated performance-hint">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94], type: "tween" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Real-time Analytics
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Live performance metrics and insights powered by Supabase
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {analyticsData.slice(0, 4).map((metric, index) => (
                <motion.div
                  key={metric.id}
                  className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.08, delay: index * 0.01, ease: [0.25, 0.46, 0.45, 0.94], type: "tween" }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
                  }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {metric.metric_type === 'gauge' 
                      ? metric.metric_value.toFixed(1)
                      : metric.metric_value.toLocaleString()
                    }
                  </div>
                  <div className="text-gray-300 text-sm mb-2">
                    {metric.metric_name.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </div>
                  <div className="text-gray-500 text-xs">
                    {metric.metric_type}
                  </div>
                </motion.div>
              ))}
            </div>

            {analyticsData.length === 0 && (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.02, duration: 0.08, type: "tween" }}
              >
                <div className="text-gray-400 text-lg">
                  Loading analytics data...
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section id="demo" className="py-20 gpu-accelerated performance-hint">
          <InteractionEcosystem />
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50 gpu-accelerated performance-hint">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94], type: "tween" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Join thousands of organizations already using BSM Platform to streamline their operations
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => window.location.href = '/auth/login?role=admin'}
                >
                  Get Started
                </motion.button>
                
                <motion.button
                  className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-lg font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => window.location.href = '/auth/login'}
                >
                  Login
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
