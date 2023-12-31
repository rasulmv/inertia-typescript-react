import { Button } from '@/components/ui/button'
import { useHeaderContext } from '@/context/HeaderContext'
import { Nullable } from '@/types'
import { UserEntity } from '@/types/entities/user.entity'
import { Link, usePage } from '@inertiajs/react'
import { IconBrandGithub, IconMenu2 } from '@tabler/icons-react'
import { Suspense, lazy } from 'react'
import { ThemeSwitcher } from '../../../common/ThemeSwitcher'

const AuthDropdown = lazy(() => import('./AuthDropdown'))

export const HeaderRight = () => {
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
                    <IconBrandGithub className="w-5 h-5" />
                </a>
            </Button>

            <Suspense fallback={<></>}>
                {user ? (
                    <AuthDropdown />
                ) : (
                    <div className="pl-1">
                        <Button size="sm" asChild className="hidden sm:flex">
                            <Link href={route('login.create')}>Sign In</Link>
                        </Button>
                    </div>
                )}
            </Suspense>

            <Button
                size="icon"
                variant="ghost"
                className="sm:hidden"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Toggle mobile menu"
            >
                <IconMenu2 />
            </Button>
        </div>
    )
}