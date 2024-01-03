import { Button } from '@/components/ui/button'
import { useRoutes } from '@/hooks/use-routes'
import { Link } from '@inertiajs/react'
import { IconX } from '@tabler/icons-react'
import { Logo } from '../../../common/Logo'
import { MobileMenuContext } from './context/mobile-menu-provider'
import { Footer } from './partials/Footer'
import { MenuItem } from './partials/MenuItem'
import { PageLayer } from './partials/PageLayer'

export const MobileMenu = ({
    isOpen,
    close,
}: {
    isOpen: boolean
    close: () => void
}) => {
    const routes = useRoutes()

    return (
        <MobileMenuContext.Provider value={{ isOpen, close }}>
            <PageLayer />

            <aside
                className="lg:hidden z-30 fixed top-0 bottom-0 right-0 w-[300px] h-screen flex flex-col bg-background border-l will-change-transform transition-transform duration-300"
                style={{
                    transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
                }}
            >
                {/* header */}
                <div className="h-[60px] flex items-center justify-between px-6 border-b">
                    <Link href="/" aria-label="Visit homepage" onClick={close}>
                        <Logo />
                    </Link>

                    <Button
                        onClick={close}
                        size="icon"
                        variant="ghost"
                        aria-label="Close mobile menu"
                    >
                        <IconX className="w-6 h-6" />
                    </Button>
                </div>

                {/* body */}
                <div className="flex-1 py-4 px-6 flex flex-col">
                    <nav className="flex flex-col">
                        {routes.map(({ label, href, isActive }) => (
                            <MenuItem
                                key={href}
                                href={href}
                                isActive={isActive}
                            >
                                {label}
                            </MenuItem>
                        ))}
                    </nav>
                </div>

                <Footer />
            </aside>
        </MobileMenuContext.Provider>
    )
}
