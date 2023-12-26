import { HeaderProvider } from '@/context/HeaderContext'
import { PageLayer } from '../PageLayer'
import { HeaderLeft } from './HeaderLeft'
import { HeaderRight } from './HeaderRight'
import { MobileMenu } from './mobile/MobileMenu'

export const Header = () => {
    return (
        <HeaderProvider>
            <header className="z-20 fixed top-0 left-0 right-0 h-[60px] border-b bg-background">
                <div className="container">
                    <div className="h-full flex items-center justify-between">
                        <HeaderLeft />

                        <HeaderRight />
                    </div>
                </div>
            </header>

            <MobileMenu />

            <PageLayer />
        </HeaderProvider>
    )
}
