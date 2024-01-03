import { Logo } from '@/components/common/Logo'
import { useRoutes } from '@/hooks/use-routes'
import { useDashboardLayoutStore } from '@/store/layouts/dashboard.store'
import { Link } from '@inertiajs/react'
import { IconX } from '@tabler/icons-react'
import { MenuItem } from './MenuItem'

export const Sidebar = () => {
    const routes = useRoutes()

    const isSidebarExpanded = useDashboardLayoutStore(
        (s) => s.isSidebarExpanded,
    )

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

            {/* sidebar body */}
            <div className="h-full pt-5 px-5">
                <div className="flex flex-col space-y-1.5">
                    {routes.map(({ label, href, isActive, Icon }) => (
                        <MenuItem
                            key={href}
                            href={href}
                            Icon={Icon ?? IconX}
                            isActive={isActive}
                        >
                            {label}
                        </MenuItem>
                    ))}
                </div>
            </div>
        </aside>
    )
}
