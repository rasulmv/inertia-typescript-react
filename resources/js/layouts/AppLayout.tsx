import { Header } from '@/components/Header'
import { Head } from '@inertiajs/react'
import { PropsWithChildren } from 'react'

export default function AppLayout({
    children,
    pageTitle,
}: PropsWithChildren<{ pageTitle: string }>) {
    return (
        <>
            <Header />

            <Head title={pageTitle} />

            <main className="pt-[60px]">{children}</main>
        </>
    )
}
