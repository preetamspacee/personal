'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase/client'
import { AuthContextType, AuthUser } from '@/types/auth'
import toast from 'react-hot-toast'

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mock user for frontend development
    setUser({
      id: 'mock-user-id',
      email: 'demo@bsm-platform.com',
      role: 'admin',
      full_name: 'Demo User',
      avatar_url: null,
      is_verified: true,
      last_login: new Date().toISOString(),
    })
    setLoading(false)
  }, [])

  const fetchUserProfile = async (authUser: User) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', authUser.id)
        .single()

      if (error) {
        console.error('Error fetching user profile:', error)
        return
      }

      setUser({
        ...authUser,
        role: data.role,
        full_name: data.full_name,
        avatar_url: data.avatar_url,
        is_verified: data.is_verified,
        last_login: data.last_login,
      })
    } catch (error) {
      console.error('Error in fetchUserProfile:', error)
    }
  }

  const signIn = async ({ email, password, role }: { email: string; password: string; role: 'admin' | 'customer' }) => {
    try {
      // Mock authentication for frontend development
      setUser({
        id: 'mock-user-id',
        email,
        role,
        full_name: role === 'admin' ? 'Admin User' : 'Customer User',
        avatar_url: null,
        is_verified: true,
        last_login: new Date().toISOString(),
      })
      toast.success('Successfully signed in!')
    } catch (error: any) {
      toast.error(error.message || 'Failed to sign in')
      throw error
    }
  }

  const signUp = async ({ email, password, full_name, role }: { email: string; password: string; full_name: string; role: 'admin' | 'customer' }) => {
    try {
      // Mock signup for frontend development
      setUser({
        id: 'mock-user-id',
        email,
        role,
        full_name,
        avatar_url: null,
        is_verified: true,
        last_login: new Date().toISOString(),
      })
      toast.success('Account created successfully!')
    } catch (error: any) {
      toast.error(error.message || 'Failed to create account')
      throw error
    }
  }

  const signOut = async () => {
    try {
      // Mock signout for frontend development
      setUser(null)
      toast.success('Successfully signed out!')
    } catch (error: any) {
      toast.error(error.message || 'Failed to sign out')
      throw error
    }
  }

  const resetPassword = async (email: string) => {
    try {
      // Mock password reset for frontend development
      toast.success('Password reset email sent!')
    } catch (error: any) {
      toast.error(error.message || 'Failed to send reset email')
      throw error
    }
  }

  const updateProfile = async (updates: Partial<AuthUser>) => {
    try {
      if (!user) throw new Error('No user logged in')

      // Mock profile update for frontend development
      setUser({ ...user, ...updates })
      toast.success('Profile updated successfully!')
    } catch (error: any) {
      toast.error(error.message || 'Failed to update profile')
      throw error
    }
  }

  const value: AuthContextType = {
    user,
    loading,
    signIn,
    signUp,
    signOut,
    resetPassword,
    updateProfile,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
