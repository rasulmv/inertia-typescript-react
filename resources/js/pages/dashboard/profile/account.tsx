import { Separator } from '@/components/ui/separator'
import { DeleteAccountForm } from '@/components/user/profile/DeleteAccountForm'
import DashboardLayout from '@/layouts/DashboardLayout'
import ProfileLayout from '@/layouts/dashboard/user/ProfileLayout'
import { ReactNode } from 'react'

export default function UserProfileAccount() {
    return (
        <ProfileLayout title="Account" description="Manage your account.">
            <Separator className="mb-6" />

            <DeleteAccountForm />
        </ProfileLayout>
    )
}

UserProfileAccount.layout = (page: ReactNode) => (
    <DashboardLayout
        metadata={{
            title: 'Profile Settings',
        }}
    >
        {page}
    </DashboardLayout>
)
