import { Button } from '@/components/ui/button'
import { InertiaLinkProps, Link } from '@inertiajs/react'
import clsx from 'clsx'

export const NavItem = ({
    isActive,
    ...rest
}: InertiaLinkProps & { isActive: boolean }) => {
    return (
        <Button
            asChild
            variant="ghost"
            className={clsx([
                'justify-start',
                isActive
                    ? 'bg-brand/10 hover:bg-brand/10 text-brand hover:text-brand'
                    : 'hover:bg-accent',
            ])}
        >
            <Link {...rest} />
        </Button>
    )
}
