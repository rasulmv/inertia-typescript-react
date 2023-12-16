import { BookIcon, HomeIcon, LucideIcon } from 'lucide-react'

type TRoute = {
    href: string
    label: string
    icon: LucideIcon
}

/* Single source of routes for the entire app */
// TODO: replace hrefs with ziggy route() func
export const useRoutes = (): TRoute[] => {
    return [
        {
            href: '/',
            label: 'Home',
            icon: HomeIcon,
        },
        {
            href: '/about',
            label: 'About',
            icon: BookIcon,
        },
    ]
}
