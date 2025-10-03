'use client'

import React, { useState, useEffect, memo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { supabase } from '@/lib/supabase/client'
import Link from 'next/link'

// Import all advanced components for full experience
import { OptimizedQuantumBackground } from './OptimizedQuantumBackground'
import { DataVisualization } from './DataVisualization'
import { ImmersiveHero } from './ImmersiveHero'
import { InteractionEcosystem } from './InteractionEcosystem'
import { PhotoBoard } from './PhotoBoard'
import { MorphingNavigation } from './MorphingNavigation'

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

// Memoized hero components for better performance
const MemoizedHeroSection = memo(({ onDemoMode, isDemoMode }: { onDemoMode: () => void, isDemoMode: boolean }) => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Optimized background with GPU acceleration */}
    <div 
      className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      style={{ 
        willChange: 'transform',
        transform: 'translateZ(0)', // Force GPU acceleration
      }}
    />
    
    {/* Optimized QuantumBackground */}
    <OptimizedQuantumBackground />
    
    {/* Hero content with optimized animations */}
    <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94] // Custom easing
        }}
      >
        <div className="mb-8">
          {/* Logo with GPU-optimized animations */}
          <motion.div
            className="mx-auto mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              duration: 0.6,
              delay: 0.2,
              type: "spring",
              stiffness: 200
            }}
            style={{ willChange: 'transform' }}
          >
            <div className="relative w-24 h-24 mx-auto">
              {/* Optimized rotating rings */}
              <motion.div
                className="absolute inset-0 border-4 border-transparent border-t-cyan-400 border-r-purple-400 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ willChange: 'transform' }}
              />
              <motion.div
                className="absolute inset-2 border-4 border-transparent border-b-blue-400 border-l-pink-400 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ willChange: 'transform' }}
              />
              <motion.div
                className="absolute inset-4 border-4 border-transparent border-t-green-400 border-r-yellow-400 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ willChange: 'transform' }}
              />
            </div>
          </motion.div>

          {/* Animated title */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
            style={{
              backgroundSize: '200% 100%',
              willChange: 'background-position'
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            BSM Platform
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 mb-4 opacity-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Advanced Business Service Management
          </motion.p>

          {/* Progress bar with optimized animation */}
          <motion.div
            className="w-80 h-2 bg-gray-800 rounded-full mx-auto overflow-hidden mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ 
                duration: 2,
                delay: 2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              style={{ willChange: 'width' }}
            />
          </motion.div>

          {/* Demo mode toggle */}
          <motion.div
            className="flex items-center justify-center space-x-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.6 }}
          >
            <span className="text-sm text-gray-400">Demo Mode:</span>
            <motion.button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                isDemoMode 
                  ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
              onClick={onDemoMode}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ willChange: 'transform' }}
            >
              {isDemoMode ? "ON" : "OFF"}
            </motion.button>
          </motion.div>
        </div>

        {/* Optimized portal cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Admin Portal Card */}
          <motion.div
            className="group relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3, duration: 0.8 }}
            whileHover={{ y: -10 }}
            style={{ willChange: 'transform' }}
          >
            <Link href="/admin/dashboard">
              <motion.div
                className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-lg border border-blue-500/30 rounded-2xl p-8 cursor-pointer overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="text-center">
                  <motion.div
                    className="mx-auto mb-6"
                    whileHover={{ rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4">Admin Portal</h3>
                  <p className="text-gray-300 mb-6">
                    Complete administration dashboard with analytics, workflow management, and system controls.
                  </p>
                  <motion.button
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ willChange: 'transform' }}
                  >
                    Access Admin Portal
                  </motion.button>
                </div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Customer Portal Card */}
          <motion.div
            className="group relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3.2, duration: 0.8 }}
            whileHover={{ y: -10 }}
            style={{ willChange: 'transform' }}
          >
            <Link href="/customer/dashboard">
              <motion.div
                className="bg-gradient-to-br from-green-900/50 to-teal-900/50 backdrop-blur-lg border border-green-500/30 rounded-2xl p-8 cursor-pointer overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="text-center">
                  <motion.div
                    className="mx-auto mb-6"
                    whileHover={{ rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-400 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4">Customer Portal</h3>
                  <p className="text-gray-300 mb-6">
                    Intuitive customer interface for submitting tickets, accessing knowledge base, and getting support.
                  </p>
                  <motion.button
                    className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white py-3 rounded-xl font-semibold"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ willChange: 'transform' }}
                  >
                    Access Customer Portal
                  </motion.button>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
))

// Enhanced Platform Service Showcase with Working Buttons
const MemoizedStatsSection = memo(() => (
  <section className="py-20 bg-gradient-to-r from-slate-800 to-gray-900 relative overflow-hidden">
    {/* Optimized background pattern */}
    <div 
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '20px 20px',
        willChange: 'transform'
      }}
    />
    
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-white mb-4">Platform Service Showcase</h2>
        <p className="text-gray-400 text-lg">Interactive tools and real-time metrics</p>
      </motion.div>

      {/* Interactive Service Buttons - Optimized */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {['Dashboard', 'Analytics', 'Tickets', 'Reports', 'Settings'].map((service, index) => (
          <button
            key={service}
            className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-150 ${
              index === 0 
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25' 
                : 'bg-white/10 backdrop-blur-lg border border-white/20 text-gray-300 hover:bg-white/20 hover:scale-105'
            }`}
          >
            {service}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Interactive Service Cards - Static */}
        <div
          className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-lg border border-blue-500/30 rounded-2xl p-6 text-center cursor-pointer group hover:scale-105 hover:-translate-y-2 transition-all duration-200"
        >
          {/* Animated Chart */}
          <div className="relative mb-4">
            <div className="h-16 flex items-end justify-center space-x-2 mb-2">
              {[65, 45, 80, 55, 90, 70, 85].map((height, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-t from-blue-500 to-purple-400 rounded-t-md"
                  style={{ width: '8px' }}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />
              ))}
            </div>
            <div className="text-3xl font-bold text-blue-400 mb-2">1,247+</div>
            <div className="text-gray-300">Active Tickets</div>
          </div>
          
          <button
            className="w-full bg-gradient-to-r from-blue-500/50 to-purple-500/50 hover:from-blue-500 hover:to-purple-500 text-white py-2 rounded-lg text-sm font-medium transition-all duration-150 hover:scale-105"
          >
            View Details →
          </button>
        </motion.div>

        <div
          className="bg-gradient-to-br from-green-600/20 to-teal-600/20 backdrop-blur-lg border border-green-500/30 rounded-2xl p-6 text-center cursor-pointer group hover:scale-105 hover:-translate-y-2 transition-all duration-200"
        >
          {/* Circular Progress Chart */}
          <div className="relative mb-4">
            <div className="w-16 h-16 mx-auto mb-3">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-green-600/30"
                  strokeLinecap="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <motion.path
                  className="text-green-400"
                  strokeLinecap="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831 15.9155 15.9155 0 0 1 0 -31.831"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 0.942 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-green-400 font-bold text-sm">
                94.2%
              </div>
            </div>
            <div className="text-gray-300">Resolution Rate</div>
          </div>
          
          <button
            className="w-full bg-gradient-to-r from-green-500/50 to-teal-500/50 hover:from-green-500 hover:to-teal-500 text-white py-2 rounded-lg text-sm font-medium transition-all duration-150 hover:scale-105"
          >
            View Details →
          </button>
        </motion.div>

        <div
          className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-6 text-center cursor-pointer group hover:scale-105 hover:-translate-y-2 transition-all duration-200"
        >
          {/* Animated Line Chart */}
          <div className="relative mb-4">
            <div className="h-16 flex items-end justify-center mb-3">
              <svg className="w-full h-full">
                <motion.path
                  d="M0,50 Q25,20 50,40 T100,30"
                  stroke="url(#purpleGradient)"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                />
                <defs>
                  <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="text-3xl font-bold text-purple-400 mb-2">892</div>
            <div className="text-gray-300">Knowledge Articles</div>
          </div>
          
          <button
            className="w-full bg-gradient-to-r from-purple-500/50 to-pink-500/50 hover:from-purple-500 hover:to-pink-500 text-white py-2 rounded-lg text-sm font-medium transition-all duration-150 hover:scale-105"
          >
            View Details →
          </button>
        </motion.div>

        <div
          className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-lg border border-orange-500/30 rounded-2xl p-6 text-center cursor-pointer group hover:scale-105 hover:-translate-y-2 transition-all duration-200"
        >
          {/* Pulse Animation */}
          <div className="relative mb-4">
            <motion.div
              className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-3 flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-white text-xl">🔄</span>
            </motion.div>
            <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
            <div className="text-gray-300">Support Available</div>
          </div>
          
          <button
            className="w-full bg-gradient-to-r from-orange-500/50 to-red-500/50 hover:from-orange-500 hover:to-red-500 text-white py-2 rounded-lg text-sm font-medium transition-all duration-150 hover:scale-105"
          >
            View Details →
          </button>
        </motion.div>
      </div>

      {/* Quick Actions - Static */}
      <div className="flex flex-wrap justify-center gap-4 mt-12">
        <Link href="/admin/dashboard">
          <button
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-150"
          >
            🚀 Access Admin Dashboard
          </button>
        </Link>
        <Link href="/customer/dashboard">
          <button
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 hover:scale-105 transition-all duration-150"
          >
            👥 Customer Portal
          </button>
        </Link>
        <Link href="/auth/login">
          <button
            className="px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-lg font-semibold hover:bg-white/25 hover:scale-105 transition-all duration-150"
          >
            🔐 Login
          </button>
        </Link>
      </div>
    </div>
  </section>
))

export function OptimizedWelcomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [isDemoMode, setIsDemoMode] = useState(false)

  // Mock data for better performance (no Supabase calls)
  const mockData = {
    analyticsData: [],
    knowledgeBaseArticles: [],
    totalTickets: 1247,
    resolvedTickets: 1174,
    customerSatisfaction: 94.2
  }

  useEffect(() => {
    // Optimized loading with faster transition
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500) // Reduced from longer load times

    return () => clearTimeout(timer)
  }, [])

  const toggleDemoMode = useCallback(() => {
    setIsDemoMode(prev => !prev)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-32 h-32 mx-auto mb-8">
            {/* Optimized loading animation */}
            <motion.div
              className="absolute inset-0 border-4 border-transparent border-t-cyan-400 border-r-purple-400 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ willChange: 'transform' }}
            />
            <motion.div
              className="absolute inset-2 border-4 border-transparent border-b-blue-400 border-l-pink-400 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ willChange: 'transform' }}
            />
          </div>
          <motion.h1
            className="text-4xl font-bold text-white mb-4"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              background: 'linear-gradient(90deg, #00FFFF, #8B5CF6, #10B981, #F59E0B, #00FFFF)',
              backgroundSize: '400% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              willChange: 'background-position'
            }}
          >
            BSM Platform
          </motion.h1>
          <motion.p
            className="text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Loading advanced systems...
          </motion.p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Morphing Navigation */}
      <MorphingNavigation isDemoMode={isDemoMode} onToggleDemo={() => setIsDemoMode(!isDemoMode)} />
      
      {/* Immersive Hero Section */}
      <ImmersiveHero />

      {/* Main Landing Hero */}
      <MemoizedHeroSection onDemoMode={toggleDemoMode} isDemoMode={isDemoMode} />
      
      {/* Platform Statistics */}
      <MemoizedStatsSection />

      {/* Data Visualization Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Real-time <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Analytics</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced data visualization and performance metrics with interactive charts and live updates
            </p>
          </motion.div>
          
          <DataVisualization />
        </div>
      </section>

      {/* Photo Board Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Visual <span className="bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">Knowledge Base</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Interactive media gallery with intelligent content organization
            </p>
          </motion.div>
          
          <PhotoBoard />
        </div>
      </section>

      {/* Interaction Ecosystem */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Multi-Channel <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Ecosystem</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unified communication hub connecting all service channels
            </p>
          </motion.div>
          
          <InteractionEcosystem />
        </div>
      </section>

      {/* Enterprise Features Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Enterprise <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced enterprise capabilities for modern business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            {[
              {
                title: "AI-Powered Automation",
                description: "Intelligent workflow automation and predictive analytics",
                icon: "🤖",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                title: "Scalable Infrastructure", 
                description: "Cloud-native architecture with auto-scaling capabilities",
                icon: "☁️",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Advanced Security",
                description: "Enterprise-grade security with SSO and audit trails", 
                icon: "🔒",
                gradient: "from-green-500 to-teal-500"
              },
              {
                title: "Real-time Monitoring",
                description: "Live system monitoring with alerts and dashboards",
                icon: "📊",
                gradient: "from-orange-500 to-red-500"
              },
              {
                title: "Integration Hub",
                description: "Connect all your tools and services seamlessly",
                icon: "🔗", 
                gradient: "from-indigo-500 to-purple-500"
              },
              {
                title: "Global Support",
                description: "24/7 support with multiple contact channels",
                icon: "🌍",
                gradient: "from-emerald-500 to-blue-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">{feature.icon}</div>
                  <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Transform Your <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Operations?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Join thousands of enterprises using BSM Platform to streamline their service operations
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/auth/signup">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Free Trial
                </motion.button>
              </Link>
              <Link href="/demo">
                <motion.button
                  className="px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-xl font-semibold text-lg hover:bg-white/20 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Live Demo
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        className="bg-black/80 backdrop-blur-lg border-t border-gray-800 py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">BSM Platform</h3>
              <p className="text-gray-400 mb-4">
                Enterprise-grade business service management with AI-powered automation and real-time analytics.

</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li>IT Service Management</li>
                <li>Customer Support</li>
                <li>Workflow Automation</li>
                <li>Performance Analytics</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Documentation</li>
                <li>API Reference</li>
                <li>Knowledge Base</li>
                <li>Best Practices</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>24/7 Support</li>
                <li>Training & Onboarding</li>
                <li>Community Forum</li>
                <li>Release Notes</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 BSM Platform. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Cookie Settings</span>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
