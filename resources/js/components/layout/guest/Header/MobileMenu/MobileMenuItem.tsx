import { cn } from '@/lib/utils'
import { InertiaLinkProps, Link, usePage } from '@inertiajs/react'

export const MobileMenuItem = ({
    label,
    component,
    ...rest
}: {
    label: string
    component?: string
} & InertiaLinkProps) => {
    const { component: currentComponent } = usePage()

    return (
        <Link
            {...rest}
            className={cn(
                'w-full flex items-center justify-between space-x-4 h-11 text-lg font-medium rounded-md [&>svg]:w-5 [&>svg]:h-5',
                component && component === currentComponent
                    ? 'text-foreground'
                    : 'text-muted-foreground/80',
                rest.className,
            )}
        >
            {label}
        </Link>
    )
}
