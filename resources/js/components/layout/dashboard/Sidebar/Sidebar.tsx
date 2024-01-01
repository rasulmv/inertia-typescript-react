import { Logo } from '@/components/common/Logo'
import { useDashboardLayoutStore } from '@/store/layouts/dashboard.store'
import { Link } from '@inertiajs/react'
import { useEffect } from 'react'
// https://github.com/streamich/react-use/issues/2074#issuecomment-982044510
import useMedia from 'react-use/lib/useMedia'
import { SidebarInner } from './SidebarInner'

export const Sidebar = () => {
    const { isSidebarExpanded, setSidebarExpanded } = useDashboardLayoutStore(
        (s) => ({
            isSidebarExpanded: s.isSidebarExpanded,
            setSidebarExpanded: s.setSidebarExpanded,
        }),
    )

    // tailwind default LG breakpoint used
    const isDesktop = useMedia('(min-width: 1024px)')

    // force sidebar expanded state on mobile devices so that links are visible
    useEffect(() => {
        if (!isDesktop) {
            setSidebarExpanded(true)
        }
    }, [isDesktop, setSidebarExpanded])

    return (
        <aside
            className="hidden lg:block sticky z-30 w-full h-full mr-8 dark:bg-card transition-[max-width] duration-300 ease-in-out overflow-hidden bg-card rounded-xl border"
            style={{ maxWidth: isSidebarExpanded ? 300 : 93 }}
        >
            {/* sidebar header */}
            <div className="py-6 px-8">
                <Link
                    href="/"
                    className="flex items-center space-x-3"
                    aria-label="Visit homepage"
                >
                    <Logo className="flex-shrink-0" />

                    <span
                        className="text-lg font-semibold transition-opacity duration-300 ease-in-out whitespace-nowrap"
                        style={{ opacity: isSidebarExpanded ? 1 : 0 }}
                    >
                        {import.meta.env.VITE_APP_NAME}
                    </span>
                </Link>
            </div>

            <SidebarInner />
        </aside>
    )
}
