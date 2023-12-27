import { HeaderProvider } from '@/context/HeaderContext'
import { useTheme } from '@/context/ThemeContext'
import { cn } from '@/lib/utils'
import { MobileMenu } from '../MobileMenu'
import { PageLayer } from '../PageLayer'
import { HeaderLeft } from './HeaderLeft'
import { HeaderRight } from './HeaderRight'

export const Header = ({ isDashboard = false }: { isDashboard?: boolean }) => {
    const { theme } = useTheme()

    return (
        <HeaderProvider>
            <header
                className={cn(
                    'z-20 fixed top-0 right-0 h-[60px] border-b',
                    isDashboard && theme === 'dark'
                        ? 'bg-card'
                        : 'bg-background',
                )}
                style={{ left: isDashboard ? 300 : 0 }}
            >
                <div className="container">
                    <div className="h-full flex items-center justify-between">
                        <HeaderLeft isDashboard={isDashboard} />

                        <HeaderRight />
                    </div>
                </div>
            </header>

            <MobileMenu />

            <PageLayer />
        </HeaderProvider>
    )
}
