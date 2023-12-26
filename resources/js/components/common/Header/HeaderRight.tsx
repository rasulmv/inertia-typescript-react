import { Button } from '@/components/ui/button'
import { useHeaderContext } from '@/context/HeaderContext'
import { Nullable } from '@/types'
import { UserEntity } from '@/types/entities/user.entity'
import { Link, usePage } from '@inertiajs/react'
import { GithubIcon, MenuIcon } from 'lucide-react'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { AuthDropdown } from './AuthDropdown'

export const HeaderRight = () => {
    // one of the few rare cases where user might be null
    const { user } = usePage<{ user: Nullable<UserEntity> }>().props

    const { setMobileMenuOpen } = useHeaderContext()

    return (
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
                <Button size="sm" asChild className="hidden sm:flex">
                    <Link href={route('login.create')}>Sign In</Link>
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
    )
}
