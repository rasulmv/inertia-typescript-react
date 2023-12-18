import { cn } from '@/lib/utils'
import { Link, usePage } from '@inertiajs/react'
import { LucideIcon } from 'lucide-react'

export const MobileMenuItem = ({
    label,
    Icon,
    href,
}: {
    label: string
    Icon: LucideIcon
    href: string
}) => {
    const { url } = usePage()

    return (
        <Link
            href={href}
            className={cn(
                'w-full flex items-center space-x-4 px-5 h-14 font-medium rounded-md [&>svg]:w-5 [&>svg]:h-5',
                url === href && 'bg-foreground/5',
            )}
        >
            <Icon />

            <span>{label}</span>
        </Link>
    )
}
