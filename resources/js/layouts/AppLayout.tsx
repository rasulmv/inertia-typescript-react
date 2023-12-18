/**
 * Layout for home pages e.g. homepage, about, contact us, etc.
 */
import { Header } from '@/components/Header'
import { Head } from '@inertiajs/react'
import { PropsWithChildren } from 'react'

export default function AppLayout({
    children,
    title,
}: PropsWithChildren<{ title: string }>) {
    return (
        <>
            <Header />

            <Head title={title} />

            <main className="pt-[60px]">{children}</main>
        </>
    )
}
