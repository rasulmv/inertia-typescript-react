/**
 * User and admin dashboard layouts.
 */
import { Metadata } from '@/components/common/Metadata'
import { Header } from '@/components/layout/Header'
import { Sidebar } from '@/components/layout/Sidebar'
import { TMetadata } from '@/types'
import { PropsWithChildren } from 'react'

export default function DashboardLayout({
    children,
    metadata,
}: PropsWithChildren<{ metadata: TMetadata }>) {
    return (
        <>
            <Metadata metadata={metadata} />

            <div className="relative h-screen overflow-hidden flex">
                <Sidebar />

                <div className="flex-1 flex flex-col">
                    <Header isDashboard />

                    <main className="flex-1 pt-[60px] overflow-y-auto">
                        <div className="container py-6">{children}</div>
                    </main>
                </div>
            </div>
        </>
    )
}
