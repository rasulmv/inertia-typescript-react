import { Logo } from '@/components/common/Logo'
import { useRoutes } from '@/hooks/use-routes'
import { cn } from '@/lib/utils'
import { Link } from '@inertiajs/react'
import { HeaderRight } from './HeaderRight'

export const Header = () => {
    const routes = useRoutes()

    return (
        <header className="z-20 fixed top-0 left-0 right-0 border-b h-[60px] bg-background">
            <div className="container">
                <div className="h-full flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Link
                            href="/"
                            className="mr-4"
                            aria-label="Link to homepage"
                        >
                            <Logo />
                        </Link>

                        <div className="hidden sm:flex items-center space-x-6">
                            {routes.map(({ href, label, isActive }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className={cn(
                                        'hover:text-foreground font-medium',
                                        isActive
                                            ? 'text-foreground'
                                            : 'text-muted-foreground',
                                    )}
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <HeaderRight />
                </div>
            </div>
        </header>
    )
}
