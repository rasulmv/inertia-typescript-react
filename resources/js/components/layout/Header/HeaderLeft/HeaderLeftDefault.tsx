import { cn } from '@/lib/utils'
import { Link, usePage } from '@inertiajs/react'
import { Logo } from '../../../common/Logo'
import { useRoutes } from '@/hooks/use-routes'

export const HeaderLeftDefault = () => {
    const { component } = usePage()
    const routes = useRoutes()

    return (
        <>
            <Link href="/" className="mr-8" aria-label="Link to homepage">
                <Logo className="w-6 h-6 fill-foreground" />
            </Link>

            <div className="hidden sm:flex items-center space-x-6">
                {routes.map(({ href, label, component: routeComponent }) => (
                    <Link
                        key={href}
                        href={href}
                        className={cn(
                            'hover:text-foreground font-medium',
                            routeComponent === component
                                ? 'text-foreground'
                                : 'text-muted-foreground',
                        )}
                    >
                        {label}
                    </Link>
                ))}
            </div>
        </>
    )
}
