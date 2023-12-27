import { Button } from '@/components/ui/button'
import { useHeaderContext } from '@/context/HeaderContext'
import { useRoutes } from '@/hooks/use-routes'
import { Nullable } from '@/types'
import { UserEntity } from '@/types/entities/user.entity'
import { Link, usePage } from '@inertiajs/react'
import { IconX } from '@tabler/icons-react'
import { Suspense, lazy, useEffect, useRef } from 'react'
import { MobileMenuItem } from './MobileMenuItem'

const MobileMenuFooterAuth = lazy(() =>
    import('./MobileMenuFooterAuth').then(({ MobileMenuFooterAuth }) => ({
        default: MobileMenuFooterAuth,
    })),
)

export const MobileMenu = () => {
    const routes = useRoutes()

    // one of the few rare cases where user might be null
    const { user } = usePage<{ user: Nullable<UserEntity> }>().props

    // header context
    const { isMobileMenuOpen, setMobileMenuOpen } = useHeaderContext()

    // Close mobile menu when any link in the menu gets clicked
    const rootRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let links: Nullable<NodeListOf<HTMLAnchorElement>> = null

        const handler = () => setMobileMenuOpen(false)

        if (rootRef.current) {
            links = rootRef.current.querySelectorAll('a, button.logout')
        }

        if (links) {
            links.forEach((link) => link.addEventListener('click', handler))
        }

        return () => {
            if (links) {
                links.forEach((link) =>
                    link.removeEventListener('click', handler),
                )
            }
        }
    }, [])

    return (
        <div
            ref={rootRef}
            className="sm:hidden z-30 fixed top-0 bottom-0 right-0 w-[300px] h-screen flex flex-col bg-background border-l shadow-2xl will-change-transform transition-transform duration-300"
            style={{
                transform: isMobileMenuOpen
                    ? 'translateX(0)'
                    : 'translateX(100%)',
            }}
        >
            {/* menu header */}
            <div className="h-[60px] flex items-center justify-end px-8 border-b">
                <Button
                    onClick={() => setMobileMenuOpen(false)}
                    size="icon"
                    variant="ghost"
                    aria-label="Close mobile menu"
                >
                    <IconX className="w-6 h-6" />
                </Button>
            </div>

            {/* menu body */}
            <div className="py-6 px-8 flex flex-col">
                {routes.map(({ href, label, component }) => (
                    <MobileMenuItem
                        key={href}
                        label={label}
                        href={href}
                        component={component}
                    />
                ))}
            </div>

            {/* menu footer */}
            <div className="flex-1 p-8 border-t">
                <Suspense fallback={<></>}>
                    {user ? (
                        <MobileMenuFooterAuth />
                    ) : (
                        <Button className="w-full h-11" asChild>
                            <Link href={route('login.create')}>Sign In</Link>
                        </Button>
                    )}
                </Suspense>
            </div>
        </div>
    )
}
