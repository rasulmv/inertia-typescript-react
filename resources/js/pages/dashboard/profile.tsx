import DashboardLayout from '@/layouts/DashboardLayout'
import { ReactNode } from 'react'

export default function DashboardProfile() {
    return (
        <>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            tenetur.
        </>
    )
}

DashboardProfile.layout = (page: ReactNode) => (
    <DashboardLayout metadata={{ title: 'Profile' }}>{page}</DashboardLayout>
)
