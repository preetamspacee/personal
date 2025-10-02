'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { QuantumBackground } from './QuantumBackground'
import { MorphingNavigation } from './MorphingNavigation'
import { ImmersiveHero } from './ImmersiveHero'
import { DataVisualization } from './DataVisualization'
import { InteractionEcosystem } from './InteractionEcosystem'
import { PhotoBoard } from './PhotoBoard'

export function AdvancedWelcomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  const [isFeaturesHovered, setIsFeaturesHovered] = useState(false)

  // Simulate loading time for advanced animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
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
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
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
            transition={{ duration: 3, repeat: Infinity }}
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
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <motion.p
            className="text-gray-400 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Initializing quantum systems...
          </motion.p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white light:bg-white light:text-gray-900 midnight:bg-gray-900 midnight:text-white transition-colors duration-300">
      {/* Quantum Background System */}
      <QuantumBackground />

      {/* Advanced Navigation */}
      <MorphingNavigation />

      {/* Scrollable Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center">
          <ImmersiveHero />
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gradient-to-b from-transparent to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
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
                    rotate: [0, 1, -1, 0],
                    scale: [1, 1.03, 1]
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.4
                  }}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -15,
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
        <section id="data" className="py-20">
          <DataVisualization />
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gradient-to-b from-black/50 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
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
                { name: "Ticket Management", count: "15K+", color: "from-blue-500 to-cyan-500" },
                { name: "Workflow Automation", count: "200+", color: "from-purple-500 to-pink-500" },
                { name: "AI Analytics", count: "50+", color: "from-green-500 to-emerald-500" },
                { name: "Integrations", count: "10+", color: "from-yellow-500 to-orange-500" }
              ].map((feature, index) => (
                <motion.div
                  key={feature.name}
                  className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  animate={{
                    y: [0, -3, 3, 0],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{
                    duration: 3 + Math.random() * 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                  whileHover={{ 
                    scale: 1.15,
                    y: -8,
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

        {/* Photo Board Section */}
        <section id="gallery" className="py-20">
          <PhotoBoard />
        </section>

        {/* Interactive Demo Section */}
        <section id="demo" className="py-20">
          <InteractionEcosystem />
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
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
                  onClick={() => window.location.href = '/admin/dashboard'}
                >
                  Access Admin Dashboard
                </motion.button>
                
                <motion.button
                  className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-lg font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => window.location.href = '/customer/dashboard'}
                >
                  Go to Customer Portal
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
