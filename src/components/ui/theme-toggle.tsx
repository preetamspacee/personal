'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Monitor, Palette } from 'lucide-react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted before rendering
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
        <Sun className="h-5 w-5 text-yellow-500" />
      </div>
    )
  }

  const themes = [
    { name: 'light', label: 'Light', icon: Sun, color: 'text-yellow-500' },
    { name: 'dark', label: 'Dark', icon: Moon, color: 'text-blue-400' },
    { name: 'midnight', label: 'Midnight', icon: Monitor, color: 'text-purple-400' },
    { name: 'system', label: 'System', icon: Palette, color: 'text-gray-400' }
  ]

  const currentTheme = themes.find(t => t.name === theme) || themes[3]

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <currentTheme.icon className={`h-5 w-5 ${currentTheme.color} group-hover:rotate-180 transition-transform duration-300`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Theme Menu */}
            <motion.div
              className="absolute top-14 right-0 z-50 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-2 min-w-[160px]"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {themes.map((themeOption, index) => (
                <motion.button
                  key={themeOption.name}
                  onClick={() => {
                    setTheme(themeOption.name)
                    setIsOpen(false)
                  }}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    theme === themeOption.name
                      ? 'bg-white/20 text-white'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  <themeOption.icon className={`h-4 w-4 ${themeOption.color}`} />
                  <span>{themeOption.label}</span>
                  {theme === themeOption.name && (
                    <motion.div
                      className="ml-auto w-2 h-2 bg-green-400 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1 }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
