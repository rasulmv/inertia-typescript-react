import {
    Dispatch,
    PropsWithChildren,
    SetStateAction,
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react'

type DashboardLayoutProviderState = {
    isSidebarExpanded: boolean
    setSidebarExpanded: Dispatch<SetStateAction<boolean>>
}

const initialState: DashboardLayoutProviderState = {
    isSidebarExpanded: true,
    setSidebarExpanded: () => null,
}

const DashboardLayoutProviderContext =
    createContext<DashboardLayoutProviderState>(initialState)

export const useDashboardLayoutContext = () => {
    const context = useContext(DashboardLayoutProviderContext)

    if (context === undefined)
        throw new Error(
            'useDashboardLayoutContext must be used within a DashboardLayoutProvider',
        )

    return context
}

// retrieve state from local storage or default value
const getInitialState = () => {
    const isExpanded = localStorage.getItem('isSidebarExpanded')

    // if this key doesn't exist in local storage yet, return default value
    if (isExpanded == null) {
        return true
    }

    return isExpanded == '1'
}

export function DashboardLayoutProvider({ children }: PropsWithChildren) {
    const [isSidebarExpanded, setSidebarExpanded] =
        useState<boolean>(getInitialState)

    // persist the state in local storage
    useEffect(() => {
        localStorage.setItem('isSidebarExpanded', isSidebarExpanded ? '1' : '0')
    }, [isSidebarExpanded])

    return (
        <DashboardLayoutProviderContext.Provider
            value={{
                isSidebarExpanded,
                setSidebarExpanded,
            }}
        >
            {children}
        </DashboardLayoutProviderContext.Provider>
    )
}
