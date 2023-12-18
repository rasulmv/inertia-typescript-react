/**
 * User and admin dashboard layouts.
 */
import { Head } from '@inertiajs/react'
import { PropsWithChildren } from 'react'
import { Header } from '@/components/Header'

export default function DashboardLayout({
    children,
    title,
}: PropsWithChildren<{ title: string }>) {
    return (
        <>
            <Head title={title} />

            <Header />

            <main className="pt-[60px]">
                <div className="container py-6">{children}</div>
            </main>
        </>
    )
}
