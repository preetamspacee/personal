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
    // Check if Supabase is configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.log('Supabase not configured, using mock authentication for development')
      // Don't auto-login in mock mode, let user sign in manually
      setUser(null)
      setLoading(false)
      return
    }

    console.log('Supabase configured, initializing auth state listener')
    console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)

    // Initialize Supabase auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state change:', event, session?.user?.email)
        if (session?.user) {
          await fetchUserProfile(session.user)
        } else {
          setUser(null)
        }
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
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
        // If user doesn't exist in our users table, create a basic profile
        const { data: newUser, error: insertError } = await supabase
          .from('users')
          .insert({
            id: authUser.id,
            email: authUser.email!,
            full_name: authUser.user_metadata?.full_name || '',
            role: 'customer', // Default role
            is_verified: authUser.email_confirmed_at ? true : false,
            last_login: new Date().toISOString(),
          })
          .select()
          .single()

        if (insertError) {
          console.error('Error creating user profile:', insertError)
          // Fallback to basic user data
          setUser({
            ...authUser,
            role: 'customer',
            full_name: authUser.user_metadata?.full_name || '',
            avatar_url: authUser.user_metadata?.avatar_url || null,
            is_verified: authUser.email_confirmed_at ? true : false,
            last_login: new Date().toISOString(),
          })
          return
        }

        setUser({
          ...authUser,
          role: newUser.role,
          full_name: newUser.full_name,
          avatar_url: newUser.avatar_url,
          is_verified: newUser.is_verified,
          last_login: newUser.last_login,
        })
        return
      }

      // Update last login
      await supabase
        .from('users')
        .update({ last_login: new Date().toISOString() })
        .eq('id', authUser.id)

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
      setLoading(true)
      
      // Check if Supabase is configured
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        console.log('Supabase not configured, using mock authentication')
        // Mock authentication for development
        setUser({
          id: 'mock-user-id',
          email: email,
          role: role,
          full_name: role === 'admin' ? 'Admin User' : 'Customer User',
          avatar_url: undefined,
          is_verified: true,
          last_login: new Date().toISOString(),
          app_metadata: {},
          user_metadata: {},
          aud: 'authenticated',
          created_at: new Date().toISOString(),
        } as AuthUser)
        toast.success('Successfully signed in! (Demo Mode)')
        setLoading(false)
        return Promise.resolve()
      }
      
      console.log('Attempting Supabase sign in with:', { email, role })
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        console.error('Supabase auth error:', error)
        toast.error(error.message || 'Invalid email or password')
        throw error
      }

      if (data.user) {
        console.log('Supabase auth successful:', data.user.email)
        
        // Update user role if needed
        if (role) {
          await supabase
            .from('users')
            .update({ role })
            .eq('id', data.user.id)
        }
        
        await fetchUserProfile(data.user)
        toast.success('Successfully signed in!')
      }
    } catch (error: any) {
      console.error('Sign in error:', error)
      toast.error(error.message || 'Failed to sign in')
      throw error
    } finally {
      setLoading(false)
    }
  }

  const signUp = async ({ email, password, full_name, role }: { email: string; password: string; full_name: string; role: 'admin' | 'customer' }) => {
    try {
      setLoading(true)
      
      // Check if Supabase is configured
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        console.log('Supabase not configured, using mock signup')
        // Mock signup for development
        setUser({
          id: 'mock-user-id',
          email: email,
          role: role,
          full_name: full_name,
          avatar_url: undefined,
          is_verified: true,
          last_login: new Date().toISOString(),
          app_metadata: {},
          user_metadata: {},
          aud: 'authenticated',
          created_at: new Date().toISOString(),
        } as AuthUser)
        toast.success('Account created successfully! (Demo Mode)')
        setLoading(false)
        return
      }
      
      console.log('Attempting Supabase sign up with:', { email, full_name, role })
      
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name,
            role,
          }
        }
      })

      if (error) {
        console.error('Supabase signup error:', error)
        toast.error(error.message || 'Failed to create account')
        throw error
      }

      if (data.user) {
        console.log('Supabase signup successful:', data.user.email)
        toast.success('Account created successfully! Please check your email to verify your account.')
      }
    } catch (error: any) {
      console.error('Signup error:', error)
      toast.error(error.message || 'Failed to create account')
      throw error
    } finally {
      setLoading(false)
    }
  }

  const signOut = async () => {
    try {
      setLoading(true)
      
      // Check if Supabase is configured
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        console.log('Supabase not configured, using mock signout')
        setUser(null)
        toast.success('Successfully signed out! (Demo Mode)')
        setLoading(false)
        return
      }
      
      const { error } = await supabase.auth.signOut()
      
      if (error) {
        console.error('Supabase signout error:', error)
        toast.error(error.message || 'Failed to sign out')
        throw error
      }
      
      setUser(null)
      toast.success('Successfully signed out!')
    } catch (error: any) {
      console.error('Signout error:', error)
      toast.error(error.message || 'Failed to sign out')
      throw error
    } finally {
      setLoading(false)
    }
  }

  const resetPassword = async (email: string) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      })
      
      if (error) {
        console.error('Supabase reset password error:', error)
        toast.error(error.message || 'Failed to send reset email')
        throw error
      }
      
      toast.success('Password reset email sent!')
    } catch (error: any) {
      console.error('Reset password error:', error)
      toast.error(error.message || 'Failed to send reset email')
      throw error
    }
  }

  const updateProfile = async (updates: Partial<AuthUser>) => {
    try {
      if (!user) throw new Error('No user logged in')

      const { error } = await supabase
        .from('users')
        .update(updates)
        .eq('id', user.id)

      if (error) {
        console.error('Supabase profile update error:', error)
        toast.error(error.message || 'Failed to update profile')
        throw error
      }

      setUser({ ...user, ...updates })
      toast.success('Profile updated successfully!')
    } catch (error: any) {
      console.error('Update profile error:', error)
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
