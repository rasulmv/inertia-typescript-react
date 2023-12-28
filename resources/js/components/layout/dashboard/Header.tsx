import { ThemeSwitcher } from '@/components/common/ThemeSwitcher'
import { Button } from '@/components/ui/button'
import { useDashboardLayoutContext } from '@/context/DashboardLayoutContext'
import { IconChevronsLeft } from '@tabler/icons-react'
import clsx from 'clsx'
import AuthDropdown from '../guest/Header/AuthDropdown'

export const Header = () => {
    const { isSidebarExpanded, setSidebarExpanded } =
        useDashboardLayoutContext()

    return (
        <header
            className="z-20 fixed top-0 right-0 h-[60px] bg-card transition-[left] duration-300 ease-in-out"
            style={{ left: isSidebarExpanded ? 300 : 85 }}
        >
            <div className="container">
                <div className="h-full flex items-center justify-between">
                    {/* left side */}
                    <div className="flex items-center space-x-2">
                        {/* expand/collapse sidebar */}
                        <Button
                            onClick={() => setSidebarExpanded((prev) => !prev)}
                            size="icon"
                            variant="ghost"
                            aria-label={`${
                                isSidebarExpanded ? 'Collapse' : 'Expand'
                            } Sidebar`}
                        >
                            <IconChevronsLeft
                                className={clsx(
                                    'transform',
                                    isSidebarExpanded
                                        ? 'rotate-0'
                                        : 'rotate-180',
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
            </div>
        </header>
    )
}
