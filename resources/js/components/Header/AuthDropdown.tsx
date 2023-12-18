import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Link, router, usePage } from '@inertiajs/react'
import { ChevronDownIcon, LogOutIcon, UserIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export const AuthDropdown = () => {
    const { user } = usePage().props
    const [isOpen, setIsOpen] = useState(false)

    return (
        <DropdownMenu open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    className="data-[state=open]:bg-accent"
                >
                    <div className="flex items-center space-x-1.5">
                        <span className="font-medium">{`${user!.firstName} ${
                            user!.lastName
                        }`}</span>

                        <ChevronDownIcon
                            className={cn(
                                'w-4 text-muted-foreground',
                                isOpen && 'rotate-180',
                            )}
                        />
                    </div>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent onCloseAutoFocus={(e) => e.preventDefault()}>
                <DropdownMenuItem asChild>
                    <Link
                        href={route('dashboard')}
                        className="flex items-center justify-between"
                    >
                        <span> Dashboard</span>

                        <UserIcon className="w-4 h-4" />
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>

                {user && (
                    <DropdownMenuItem asChild>
                        <button
                            onClick={() => router.post(route('logout'))}
                            className="w-full flex items-center justify-between text-destructive focus:text-destructive focus:bg-destructive/5"
                        >
                            <span>Logout</span>

                            <LogOutIcon className="w-4 h-4" />
                        </button>
                    </DropdownMenuItem>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
