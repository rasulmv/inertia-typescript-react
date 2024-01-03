import { Button } from '@/components/ui/button'
import { Link, usePage } from '@inertiajs/react'
import { Suspense, lazy } from 'react'
import { useMobileMenuContext } from '../../context/mobile-menu-provider'

const AuthFooter = lazy(() => import('./AuthSection'))

export const Footer = () => {
    const { user } = usePage().props
    const { close } = useMobileMenuContext()

    return (
        <div className="py-6 px-6 border-t">
            <Suspense fallback={<></>}>
                {user ? (
                    <AuthFooter />
                ) : (
                    <div className="flex items-center space-x-2">
                        <Button
                            className="w-1/2 rounded-full border"
                            onClick={close}
                            asChild
                        >
                            <Link href={route('register.create')}>Join Us</Link>
                        </Button>

                        <Button
                            variant="secondary"
                            className="w-1/2 rounded-full"
                            onClick={close}
                            asChild
                        >
                            <Link href={route('login.create')}>Sign In</Link>
                        </Button>
                    </div>
                )}
            </Suspense>
        </div>
    )
}
