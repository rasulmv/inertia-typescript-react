import { usePage } from '@inertiajs/react'

type TRoute = {
    href: string
    // Component name to check if current route is active.
    // This feature is InertiaJS exclusive and is the most efficient way to determine active route.
    // Read more here: https://inertiajs.com/links#active-states
    component: string
    label: string
}

/*
 * This simple hook serves as a single source of routes for the entire app.
 * Primary reason is to avoid duplicating same routes for "mobile" and "desktop" menus.
 */
export const useRoutes = (): TRoute[] => {
    const { component } = usePage()

    // Dashboard routes
    if (component.startsWith('dashboard')) {
        return [
            {
                href: route('homepage'),
                component: 'index',
                label: 'Homepage',
            },
            {
                href: route('dashboard.index'),
                component: 'dashboard/index',
                label: 'Dashboard',
            },
            {
                href: route('login.store'),
                component: 'dashboard/settings',
                label: 'Settings',
            },
        ]
    }

    // Homepage routes
    return [
        {
            href: route('homepage'),
            component: 'index',
            label: 'Home',
        },
        {
            href: route('about'),
            component: 'about',
            label: 'About',
        },
    ]
}
