'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { useSpring, animated } from '@react-spring/web'
import { useGesture } from '@use-gesture/react'
import { Shield, Menu, X, Home, Users, Settings, BarChart3, MessageSquare } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/theme-toggle'

interface NavItem {
  name: string
  href: string
  icon: React.ComponentType<any>
  description: string
}

const navItems: NavItem[] = [
  // Navigation tabs removed as requested
]

export function MorphingNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeItem, setActiveItem] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const navRef = useRef<HTMLDivElement>(null)
  
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 100], [0, -20])
  const opacity = useTransform(scrollY, [0, 100], [1, 0.9])
  const scale = useTransform(scrollY, [0, 100], [1, 0.98])

  // Mouse tracking for magnetic effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Orbital Menu Animation
  const orbitalSpring = useSpring({
    transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)',
    config: { tension: 300, friction: 30 }
  })

  // Magnetic Button Component with Hover Effects
  function MagneticButton({ children, index, onClick }: { children: React.ReactNode, index: number, onClick: () => void }) {
    const [isHovered, setIsHovered] = useState(false)
    const buttonRef = useRef<HTMLButtonElement>(null)

    const bind = useGesture({
      onHover: ({ hovering }) => {
        setIsHovered(hovering ?? false)
        setHoveredIndex(hovering ? index : null)
      },
      onMove: ({ xy: [x, y] }) => {
        if (buttonRef.current && isHovered) {
          const rect = buttonRef.current.getBoundingClientRect()
          const centerX = rect.left + rect.width / 2
          const centerY = rect.top + rect.height / 2
          const deltaX = (x - centerX) * 0.1
          const deltaY = (y - centerY) * 0.1
          
          buttonRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.1)`
        }
      },
      onMoveEnd: () => {
        if (buttonRef.current) {
          buttonRef.current.style.transform = 'translate(0px, 0px) scale(1)'
        }
        setHoveredIndex(null)
      }
    })

    return (
      <motion.button
        ref={buttonRef}
        onClick={onClick}
        className="relative p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          rotate: isOpen ? 0 : index * 72,
          x: isOpen ? 0 : Math.cos((index * 72 * Math.PI) / 180) * 80 + (Math.sin(Date.now() * 0.001 + index) * 10),
          y: isOpen ? 0 : Math.sin((index * 72 * Math.PI) / 180) * 80 + (Math.cos(Date.now() * 0.001 + index) * 10),
          scale: hoveredIndex === index ? 1.5 : 1,
          zIndex: hoveredIndex === index ? 10 : 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25, duration: 0.8 }}
      >
        {children}
        
        {/* Liquid Fill Effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0"
          animate={{ opacity: isHovered ? 0.3 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Particle Trail */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                  animate={{
                    x: [0, Math.cos((i * 45 * Math.PI) / 180) * 30],
                    y: [0, Math.sin((i * 45 * Math.PI) / 180) * 30],
                    opacity: [1, 0],
                    scale: [1, 0],
                  }}
                  transition={{
                    duration: 1,
                    delay: i * 0.1,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    )
  }

  return (
    <motion.nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50"
      style={{ y, opacity, scale }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with Holographic Effect */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            animate={{
              filter: [
                'drop-shadow(0 0 10px rgba(0, 102, 255, 0.5))',
                'drop-shadow(0 0 20px rgba(139, 92, 246, 0.5))',
                'drop-shadow(0 0 10px rgba(0, 102, 255, 0.5))'
              ],
              y: [0, -2, 2, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="relative p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
              <Shield className="h-6 w-6 text-white" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0"
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <motion.span
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              BSM
            </motion.span>
          </motion.div>

          {/* Desktop Navigation - Removed as requested */}

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <motion.button
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300"
              animate={{
                y: [0, -1, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.location.href = '/auth/login'}
            >
              Login
            </motion.button>
            <motion.button
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              animate={{
                y: [0, -1, 1, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 2 + Math.random() * 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(139, 92, 246, 0.7)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/auth/login?role=admin'}
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.85 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Removed as requested */}

      {/* Orbital Menu - Removed as requested */}
    </motion.nav>
  )
}
