import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { getNameInitialsForAvatar } from '@/lib/utils'
import { Link, usePage } from '@inertiajs/react'
import { LogOutIcon, UserIcon } from 'lucide-react'
import { useState } from 'react'
import { Avatar, AvatarFallback } from '../../ui/avatar'
import { Button } from '../../ui/button'
import { Separator } from '../../ui/separator'

export const AuthDropdown = () => {
    const { user } = usePage().props
    const [isOpen, setIsOpen] = useState(false)

    return (
        <DropdownMenu open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
            <DropdownMenuTrigger asChild className="hidden sm:flex">
                <Button size="icon" variant="ghost">
                    <UserIcon className="w-5 h-5" />
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
                                `${user.firstName} ${user.lastName}`,
                            )}
                        </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                        <span className="text-sm font-medium">{`${user.firstName} ${user.lastName}`}</span>

                        <span className="text-sm text-muted-foreground leading-tight">
                            {user.email}
                        </span>
                    </div>
                </div>

                <Separator className="mb-1" />

                <DropdownMenuItem asChild>
                    <Link
                        href={route('dashboard.index')}
                        className="flex items-center justify-between"
                    >
                        <span>Dashboard</span>

                        <UserIcon className="w-4 h-4" />
                    </Link>
                </DropdownMenuItem>

                <Separator className="my-1" />

                {user && (
                    <DropdownMenuItem asChild>
                        <Link
                            href={route('logout')}
                            method="post"
                            as="button"
                            type="button"
                            className="w-full flex items-center justify-between text-destructive focus:text-destructive focus:bg-destructive/5"
                        >
                            <span>Log out</span>

                            <LogOutIcon className="w-4 h-4" />
                        </Link>
                    </DropdownMenuItem>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
