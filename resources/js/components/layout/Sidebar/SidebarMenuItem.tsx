import { cn } from '@/lib/utils'
import { InertiaLinkProps, Link } from '@inertiajs/react'

export const SidebarMenuItem = ({
    Icon,
    children,
    ...rest
}: InertiaLinkProps & { Icon: React.ElementType }) => {
    return (
        <Link
            {...rest}
            className={cn(
                'flex items-center space-x-2.5 py-2 px-4 font-medium rounded hover:bg-secondary text-foreground',
                rest.className,
            )}
        >
            <Icon className="w-4 h-4" />

            <span>{children}</span>
        </Link>
    )
}
