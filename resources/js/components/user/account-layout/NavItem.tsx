import { Button } from '@/components/ui/button'
import { InertiaLinkProps, Link } from '@inertiajs/react'
import clsx from 'clsx'

export const NavItem = ({
    isActive,
    ...rest
}: InertiaLinkProps & { isActive: boolean }) => {
    return (
        <Button
            variant="ghost"
            asChild
            className={clsx([
                'justify-start text-base h-11 font-medium',
                isActive
                    ? 'bg-muted hover:bg-muted'
                    : 'hover:bg-transparent hover:underline',
            ])}
        >
            <Link {...rest} />
        </Button>
    )
}
