import { useDashboardLayoutContext } from '@/context/DashboardLayoutContext'
import { cn } from '@/lib/utils'
import { InertiaLinkProps, Link } from '@inertiajs/react'

export const SidebarMenuItem = ({
    Icon,
    children,
    isActive,
    ...rest
}: InertiaLinkProps & {
    Icon: React.ElementType
    isActive: boolean
}) => {
    const { isSidebarExpanded } = useDashboardLayoutContext()

    return (
        <Link
            {...rest}
            className={cn(
                'flex items-center py-2.5 px-4 font-medium rounded-lg',
                rest.className,
                isActive
                    ? 'text-foreground bg-foreground/10'
                    : 'text-foreground hover:bg-secondary',
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
