/**
 * Layout for authentication pages and email verification.
 */
import { AuthCard } from '@/components/auth/AuthCard'
import { Metadata } from '@/components/layout/common/Metadata'
import { MobileMenu } from '@/components/layout/common/MobileMenu'
import { Header } from '@/components/layout/guest/Header'
import { useGuestLayoutStore } from '@/store/layouts/guest.store'
import { TMetadata } from '@/types'
import { PropsWithChildren } from 'react'

export default function AuthLayout({
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

                <main className="flex-1 pt-[60px] bg-accent dark:bg-background">
                    <div className="container">
                        <div className="flex flex-col items-center justify-center py-14">
                            <AuthCard {...metadata}>{children}</AuthCard>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
