/**
 * User and admin dashboard layouts.
 */
import { PropsWithChildren } from 'react'
import AppLayout from './AppLayout'

export default function DashboardLayout({
    children,
    title,
}: PropsWithChildren<{ title: string }>) {
    return (
        <AppLayout title={title}>
            <div className="container py-6">{children}</div>
        </AppLayout>
    )
}
