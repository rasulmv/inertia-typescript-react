/**
 * User and admin dashboard layouts.
 */
import { Metadata } from '@/components/common/Metadata'
import { Header } from '@/components/layout/dashboard/Header'
import { Sidebar } from '@/components/layout/dashboard/Sidebar'
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

            <div className="relative h-screen overflow-hidden flex">
                <Sidebar />

                <Toaster />

                <div className="flex-1 flex flex-col">
                    <Header />

                    <main className="flex-1 pt-[60px] overflow-y-auto bg-zinc-100 dark:bg-background">
                        <div className="container py-6">
                            {metadata.title && (
                                <h3 className="font-bold mb-5">
                                    {metadata.title}
                                </h3>
                            )}

                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </DashboardLayoutProvider>
    )
}
