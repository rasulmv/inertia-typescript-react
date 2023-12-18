import { Link, usePage } from '@inertiajs/react'
import { Logo } from '../Logo'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { GithubIcon, MenuIcon, XIcon } from 'lucide-react'
import { useState } from 'react'
import { useRoutes } from '@/hooks/use-routes'
import { MobileMenu } from './MobileMenu'
import { AuthDropdown } from './AuthDropdown'

export const Header = () => {
    const { url, props } = usePage()
    const { user } = props

    const [isMenuOpen, setMenuOpen] = useState(false)

    const routes = useRoutes()

    return (
        <header className="fixed top-0 left-0 right-0 h-[60px] border-b bg-background">
            {/* mobile */}
            {isMenuOpen && <MobileMenu />}

            {/* desktop */}
            <div className="container">
                <div className="h-full flex items-center justify-between">
                    {/* LEFT SIDE */}
                    <div className="flex items-center">
                        <Link href="/" className="mr-8">
                            <Logo className="w-6 h-6 fill-foreground" />
                        </Link>

                        <div className="hidden sm:flex items-center space-x-6">
                            {routes.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className={cn(
                                        'hover:text-foreground font-medium',
                                        url === href
                                            ? 'text-foreground'
                                            : 'text-muted-foreground',
                                    )}
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="flex items-center space-x-4">
                        {/* icons */}
                        <div className="flex items-center space-x-2">
                            <ThemeSwitcher />

                            <Button size="icon" variant="ghost">
                                <GithubIcon className="w-5 h-5" />
                            </Button>

                            <Button
                                size="icon"
                                variant="ghost"
                                className="sm:hidden"
                                onClick={() => setMenuOpen((prev) => !prev)}
                            >
                                {isMenuOpen ? <XIcon /> : <MenuIcon />}
                            </Button>
                        </div>

                        {/* buttons */}
                        <div className="hidden sm:flex items-center space-x-3">
                            {user ? (
                                <AuthDropdown />
                            ) : (
                                <Button size="sm" asChild>
                                    <Link href={route('login.create')}>
                                        Sign In
                                    </Link>
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
