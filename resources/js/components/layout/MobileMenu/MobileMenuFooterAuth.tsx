import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { getNameInitialsForAvatar } from '@/lib/utils'
import { Link, usePage } from '@inertiajs/react'
import { MobileMenuItem } from './MobileMenuItem'

export const MobileMenuFooterAuth = () => {
    const { user } = usePage().props

    return (
        <>
            <Link
                href={route('dashboard.index')}
                className="flex items-center space-x-4"
            >
                <Avatar>
                    <AvatarFallback>
                        {getNameInitialsForAvatar(
                            `${user.firstName} ${user.lastName}`,
                        )}
                    </AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                    <span className="font-medium">{`${user.firstName} ${user.lastName}`}</span>

                    <span className="text-sm text-muted-foreground leading-tight">
                        {user.email}
                    </span>
                </div>
            </Link>

            {/* auth user menu */}
            <div className="flex flex-col mt-6">
                <MobileMenuItem
                    label="Profile"
                    href={route('dashboard.profile')}
                    component="dashboard/profile"
                />

                <MobileMenuItem
                    label="Log out"
                    href={route('logout')}
                    method="post"
                    as="button"
                    type="button"
                    className="logout"
                />
            </div>
        </>
    )
}
