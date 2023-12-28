type TRoute = {
    href: string
    label: string
    // component path to check later on if route is active
    // https://inertiajs.com/links#active-states
    component: string
}

/*
 * This simple hook serves as a single source of routes for the entire app.
 * Reason is to avoid duplicating same routes for "mobile" and "desktop" menus.
 */
export const useRoutes = (): TRoute[] => {
    return [
        {
            href: route('homepage'),
            label: 'Home',
            component: 'home/index',
        },
        {
            href: route('about'),
            label: 'About',
            component: 'home/about',
        },
    ]
}
