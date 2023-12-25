import { cn } from '@/lib/utils'
import { Link, usePage } from '@inertiajs/react'

export const MobileMenuItem = ({
    label,
    href,
    component,
}: {
    label: string
    href: string
    component: string
}) => {
    const page = usePage()

    return (
        <Link
            href={href}
            className={cn(
                'w-full flex items-center justify-between space-x-4 h-12 text-2xl font-medium rounded-md [&>svg]:w-5 [&>svg]:h-5',
                component === page.component
                    ? 'text-foreground'
                    : 'text-muted-foreground/80',
            )}
        >
            {label}
        </Link>
    )
}
