import DashboardLayout from '@/layouts/DashboardLayout'
import { usePage } from '@inertiajs/react'
import { ReactNode } from 'react'

export default function DashboardIndex() {
    const { user } = usePage().props

    return (
        <div>
            <h4>Welcome back, {`${user!.first_name}`}!</h4>
        </div>
    )
}

DashboardIndex.layout = (page: ReactNode) => (
    <DashboardLayout metadata={{ title: 'Dashboard' }}>{page}</DashboardLayout>
)
