import { ThemeSwitcher } from '@/components/common/ThemeSwitcher'
import { Button } from '@/components/ui/button'
import { useDashboardLayoutContext } from '@/context/DashboardLayoutContext'
import { IconChevronsLeft, IconMenu } from '@tabler/icons-react'
import clsx from 'clsx'
import AuthDropdown from '../guest/Header/AuthDropdown'

export const Header = () => {
    const { isSidebarExpanded, setSidebarExpanded } =
        useDashboardLayoutContext()

    return (
        <header className="h-[60px] px-4 bg-card rounded-xl transition-[left] duration-300 ease-in-out border">
            <div className="h-full flex items-center justify-between">
                {/* left side */}
                <div className="flex items-center">
                    <Button
                        size="icon"
                        variant="ghost"
                        className="lg:hidden mr-2"
                    >
                        <IconMenu />
                    </Button>

                    {/* expand/collapse sidebar */}
                    <Button
                        onClick={() => setSidebarExpanded((prev) => !prev)}
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
