import { create } from 'zustand'

interface GuestLayoutState {
    isMobileMenuOpen: boolean
    setMobileMenuOpen: (v: boolean) => void
}

export const useGuestLayoutStore = create<GuestLayoutState>()((set) => ({
    isMobileMenuOpen: false,
    setMobileMenuOpen: (isMobileMenuOpen) => set({ isMobileMenuOpen }),
}))
