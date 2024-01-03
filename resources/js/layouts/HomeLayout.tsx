import { Metadata } from '@/components/layout/common/Metadata'
import { MobileMenu } from '@/components/layout/common/MobileMenu'
import { Footer } from '@/components/layout/guest/Footer'
import { Header } from '@/components/layout/guest/Header'
import { useGuestLayoutStore } from '@/store/layouts/guest.store'
import { TMetadata } from '@/types'
import { PropsWithChildren } from 'react'

export default function HomeLayout({
    children,
    metadata,
}: PropsWithChildren<{ metadata: TMetadata }>) {
    const { isMobileMenuOpen, setMobileMenuOpen } = useGuestLayoutStore(
        (s) => ({
            isMobileMenuOpen: s.isMobileMenuOpen,
            setMobileMenuOpen: s.setMobileMenuOpen,
        }),
    )

    return (
        <>
            <Metadata metadata={metadata} />

            <div className="relative min-h-screen flex flex-col justify-between">
                <Header />

                <MobileMenu
                    isOpen={isMobileMenuOpen}
                    close={() => setMobileMenuOpen(false)}
                />

                <main className="flex-1 pt-[60px]">{children}</main>

                <Footer />
            </div>
        </>
    )
}
