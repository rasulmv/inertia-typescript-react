import {
    Dispatch,
    PropsWithChildren,
    SetStateAction,
    createContext,
    useContext,
    useState,
} from 'react'

type HeaderProviderState = {
    isMobileMenuOpen: boolean
    setMobileMenuOpen: Dispatch<SetStateAction<boolean>>
}

const initialState: HeaderProviderState = {
    isMobileMenuOpen: false,
    setMobileMenuOpen: () => null,
}

const HeaderProviderContext = createContext<HeaderProviderState>(initialState)

export const useHeaderContext = () => {
    const context = useContext(HeaderProviderContext)

    if (context === undefined)
        throw new Error('useHeaderContext must be used within a HeaderProvider')

    return context
}

export function HeaderProvider({ children }: PropsWithChildren) {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

    return (
        <HeaderProviderContext.Provider
            value={{
                isMobileMenuOpen,
                setMobileMenuOpen,
            }}
        >
            {children}
        </HeaderProviderContext.Provider>
    )
}
