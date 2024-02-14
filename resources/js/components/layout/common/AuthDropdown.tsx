import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import { getNameInitialsForAvatar } from '@/lib/utils'
import { Link, usePage } from '@inertiajs/react'
import { IconLogout, IconUser } from '@tabler/icons-react'
import { useState } from 'react'

export default function AuthDropdown() {
    const { user } = usePage().props
    const [isOpen, setIsOpen] = useState(false)

    return (
        <DropdownMenu open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
            <DropdownMenuTrigger asChild>
                <Button
                    size="icon"
                    variant="ghost"
                    className="hidden sm:flex"
                    aria-label="Toggle user dropdown menu"
                >
                    <IconUser className="w-5 h-5" />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                sideOffset={20}
                onCloseAutoFocus={(e) => e.preventDefault()}
                className="min-w-[17rem] hidden sm:block"
            >
                <div className="flex items-center space-x-3 pt-4 pb-6 px-4 pr-5">
                    <Avatar>
                        <AvatarFallback>
                            {getNameInitialsForAvatar(
                                `${user.first_name} ${user.last_name}`,
                            )}
                        </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                        <span className="text-sm font-medium">{`${user.first_name} ${user.last_name}`}</span>

                        <span className="text-sm text-muted-foreground leading-tight">
                            {user.email}
                        </span>
                    </div>
                </div>

                <Separator className="mb-1" />

                <DropdownMenuItem asChild>
                    <Link
                        href={route('dashboard.profile.edit')}
                        className="flex items-center justify-between"
                    >
                        <span>Profile</span>

                        <IconUser className="w-4 h-4" />
                    </Link>
                </DropdownMenuItem>

                <Separator className="my-1" />

                <DropdownMenuItem asChild>
                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        type="button"
                        className="w-full flex items-center justify-between text-destructive-text focus:text-destructive-text focus:bg-destructive/5"
                    >
                        <span>Log out</span>

                        <IconLogout className="w-4 h-4" />
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
