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
            className="hidden lg:block sticky z-30 w-full h-full mr-8 dark:bg-card transition-[max-width] duration-300 ease-in-out overflow-hidden bg-card rounded-xl border"
            style={{ maxWidth: isSidebarExpanded ? 300 : 93 }}
        >
            {/* sidebar header */}
            <div className="py-6 px-8">
                <Link href="/" className="flex items-center space-x-3">
                    <Logo className="flex-shrink-0 w-6 h-6" />

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
                    <SidebarMenuItem
                        href={route('dashboard.index')}
                        Icon={IconTableFilled}
                        isActive={component === 'dashboard/index'}
                    >
                        Dashboard
                    </SidebarMenuItem>

                    <SidebarMenuItem
                        href={route('dashboard.profile.edit')}
                        Icon={IconUserFilled}
                        isActive={component.startsWith('dashboard/profile')}
                    >
                        Profile
                    </SidebarMenuItem>
                </div>
            </div>
        </aside>
    )
}
