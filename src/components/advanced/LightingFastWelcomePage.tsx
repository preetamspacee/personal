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

// Memoized hero section with GPU acceleration
const LightningHeroSection = ({ onDemoMode, isDemoMode }: { onDemoMode: () => void, isDemoMode: boolean }) => {
  const toggleDemoMode = useCallback(() => {
    onDemoMode()
  }, [onDemoMode])

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

        {/* Quick demo toggle */}
        <motion.div
          className="flex items-center justify-center space-x-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
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
        
          {/* Fast footer */}
          <motion.footer
            className="dark:bg-black/80 dark:backdrop-blur-lg dark:border-t dark:border-gray-800 bg-gray-100 border-t border-gray-300 py-12 mt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h3 className="dark:text-white text-gray-900 font-bold text-lg mb-4">BSM Platform</h3>
                  <p className="dark:text-gray-400 text-gray-600">
                    Enterprise-grade business service management with AI-powered automation.
                  </p>
                </div>
                <div>
                  <h4 className="dark:text-white text-gray-900 font-semibold mb-4">Solutions</h4>
                  <ul className="space-y-2 dark:text-gray-400 text-gray-600">
                    <li>IT Service Management</li>
                    <li>Customer Support</li>
                    <li>Workflow Automation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="dark:text-white text-gray-900 font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2 dark:text-gray-400 text-gray-600">
                    <li><Link href="/auth/login" className="hover:text-gray-900">Admin Login</Link></li>
                    <li><Link href="/customer/dashboard" className="hover:text-gray-900">Customer Portal</Link></li>
                    <li><Link href="/admin/dashboard" className="hover:text-gray-900">Dashboard</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.footer>
        </div>
      </section>
    </div>
  )
}
