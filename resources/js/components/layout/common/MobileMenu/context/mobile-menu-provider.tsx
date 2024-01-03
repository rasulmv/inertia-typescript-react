import { createContext, useContext } from 'react'

type MobileMenuProviderState = {
    isOpen: boolean
    close: () => void
}

const initialState: MobileMenuProviderState = {
    isOpen: false,
    close: () => {},
}

export const MobileMenuContext =
    createContext<MobileMenuProviderState>(initialState)

export const useMobileMenuContext = () => {
    const context = useContext(MobileMenuContext)

    if (context === undefined)
        throw new Error(
            'useMobileMenuContext must be used within a MobileMenuProvider',
        )

    return context
}
