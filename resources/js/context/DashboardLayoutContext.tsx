import {
    Dispatch,
    PropsWithChildren,
    SetStateAction,
    createContext,
    useContext,
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

export function DashboardLayoutProvider({ children }: PropsWithChildren) {
    const [isSidebarExpanded, setSidebarExpanded] = useState<boolean>(true)

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
