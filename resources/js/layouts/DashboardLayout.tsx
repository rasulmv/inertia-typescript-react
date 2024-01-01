/**
 * User and admin dashboard layouts.
 */
import { Metadata } from '@/components/common/Metadata'
import MobileMenu from '@/components/common/MobileMenu'
import { Header } from '@/components/layout/dashboard/Header'
import { Sidebar } from '@/components/layout/dashboard/Sidebar'
import { SidebarInner } from '@/components/layout/dashboard/Sidebar/SidebarInner'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Toaster } from '@/components/ui/sonner'
import { useDashboardLayoutStore } from '@/store/layouts/dashboard.store'
import { TMetadata } from '@/types'
import { PropsWithChildren } from 'react'

export default function DashboardLayout({
    children,
    metadata,
}: PropsWithChildren<{ metadata: TMetadata }>) {
    const { isMobileMenuOpen, setMobileMenuOpen } = useDashboardLayoutStore(
        (s) => ({
            isMobileMenuOpen: s.isMobileMenuOpen,
            setMobileMenuOpen: s.setMobileMenuOpen,
        }),
    )

    return (
        <>
            <Metadata metadata={metadata} />

            <div className="relative h-screen overflow-hidden flex px-8 py-6 bg-accent dark:bg-background">
                <Sidebar />

                <MobileMenu
                    isOpen={isMobileMenuOpen}
                    close={() => setMobileMenuOpen(false)}
                >
                    {/* padding left for visual align */}
                    <MobileMenu.Header className="pl-[34px]" />

                    <MobileMenu.Body className="p-0">
                        <SidebarInner />
                    </MobileMenu.Body>
                </MobileMenu>

                <div className="flex-1 flex flex-col">
                    <Header />

                    <ScrollArea type="hover" className="flex-1 mt-8">
                        <h3 className="font-bold mb-3">{metadata.title}</h3>

                        {children}
                    </ScrollArea>
                </div>

                <Toaster />
            </div>
        </>
    )
}
