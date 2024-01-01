import { ThemeSwitcher } from '@/components/common/ThemeSwitcher'
import { Button } from '@/components/ui/button'
import { useDashboardLayoutStore } from '@/store/layouts/dashboard.store'
import { IconChevronsLeft, IconMenu2 } from '@tabler/icons-react'
import clsx from 'clsx'
import AuthDropdown from '../common/AuthDropdown'

export const Header = () => {
    const { isSidebarExpanded, setSidebarExpanded, setMobileMenuOpen } =
        useDashboardLayoutStore((s) => ({
            isSidebarExpanded: s.isSidebarExpanded,
            setSidebarExpanded: s.setSidebarExpanded,
            setMobileMenuOpen: s.setMobileMenuOpen,
        }))

    return (
        <header className="h-[60px] px-4 bg-card rounded-xl transition-[left] duration-300 ease-in-out border">
            <div className="h-full flex items-center justify-between">
                {/* left side */}
                <div className="flex items-center">
                    {/* trigger mobile menu */}
                    <Button
                        onClick={() => setMobileMenuOpen(true)}
                        size="icon"
                        variant="ghost"
                        className="lg:hidden mr-2"
                        aria-label="Open mobile menu"
                    >
                        <IconMenu2 />
                    </Button>

                    {/* expand/collapse sidebar */}
                    <Button
                        onClick={() => setSidebarExpanded(!isSidebarExpanded)}
                        size="icon"
                        variant="ghost"
                        aria-label={`${
                            isSidebarExpanded ? 'Collapse' : 'Expand'
                        } Sidebar`}
                        className="hidden lg:flex"
                    >
                        <IconChevronsLeft
                            className={clsx(
                                'transform',
                                isSidebarExpanded ? 'rotate-0' : 'rotate-180',
                            )}
                        />
                    </Button>
                </div>

                {/* right side */}
                <div className="flex items-center space-x-2">
                    <ThemeSwitcher />

                    <AuthDropdown />
                </div>
            </div>
        </header>
    )
}
