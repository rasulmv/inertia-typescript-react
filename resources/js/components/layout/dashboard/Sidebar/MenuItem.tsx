import { cn } from '@/lib/utils'
import { useDashboardLayoutStore } from '@/store/layouts/dashboard.store'
import { InertiaLinkProps, Link } from '@inertiajs/react'

export const MenuItem = ({
    Icon,
    children,
    isActive,
    ...rest
}: InertiaLinkProps & {
    Icon: React.ElementType
    isActive: boolean
}) => {
    const isSidebarExpanded = useDashboardLayoutStore(
        (s) => s.isSidebarExpanded,
    )

    return (
        <Link
            {...rest}
            className={cn(
                'flex items-center py-2.5 px-4 font-medium rounded-lg',
                rest.className,
                isActive
                    ? 'bg-primary-light text-primary-text'
                    : 'hover:bg-accent text-muted-foreground',
            )}
        >
            <Icon className="flex-shrink-0 w-5 h-5" />

            <span
                className="inline-block ml-3 whitespace-nowrap transition-opacity duration-300 ease-in-out"
                style={{ opacity: isSidebarExpanded ? 1 : 0 }}
            >
                {children}
            </span>
        </Link>
    )
}
