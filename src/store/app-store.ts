import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AppState {
  // UI State
  sidebarOpen: boolean
  motionEnabled: boolean
  
  // User Preferences
  preferences: {
    theme: 'light' | 'dark' | 'system'
    notifications: boolean
    newsletter: boolean
  }
  
  // Navigation
  currentPage: string
  breadcrumbs: { label: string; href: string }[]
  
  // Actions
  setSidebarOpen: (open: boolean) => void
  setMotionEnabled: (enabled: boolean) => void
  setPreferences: (preferences: Partial<AppState['preferences']>) => void
  setCurrentPage: (page: string) => void
  setBreadcrumbs: (breadcrumbs: AppState['breadcrumbs']) => void
  
  // Utilities
  toggleSidebar: () => void
  initializeMotionPreference: () => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      sidebarOpen: false,
      motionEnabled: true,
      preferences: {
        theme: 'dark',
        notifications: true,
        newsletter: false
      },
      currentPage: '/',
      breadcrumbs: [],
      
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
      
      setMotionEnabled: (enabled) => set({ motionEnabled: enabled }),
      
      setPreferences: (newPreferences) => set((state) => ({
        preferences: { ...state.preferences, ...newPreferences }
      })),
      
      setCurrentPage: (page) => set({ currentPage: page }),
      
      setBreadcrumbs: (breadcrumbs) => set({ breadcrumbs }),
      
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
      
      initializeMotionPreference: () => {
        if (typeof window !== 'undefined') {
          const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
          set({ motionEnabled: !prefersReducedMotion })
        }
      }
    }),
    {
      name: 'krowdkraft-app-storage',
      partialize: (state) => ({
        preferences: state.preferences,
        motionEnabled: state.motionEnabled
      })
    }
  )
)

