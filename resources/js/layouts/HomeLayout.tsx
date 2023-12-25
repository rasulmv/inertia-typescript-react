import { Header } from '@/components/common/Header'
import { Metadata } from '@/components/common/Metadata'
import { Footer } from '@/components/homepage/Footer'
import { TMetadata } from '@/types'
import { PropsWithChildren } from 'react'

export default function HomeLayout({
    children,
    metadata,
}: PropsWithChildren<{ metadata: TMetadata }>) {
    return (
        <>
            <Metadata metadata={metadata} />

            <div className="relative min-h-screen flex flex-col justify-between">
                <Header />
                <main className="flex-1 pt-[60px]">{children}</main>
                <Footer />
            </div>
        </>
    )
}
