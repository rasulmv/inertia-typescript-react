import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { useHeaderContext } from '@/context/HeaderContext'
import { useRoutes } from '@/hooks/use-routes'
import { getNameInitialsForAvatar } from '@/lib/utils'
import { Nullable } from '@/types'
import { UserEntity } from '@/types/entities/user.entity'
import { Link, usePage } from '@inertiajs/react'
import { XIcon } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Button } from '../../../ui/button'
import { MobileMenuItem } from './MobileMenuItem'

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
                    <XIcon className="w-6 h-6" />
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
                {user ? (
                    <>
                        <Link
                            href={route('dashboard.index')}
                            className="flex items-center space-x-4"
                        >
                            <Avatar>
                                <AvatarFallback>
                                    {getNameInitialsForAvatar(
                                        `${user.firstName} ${user.lastName}`,
                                    )}
                                </AvatarFallback>
                            </Avatar>

                            <div className="flex flex-col">
                                <span className="font-medium">{`${user.firstName} ${user.lastName}`}</span>

                                <span className="text-sm text-muted-foreground leading-tight">
                                    {user.email}
                                </span>
                            </div>
                        </Link>

                        {/* auth user menu */}
                        <div className="flex flex-col mt-6">
                            <MobileMenuItem
                                label="Profile"
                                href={route('dashboard.profile')}
                                component="dashboard/profile"
                            />

                            <MobileMenuItem
                                label="Log out"
                                href={route('logout')}
                                method="post"
                                as="button"
                                type="button"
                                className="logout"
                            />
                        </div>
                    </>
                ) : (
                    <Button className="w-full h-11" asChild>
                        <Link href={route('login.create')}>Sign In</Link>
                    </Button>
                )}
            </div>
        </div>
    )
}
