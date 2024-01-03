import { cn } from '@/lib/utils'
import { InertiaLinkProps, Link } from '@inertiajs/react'
import { useMobileMenuContext } from '../context/mobile-menu-provider'

export const MenuItem = ({
    isActive,
    className,
    ...rest
}: InertiaLinkProps & { isActive?: boolean }) => {
    const { close } = useMobileMenuContext()

    return (
        <Link
            {...rest}
            onClick={close}
            className={cn(
                'w-full flex items-center justify-between space-x-4 py-1.5 text-xl font-medium [&>svg]:w-5 [&>svg]:h-5',
                isActive ? 'text-foreground' : 'text-muted-foreground/80',
                className,
            )}
        />
    )
}
