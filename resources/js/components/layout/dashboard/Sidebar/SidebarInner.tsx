/**
 * This is a standalone component because it will be reused for mobile menu as well.
 */
import { usePage } from '@inertiajs/react'
import { IconTableFilled, IconUserFilled } from '@tabler/icons-react'
import { SidebarMenuItem } from './SidebarMenuItem'

export const SidebarInner = () => {
    const { component } = usePage()

    return (
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
    )
}
