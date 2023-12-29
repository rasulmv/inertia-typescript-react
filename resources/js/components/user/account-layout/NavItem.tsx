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
                'justify-start h-10 font-medium rounded-xl',
                isActive
                    ? 'bg-brand/10 hover:bg-brand/10 text-brand hover:text-brand'
                    : 'hover:bg-accent text-muted-foreground hover:text-muted-foreground',
            ])}
        >
            <Link {...rest} />
        </Button>
    )
}
