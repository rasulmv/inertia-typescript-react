/**
 * Layout for authentication pages and email verification.
 */
import { AuthCard } from '@/components/auth/AuthCard'
import { Metadata } from '@/components/common/Metadata'
import { Header } from '@/components/layout/Header'
import { TMetadata } from '@/types'
import { PropsWithChildren } from 'react'

export default function AuthLayout({
    children,
    metadata,
}: PropsWithChildren<{ metadata: TMetadata }>) {
    return (
        <>
            <Metadata metadata={metadata} />

            <div className="relative min-h-screen flex flex-col justify-between">
                <Header />

                <main className="flex-1 pt-[60px]">
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
