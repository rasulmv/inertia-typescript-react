import { create } from 'zustand'

interface DashboardLayoutState {
    isMobileMenuOpen: boolean
    setMobileMenuOpen: (v: boolean) => void
    isSidebarExpanded: boolean
    setSidebarExpanded: (v: boolean) => void
}

export const useDashboardLayoutStore = create<DashboardLayoutState>()(
    (set) => ({
        isMobileMenuOpen: false,
        setMobileMenuOpen: (isMobileMenuOpen) => set({ isMobileMenuOpen }),
        isSidebarExpanded: true,
        setSidebarExpanded: (isSidebarExpanded) => set({ isSidebarExpanded }),
    }),
)
