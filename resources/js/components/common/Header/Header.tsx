import { HeaderProvider, useHeaderContext } from '@/context/HeaderContext'
import { useRoutes } from '@/hooks/use-routes'
import { cn } from '@/lib/utils'
import { Link, usePage } from '@inertiajs/react'
import { GithubIcon, MenuIcon } from 'lucide-react'
import { Button } from '../../ui/button'
import { Logo } from '../Logo'
import { PageLayer } from '../PageLayer'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { AuthDropdown } from './AuthDropdown'
import { MobileMenu } from './mobile/MobileMenu'

export const Header = () => {
    const { component, props } = usePage()
    const { user } = props

    const routes = useRoutes()

    const { setMobileMenuOpen } = useHeaderContext()

    return (
        <HeaderProvider>
            <header className="z-20 fixed top-0 left-0 right-0 h-[60px] border-b bg-background">
                <div className="container">
                    <div className="h-full flex items-center justify-between">
                        {/* LEFT SIDE */}
                        <div className="flex items-center">
                            <Link
                                href="/"
                                className="mr-8"
                                aria-label="Link to homepage"
                            >
                                <Logo className="w-6 h-6 fill-foreground" />
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
                                                routeComponent === component
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

                        {/* RIGHT SIDE */}
                        <div className="flex items-center space-x-2">
                            <ThemeSwitcher />

                            <Button
                                size="icon"
                                variant="ghost"
                                aria-label="Link to Github repository"
                                asChild
                            >
                                <a
                                    href="https://github.com/rismailov/inertia-typescript-react"
                                    target="_blank"
                                >
                                    <GithubIcon className="w-5 h-5" />
                                </a>
                            </Button>

                            {user ? (
                                <AuthDropdown />
                            ) : (
                                <Button
                                    size="sm"
                                    asChild
                                    className="hidden sm:flex"
                                >
                                    <Link href={route('login.create')}>
                                        Sign In
                                    </Link>
                                </Button>
                            )}

                            <Button
                                size="icon"
                                variant="ghost"
                                className="sm:hidden"
                                onClick={() => setMobileMenuOpen(true)}
                                aria-label="Toggle mobile menu"
                            >
                                <MenuIcon />
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            <MobileMenu />

            <PageLayer />
        </HeaderProvider>
    )
}
