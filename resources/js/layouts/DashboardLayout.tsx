/**
 * User and admin dashboard layouts.
 */
import { Metadata } from '@/components/common/Metadata'
import { Header } from '@/components/layout/dashboard/Header'
import { Sidebar } from '@/components/layout/dashboard/Sidebar'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Toaster } from '@/components/ui/sonner'
import { DashboardLayoutProvider } from '@/context/DashboardLayoutContext'
import { TMetadata } from '@/types'
import { PropsWithChildren } from 'react'

export default function DashboardLayout({
    children,
    metadata,
}: PropsWithChildren<{ metadata: TMetadata }>) {
    return (
        <DashboardLayoutProvider>
            <Metadata metadata={metadata} />

            <div className="relative h-screen overflow-hidden flex px-8 py-6 bg-secondary dark:bg-background">
                <Sidebar />

                <div className="flex-1 flex flex-col">
                    <Header />

                    <ScrollArea type="hover" className="flex-1 mt-8">
                        <h3 className="font-bold mb-3">{metadata.title}</h3>

                        {children}
                    </ScrollArea>
                </div>

                <Toaster />
            </div>
        </DashboardLayoutProvider>
    )
}
