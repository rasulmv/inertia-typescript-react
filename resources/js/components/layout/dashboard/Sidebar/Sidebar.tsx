import { Logo } from '@/components/common/Logo'
import { useDashboardLayoutContext } from '@/context/DashboardLayoutContext'
import { Link, usePage } from '@inertiajs/react'
import { IconTableFilled, IconUserFilled } from '@tabler/icons-react'
import { SidebarMenuItem } from './SidebarMenuItem'

export const Sidebar = () => {
    const { component } = usePage()

    const { isSidebarExpanded } = useDashboardLayoutContext()

    return (
        <aside
            className="relative z-30 w-full h-full dark bg-zinc-900 dark:bg-card transition-all duration-300 ease-in-out"
            style={{ maxWidth: isSidebarExpanded ? 300 : 85 }}
        >
            {/* sidebar header */}
            <div className="py-6 px-8">
                <Link href="/" className="flex items-center space-x-3">
                    <Logo className="flex-shrink-0 w-6 h-6 fill-foreground" />

                    <span
                        className="text-lg font-semibold text-foreground transition-opacity duration-300 ease-in-out whitespace-nowrap"
                        style={{ opacity: isSidebarExpanded ? 1 : 0 }}
                    >
                        {import.meta.env.VITE_APP_NAME}
                    </span>
                </Link>
            </div>

            {/* sidebar body */}
            <div className="h-full pt-5 px-4">
                <div className="flex flex-col space-y-1">
                    <SidebarMenuItem
                        href={route('dashboard.index')}
                        Icon={IconTableFilled}
                        isActive={component === 'dashboard/index'}
                    >
                        Dashboard
                    </SidebarMenuItem>

                    <SidebarMenuItem
                        href={route('dashboard.account.profile.edit')}
                        Icon={IconUserFilled}
                        isActive={component.startsWith('dashboard/account')}
                    >
                        Account
                    </SidebarMenuItem>
                </div>
            </div>
        </aside>
    )
}
