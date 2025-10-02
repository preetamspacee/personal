'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'

// Optimized quantum background with GPU acceleration
export const OptimizedQuantumBackground = memo(() => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* GPU-optimized particle system */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(120, 119, 198, 0.3), transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 119, 198, 0.3), transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(120, 219, 255, 0.3), transparent 50%)
          `,
          willChange: 'transform',
          transform: 'translateZ(0)'
        }}
        animate={{
          backgroundPosition: [
            '0% 0%, 100% 100%, 50% 50%',
            '100% 100%, 0% 0%, 100% 0%',
            '0% 0%, 100% 100%, 50% 50%'
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating quantum nodes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
            willChange: 'transform'
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Energy waves */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'linear-gradient(45deg, transparent 30%, rgba(56, 189, 248, 0.1) 50%, transparent 70%)',
          willChange: 'transform'
        }}
        animate={{
          transform: ['translateX(-100%)', 'translateX(100%)']
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
})

OptimizedQuantumBackground.displayName = 'OptimizedQuantumBackground'
