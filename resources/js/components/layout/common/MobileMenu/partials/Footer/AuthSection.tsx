import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { getNameInitialsForAvatar } from '@/lib/utils'
import { Link, usePage } from '@inertiajs/react'
import { MenuItem } from '../MenuItem'

export default function AuthSection() {
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
                            `${user.first_name} ${user.last_name}`,
                        )}
                    </AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                    <span className="font-medium">{`${user.first_name} ${user.last_name}`}</span>

                    <span className="text-sm text-muted-foreground leading-tight">
                        {user.email}
                    </span>
                </div>
            </Link>

            <Separator className="mt-5" />

            {/* auth user menu */}
            <div className="flex flex-col mt-2">
                <MenuItem
                    href={route('dashboard.profile.edit')}
                    className="text-base py-1"
                >
                    Profile
                </MenuItem>

                <MenuItem
                    href={route('dashboard.profile.edit')}
                    className="text-base py-1"
                >
                    My portfolio
                </MenuItem>

                <MenuItem
                    href={route('dashboard.profile.edit')}
                    className="text-base py-1"
                >
                    My something else
                </MenuItem>

                <Separator className="my-2" />

                <MenuItem
                    href={route('logout')}
                    method="post"
                    as="button"
                    type="button"
                    className="text-base py-1"
                >
                    Log out
                </MenuItem>
            </div>
        </>
    )
}
