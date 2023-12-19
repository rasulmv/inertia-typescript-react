/* This store is responsible for the UI in the entire app. */
import { create } from 'zustand'

interface UIStore {
    isMobileMenuOpen: boolean
    setMobileMenuOpen: (open: boolean) => void
}

export const useUIStore = create<UIStore>()((set) => ({
    isMobileMenuOpen: false,
    setMobileMenuOpen: (open: boolean) =>
        set(() => ({ isMobileMenuOpen: open })),
}))
