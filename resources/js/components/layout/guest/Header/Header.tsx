import { HeaderProvider } from '@/context/HeaderContext'
import { useRoutes } from '@/hooks/use-routes'
import { cn } from '@/lib/utils'
import { Link, usePage } from '@inertiajs/react'
import { Logo } from '../../../common/Logo'
import { HeaderRight } from './HeaderRight'
import { MobileMenu } from './MobileMenu'
import { PageLayer } from './PageLayer'

export const Header = () => {
    const routes = useRoutes()
    const { component } = usePage()

    return (
        <HeaderProvider>
            <header className="z-20 fixed top-0 left-0 right-0 border-b h-[60px] bg-background">
                <div className="container">
                    <div className="h-full flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Link
                                href="/"
                                className="mr-4"
                                aria-label="Link to homepage"
                            >
                                <Logo className="w-7 h-7" />
                            </Link>

                            <div className="hidden sm:flex items-center space-x-6">
                                {routes.map(
                                    ({
                                        href,
                                        label,
                                        component: routeComponent,
                                    }) => (
                                        <Link
                                            key={href}
                                            href={href}
                                            className={cn(
                                                'hover:text-foreground font-medium',
                                                component === routeComponent
                                                    ? 'text-foreground'
                                                    : 'text-muted-foreground',
                                            )}
                                        >
                                            {label}
                                        </Link>
                                    ),
                                )}
                            </div>
                        </div>

                        <HeaderRight />
                    </div>
                </div>
            </header>

            <MobileMenu />

            <PageLayer />
        </HeaderProvider>
    )
}
