import DashboardLayout from '@/layouts/DashboardLayout'
import { usePage } from '@inertiajs/react'
import { ReactNode } from 'react'

export default function DashboardIndex() {
    const { user } = usePage().props

    return (
        <div>
            <h3>Welcome back, {`${user!.firstName}`}!</h3>
        </div>
    )
}

DashboardIndex.layout = (page: ReactNode) => (
    <DashboardLayout children={page} metadata={{ title: 'Dashboard' }} />
)
