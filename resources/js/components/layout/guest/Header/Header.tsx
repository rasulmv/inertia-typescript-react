import MobileMenu from '@/components/common/MobileMenu'
import { Button } from '@/components/ui/button'
import { useRoutes } from '@/hooks/use-routes'
import { cn } from '@/lib/utils'
import { useGuestLayoutStore } from '@/store/layouts/guest.store'
import { Link, usePage } from '@inertiajs/react'
import { lazy } from 'react'
import { Logo } from '../../../common/Logo'
import { HeaderRight } from './HeaderRight'

const MobileMenuFooterAuth = lazy(() => import('./MobileMenuFooterAuth'))

export const Header = () => {
    const routes = useRoutes()
    const { component, props } = usePage()
    const { user } = props

    const isMobileMenuOpen = useGuestLayoutStore((s) => s.isMobileMenuOpen)
    const setMobileMenuOpen = useGuestLayoutStore((s) => s.setMobileMenuOpen)

    return (
        <>
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

            <MobileMenu
                isOpen={isMobileMenuOpen}
                close={() => setMobileMenuOpen(false)}
            >
                <MobileMenu.Header />

                <MobileMenu.Body>
                    {routes.map(
                        ({ href, label, component: routeComponent }) => (
                            <MobileMenu.Item
                                key={href}
                                href={href}
                                isActive={component === routeComponent}
                            >
                                {label}
                            </MobileMenu.Item>
                        ),
                    )}
                </MobileMenu.Body>

                <MobileMenu.Footer>
                    {user ? (
                        <MobileMenuFooterAuth />
                    ) : (
                        <div className="flex items-center space-x-2">
                            <Button
                                className="w-1/2 rounded-full border"
                                onClick={() => setMobileMenuOpen(false)}
                                asChild
                            >
                                <Link href={route('register.create')}>
                                    Join Us
                                </Link>
                            </Button>

                            <Button
                                variant="secondary"
                                className="w-1/2 rounded-full"
                                onClick={() => setMobileMenuOpen(false)}
                                asChild
                            >
                                <Link href={route('login.create')}>
                                    Sign In
                                </Link>
                            </Button>
                        </div>
                    )}
                </MobileMenu.Footer>
            </MobileMenu>
        </>
    )
}
