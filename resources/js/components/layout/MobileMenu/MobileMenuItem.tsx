import { cn } from '@/lib/utils'
import { InertiaLinkProps, Link, usePage } from '@inertiajs/react'

export const MobileMenuItem = ({
    label,
    href,
    component,
    className,
    ...rest
}: {
    label: string
    href: string
    component?: string
} & InertiaLinkProps) => {
    const page = usePage()

    return (
        <Link
            href={href}
            {...rest}
            className={cn(
                'w-full flex items-center justify-between space-x-4 h-11 text-lg font-medium rounded-md [&>svg]:w-5 [&>svg]:h-5',
                component && component === page.component
                    ? 'text-foreground'
                    : 'text-muted-foreground/80',
                className,
            )}
        >
            {label}
        </Link>
    )
}
