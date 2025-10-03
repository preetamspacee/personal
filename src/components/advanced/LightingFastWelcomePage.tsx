'use client'

import { useState, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Optimized imports for critical components only
import { DataVisualization } from './DataVisualization'
import { ImmersiveHero } from './ImmersiveHero'
import { MorphingNavigation } from './MorphingNavigation'

// Ultra-lightweight quantum background - minimal implementation
const UltraFastQuantumBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent animate-pulse" style={{
      animationDuration: '3s',
      willChange: 'opacity'
    }} />
  </div>
)

// Enhanced hero section with statistics
const LightningHeroSection = ({ onDemoMode, isDemoMode }: { onDemoMode: () => void, isDemoMode: boolean }) => {
  const toggleDemoMode = useCallback(() => {
    onDemoMode()
  }, [onDemoMode])

  const stats = useMemo(() => [
    { label: "Users", value: "15,000+" },
    { label: "Companies", value: "200+" },
    { label: "Integrations", value: "50+" },
    { label: "Awards", value: "10+" }
  ], [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Optimized background */}
      <div 
        className="absolute inset-0 dark:bg-gradient-to-br dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 bg-gradient-to-b from-[#f9fafc] to-[#eef3ff]"
        style={{ 
          willChange: 'transform',
          transform: 'translateZ(0)', // Force GPU acceleration
        }}
      />
      
      {/* Premium glassmorphism */}
      <div className="absolute inset-0 dark:hidden bg-gradient-to-br from-white/30 via-transparent to-blue-50/20 backdrop-blur-xl" />
      
      {/* Minimal quantum background */}
      <UltraFastQuantumBackground />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        <motion.h1
          className="text-6xl md:text-8xl font-bold dark:text-white text-[#1a1a1a] mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ willChange: 'transform, opacity' }}
        >
          BSM Platform
        </motion.h1>

        <motion.p
          className="text-xl dark:text-gray-300 text-[#4b5563] mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Advanced Business Service Management
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link href="/auth/login" className="flex">
            <button className="bg-gradient-to-r from-[#4f46e5] to-[#0ea5e9] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl ring-1 ring-white/20 transition-all duration-75 hover:scale-105">
              Get Started
            </button>
          </Link>
          
          <button className="dark:bg-white/10 dark:text-gray-300 dark:hover:bg-white/20 bg-white/70 backdrop-blur-md border border-white/30 text-[#4b5563] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/90 hover:border-white/50 transition-all duration-75 hover:scale-105">
            Learn More
          </button>
        </motion.div>

        {/* Statistics grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
              style={{ willChange: 'transform' }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#4f46e5] to-[#0ea5e9] bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm dark:text-gray-400 text-[#6b7280] font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick demo toggle */}
        <motion.div
          className="flex items-center justify-center space-x-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <span className="text-sm dark:text-gray-400 text-[#4b5563]">Demo Mode:</span>
          <motion.button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isDemoMode 
                ? 'bg-gradient-to-r from-[#4f46e5] to-[#0ea5e9] text-white shadow-lg hover:shadow-xl ring-1 ring-white/20' 
                : 'dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 bg-white/70 backdrop-blur-md border border-white/30 text-[#4b5563] hover:bg-white/90 hover:border-white/50'
            }`}
            onClick={toggleDemoMode}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
            style={{ willChange: 'transform' }}
          >
            {isDemoMode ? 'ON' : 'OFF'}
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

// BSM Platform Introduction Section
const BSMPlatformIntro = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f9fafc] to-[#eef3ff] dark:bg-gradient-to-br dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 relative">
      <div className="absolute inset-0 dark:hidden bg-gradient-to-br from-white/20 via-transparent to-indigo-50/30 backdrop-blur-lg"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold dark:text-white text-[#1a1a1a] mb-6">
            BSM Platform
          </h2>
          <p className="text-xl dark:text-gray-300 text-[#4b5563] max-w-3xl mx-auto">
            Actionable Business Service Management
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Admin Portal Card */}
          <motion.div
            className="bg-white/70 backdrop-blur-md border border-white/30 shadow-lg shadow-gray-200/70 rounded-2xl p-8 cursor-pointer transition-all duration-75 hover:shadow-xl hover:shadow-gray-300/50 hover:bg-white/80 hover:scale-105"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ willChange: 'transform' }}
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/30 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-2xl font-bold dark:text-white text-[#1a1a1a]">Admin Portal</h3>
            </div>
            
            <p className="dark:text-gray-400 text-[#4b5563] text-lg mb-6">
              Complete administration dashboard with analytics, workflow management, and security controls.
            </p>
            
            <Link href="/admin/dashboard">
              <button className="w-full bg-gradient-to-r from-[#4f46e5] to-[#0ea5e9] text-white py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl ring-1 ring-white/20 transition-all duration-75 hover:scale-105">
                Launch Admin Portal
              </button>
            </Link>
          </motion.div>

          {/* Customer Portal Card */}
          <motion.div
            className="bg-white/70 backdrop-blur-md border border-white/30 shadow-lg shadow-gray-200/70 rounded-2xl p-8 cursor-pointer transition-all duration-75 hover:shadow-xl hover:shadow-gray-300/50 hover:bg-white/80 hover:scale-105"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ willChange: 'transform' }}
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/30 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold dark:text-white text-[#1a1a1a]">Customer Portal</h3>
            </div>
            
            <p className="dark:text-gray-400 text-[#4b5563] text-lg mb-6">
              Intuitive customer interface for submitting tickets, accessing knowledge base, and real-time support.
            </p>
            
            <Link href="/customer/dashboard">
              <button className="w-full bg-gradient-to-r from-[#4f46e5] to-[#0ea5e9] text-white py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl ring-1 ring-white/20 transition-all duration-75 hover:scale-105">
                Launch Customer Portal
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Ultra-fast service cards section
const LightningServiceShowcase = ({ selectedFilter, setSelectedFilter }: { selectedFilter: string, setSelectedFilter: (filter: string) => void }) => {
  const serviceCards = useMemo(() => [
    {
      id: 'dashboard',
      title: 'Dashboard Overview',
      description: 'Real-time analytics and key metrics',
      gradient: 'from-blue-500/20 to-purple-500/20',
      badge: 'Dashboard',
      badgeColor: 'text-blue-400 bg-blue-500/20',
      emoji: '📊',
      onClick: () => window.open('/admin/dashboard', '_blank')
    },
    {
      id: 'portal',
      title: 'Admin Portal',
      description: 'Complete administration dashboard',
      gradient: 'from-green-500/20 to-teal-500/20',
      badge: 'Portal',
      badgeColor: 'text-green-400 bg-green-500/20',
      emoji: '⚙️',
      onClick: () => window.open('/admin/portal', '_blank')
    },
    {
      id: 'analytics',
      title: 'Analytics Engine',
      description: 'Advanced data visualization',
      gradient: 'from-purple-500/20 to-pink-500/20',
      badge: 'Analytics',
      badgeColor: 'text-purple-400 bg-purple-500/20',
      emoji: '📈',
      onClick: () => alert('Coming Soon!')
    }
  ], [])

  return (
    <section className="py-20 dark:bg-gradient-to-r dark:from-slate-800 dark:to-gray-900 bg-gradient-to-b from-blue-50/30 to-indigo-50/50 relative overflow-hidden">
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 dark:hidden bg-gradient-to-br from-white/20 via-transparent to-blue-50/30 backdrop-blur-lg" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold dark:text-white text-[#1a1a1a] mb-4">Platform Service Showcase</h2>
          <p className={`dark:text-gray-400 text-[#4b5563] text-lg`}>Interactive tools and real-time metrics</p>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['All', 'Dashboard', 'Portal', 'Analytics'].map((filter) => (
            <button 
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium hover:scale-105 transition-all duration-75 ${
                selectedFilter === filter 
                  ? 'bg-gradient-to-r from-[#4f46e5] to-[#0ea5e9] text-white shadow-lg ring-1 ring-white/20' 
                  : 'dark:bg-white/10 dark:backdrop-blur-lg dark:border dark:border-white/20 dark:text-gray-300 dark:hover:bg-white/20 bg-white/70 backdrop-blur-md border border-white/30 text-[#4b5563] hover:bg-white/90 hover:border-white/50 shadow-lg shadow-gray-200/50'
              }`}
              style={{ willChange: 'transform' }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((card, index) => (
            <motion.div
              key={card.id}
              className="group dark:bg-white/5 dark:backdrop-blur-sm dark:border dark:border-white/10 bg-white/70 backdrop-blur-md border border-white/30 shadow-lg shadow-gray-200/70 rounded-2xl p-6 cursor-pointer transition-all duration-75 hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-300/50 hover:bg-white/80"
              onClick={card.onClick}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ willChange: 'transform' }}
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`px-3 py-1 ${card.badgeColor} text-xs font-medium rounded-full`}>
                  {card.badge}
                </span>
                <span>❤️</span>
              </div>
              
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center`}>
                <span className="text-2xl">{card.emoji}</span>
              </div>
              
              <h3 className="text-xl font-semibold dark:text-white text-[#1a1a1a] mb-2">{card.title}</h3>
              <p className="dark:text-gray-400 text-[#4b5563] text-sm mb-4">{card.description}</p>
              
              <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3 dark:text-gray-400 text-[#6b7280] text-sm">
                  <span>❤️ {Math.floor(Math.random() * 100) + 20}</span>
                  <span>👁️ {Math.floor(Math.random() * 200) + 50}</span>
                </div>
              </div>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation()
                  card.onClick()
                }}
                className="w-full bg-gradient-to-r from-[#4f46e5] to-[#0ea5e9] text-white py-2 rounded-lg text-sm font-medium shadow-lg hover:shadow-xl ring-1 ring-white/20 hover:scale-105 transition-all duration-75"
              >
                View Details →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Main component with ultra-fast rendering
export function LightningFastWelcomePage() {
  const [isDemoMode, setIsDemoMode] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState('All')

  const toggleDemoMode = useCallback(() => {
    setIsDemoMode(prev => !prev)
  }, [])

  const handleDemoMode = useCallback((mode: boolean) => {
    setIsDemoMode(mode)
  }, [])

  return (
    <div className="min-h-screen dark:bg-gradient-to-br dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 bg-gradient-to-b from-[#f9fafc] to-[#eef3ff]">
      {/* Ultra-fast navigation */}
      <MorphingNavigation isDemoMode={isDemoMode} onToggleDemo={toggleDemoMode} />
      
      {/* Ultra-fast hero */}
      <ImmersiveHero />
      
      {/* Lightning-fast main hero */}
      <LightningHeroSection onDemoMode={handleDemoMode} isDemoMode={isDemoMode} />
      
      {/* BSM Platform Introduction */}
      <BSMPlatformIntro />
      
      {/* Lightning-fast service showcase */}
      <LightningServiceShowcase selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
      
      {/* Ultra-fast analytics section */}
      <section className="py-20 dark:bg-gradient-to-br dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 bg-gradient-to-b from-emerald-50/30 to-teal-50/50 relative">
        <div className="absolute inset-0 dark:hidden bg-gradient-to-br from-white/20 via-transparent to-emerald-50/30 backdrop-blur-lg"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold dark:text-white text-[#1a1a1a] mb-6">
              Real-time <span className="bg-gradient-to-r from-[#4f46e5] to-[#10b981] bg-clip-text text-transparent">Analytics</span>
            </h2>
            <p className="text-xl dark:text-gray-300 text-[#4b5563] max-w-3xl mx-auto">
              Advanced data visualization and performance metrics with interactive charts and live updates
            </p>
          </motion.div>
          
          <DataVisualization />
          
          {/* Visual Knowledge Base Section */}
          <section className="py-20 bg-gradient-to-b from-purple-50/30 to-pink-50/50 dark:bg-gradient-to-r dark:from-purple-900/20 dark:to-pink-900/20 relative">
            <div className="absolute inset-0 dark:hidden bg-gradient-to-br from-white/20 via-transparent to-purple-50/30 backdrop-blur-lg"></div>
            
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold dark:text-white text-[#1a1a1a] mb-6">
                  Visual <span className="bg-gradient-to-r from-[#4f46e5] to-[#10b981] bg-clip-text text-transparent">Knowledge Base</span>
                </h2>
                <p className="text-xl dark:text-gray-300 text-[#4b5563] max-w-3xl mx-auto">
                  Visualize data clearly with intelligent content mapping
                </p>
              </motion.div>

              {/* Multi-Channel Ecosystem */}
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-3xl font-bold dark:text-white text-[#1a1a1a] mb-4">
                  Multi-Channel Ecosystem
                </h3>
                <p className="text-lg dark:text-gray-300 text-[#4b5563] mb-12">
                  Connect your tools and services seamlessly
                </p>
              </motion.div>

              {/* Advanced Effects Demo */}
              <motion.div
                className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-3xl p-12 mb-16 relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ willChange: 'transform' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Advanced Effects Demo</h3>
                  <div className="flex justify-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full flex items-center justify-center animate-pulse">
                      <span className="text-white text-xl">✨</span>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: '0.5s' }}>
                      <span className="text-white text-xl">🌟</span>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-400/30 to-blue-400/30 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: '1s' }}>
                      <span className="text-white text-xl">💫</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Smart Automation", icon: "🤖", gradient: "from-blue-500/20 to-purple-500/20" },
                  { title: "Real-time Analytics", icon: "📊", gradient: "from-purple-500/20 to-pink-500/20" },
                  { title: "Unified Inbox", icon: "📬", gradient: "from-pink-500/20 to-red-500/20" },
                  { title: "Seamless Integrations", icon: "🔗", gradient: "from-red-500/20 to-orange-500/20" }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="bg-white/70 backdrop-blur-md border border-white/30 shadow-lg shadow-gray-200/70 rounded-2xl p-6 text-center hover:shadow-xl hover:shadow-gray-300/50 hover:bg-white/80 hover:scale-105 transition-all duration-75"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    style={{ willChange: 'transform' }}
                  >
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center`}>
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <h4 className="text-lg font-semibold dark:text-white text-[#1a1a1a]">{feature.title}</h4>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Enterprise Features Section */}
          <section className="py-20 bg-gradient-to-b from-gray-50/30 to-gray-100/50 dark:bg-gradient-to-r dark:from-gray-900 dark:to-slate-800 relative">
            <div className="absolute inset-0 dark:hidden bg-gradient-to-br from-white/10 via-transparent to-gray-50/20 backdrop-blur-lg"></div>
            
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold dark:text-white text-[#1a1a1a] mb-6">
                  Enterprise Features
                </h2>
                <p className="text-xl dark:text-gray-300 text-[#4b5563] max-w-3xl mx-auto">
                  Unlock enterprise-grade capabilities to power your business
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { 
                    title: "AI-Powered Automation", 
                    icon: "🤖", 
                    description: "Intelligent automation for workflow optimization",
                    color: "bg-gradient-to-br from-blue-500/20 to-purple-500/20"
                  },
                  { 
                    title: "Scalable Infrastructure", 
                    icon: "☁️", 
                    description: "Cloud-native architecture for global scale",
                    color: "bg-gradient-to-br from-purple-500/20 to-pink-500/20"
                  },
                  { 
                    title: "Advanced Security", 
                    icon: "🔒", 
                    description: "Enterprise-grade security and compliance",
                    color: "bg-gradient-to-br from-green-500/20 to-teal-500/20"
                  },
                  { 
                    title: "Real-time Monitoring", 
                    icon: "📊", 
                    description: "Live system monitoring and alerting",
                    color: "bg-gradient-to-br from-teal-500/20 to-blue-500/20"
                  },
                  { 
                    title: "Integration Hub", 
                    icon: "🔗", 
                    description: "Connect with 100+ third-party services",
                    color: "bg-gradient-to-br from-pink-500/20 to-red-500/20"
                  },
                  { 
                    title: "Global Support", 
                    icon: "🌍", 
                    description: "24/7 enterprise support worldwide",
                    color: "bg-gradient-to-br from-red-500/20 to-orange-500/20"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="bg-white/70 backdrop-blur-md border border-white/30 shadow-lg shadow-gray-200/70 rounded-2xl p-6 hover:shadow-xl hover:shadow-gray-300/50 hover:bg-white/80 hover:scale-105 transition-all duration-75"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    style={{ willChange: 'transform' }}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mr-4`}>
                        <span className="text-xl">{feature.icon}</span>
                      </div>
                      <h3 className="text-lg font-semibold dark:text-white text-[#1a1a1a]">{feature.title}</h3>
                    </div>
                    <p className="dark:text-gray-400 text-[#4b5563] text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="py-20 bg-gradient-to-b from-indigo-50/50 to-purple-50/50 dark:bg-gradient-to-r dark:from-indigo-900/30 dark:to-purple-900/30 relative">
            <div className="absolute inset-0 dark:hidden bg-gradient-to-br from-white/20 via-transparent to-indigo-50/20 backdrop-blur-lg"></div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold dark:text-white text-[#1a1a1a] mb-6">
                  Ready to Transform Your Operations?
                </h2>
                <p className="text-xl dark:text-gray-300 text-[#4b5563] mb-12 max-w-3xl mx-auto">
                  Join thousands of companies already using BSM Platform to streamline their operations
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <button className="bg-gradient-to-r from-[#4f46e5] to-[#0ea5e9] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl ring-1 ring-white/20 transition-all duration-75 hover:scale-105">
                    Start Free Trial
                  </button>
                  <button className="dark:bg-white/10 dark:text-gray-300 dark:hover:bg-white/20 bg-white/70 backdrop-blur-md border border-white/30 text-[#4b5563] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/90 hover:border-white/50 transition-all duration-75 hover:scale-105">
                    View Our Demo
                  </button>
                </div>
              </motion.div>
            </div>
          </section>
        
          {/* Comprehensive Footer */}
          <motion.footer
            className="dark:bg-black/80 dark:backdrop-blur-lg dark:border-t dark:border-gray-800 bg-gray-100 border-t border-gray-300 py-12 mt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                {/* BSM Platform */}
                <div>
                  <h3 className="dark:text-white text-[#1a1a1a] font-bold text-lg mb-4">BSM Platform</h3>
                  <p className="dark:text-gray-400 text-[#6b7280] mb-4">
                    Enterprise-grade business service management with AI-powered automation and real-time analytics.
                  </p>
                </div>
                
                {/* Solutions */}
                <div>
                  <h4 className="dark:text-white text-[#1a1a1a] font-semibold mb-4">Solutions</h4>
                  <ul className="space-y-2 dark:text-gray-400 text-[#6b7280]">
                    <li><a href="#" className="hover:text-gray-900 transition-colors">IT Service Management</a></li>
                    <li><a href="#" className="hover:text-gray-900 transition-colors">Customer Support</a></li>
                    <li><a href="#" className="hover:text-gray-900 transition-colors">Workflow Automation</a></li>
                    <li><a href="#" className="hover:text-gray-900 transition-colors">Performance Analytics</a></li>
                  </ul>
                </div>
                
                {/* Resources */}
                <div>
                  <h4 className="dark:text-white text-[#1a1a1a] font-semibold mb-4">Resources</h4>
                  <ul className="space-y-2 dark:text-gray-400 text-[#6b7280]">
                    <li><a href="#" className="hover:text-gray-900 transition-colors">Documentation</a></li>
                    <li><a href="#" className="hover:text-gray-900 transition-colors">API Reference</a></li>
                    <li><a href="#" className="hover:text-gray-900 transition-colors">Blog</a></li>
                    <li><a href="#" className="hover:text-gray-900 transition-colors">Case Studies</a></li>
                  </ul>
                </div>
                
                {/* Team */}
                <div>
                  <h4 className="dark:text-white text-[#1a1a1a] font-semibold mb-4">Team</h4>
                  <ul className="space-y-2 dark:text-gray-400 text-[#6b7280]">
                    <li><a href="#" className="hover:text-gray-900 transition-colors">About Us</a></li>
                    <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
                    <li><a href="#" className="hover:text-gray-900 transition-colors">Contact Us</a></li>
                    <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
                  </ul>
                </div>
              </div>
              
              <div className="border-t border-gray-300 dark:border-gray-700 pt-8 text-center">
                <p className="dark:text-gray-400 text-[#6b7280]">
                  © 2024 BSM Platform. All rights reserved.
                </p>
              </div>
            </div>
          </motion.footer>
        </div>
      </section>
    </div>
  )
}
