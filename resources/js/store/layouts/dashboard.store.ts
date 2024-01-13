import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface DashboardLayoutState {
    isMobileMenuOpen: boolean
    setMobileMenuOpen: (v: boolean) => void
    isSidebarExpanded: boolean
    setSidebarExpanded: (v: boolean) => void
}

export const useDashboardLayoutStore = create<DashboardLayoutState>()(
    persist(
        (set) => ({
            isMobileMenuOpen: false,
            setMobileMenuOpen: (isMobileMenuOpen) => set({ isMobileMenuOpen }),
            isSidebarExpanded: true,
            setSidebarExpanded: (isSidebarExpanded) =>
                set({ isSidebarExpanded }),
        }),
        {
            name: 'is-sidebar-expanded',
            partialize: (s) => ({ isSidebarExpanded: s.isSidebarExpanded }),
        },
    ),
)
