import { usePage } from '@inertiajs/react'
import { IconTableFilled, IconUserFilled } from '@tabler/icons-react'
import { ElementType } from 'react'

type TRoute = {
    href: string
    label: string
    isActive: boolean
    Icon?: ElementType
}

/*
 * This simple hook serves as a single source of routes for the entire app.
 * Reason is to avoid duplicating same routes for "mobile" and "desktop" menus.
 */
export const useRoutes = (): TRoute[] => {
    const { component } = usePage()

    // user dashboard routes
    if (component.startsWith('dashboard/')) {
        return [
            {
                href: route('dashboard.index'),
                label: 'Dashboard',
                isActive: component === 'dashboard/index',
                Icon: IconTableFilled,
            },
            {
                href: route('dashboard.profile.edit'),
                label: 'Profile',
                isActive: component.startsWith('dashboard/profile'),
                Icon: IconUserFilled,
            },
        ]
    }

    return [
        {
            href: route('homepage'),
            label: 'Home',
            isActive: component === 'home/index',
        },
        {
            href: route('about'),
            label: 'About',
            isActive: component === 'home/about',
        },
    ]
}
