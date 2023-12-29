import { Card, CardContent } from '@/components/ui/card'
import { NavItem } from '@/components/user/account-layout/NavItem'
import { usePage } from '@inertiajs/react'
import { PropsWithChildren } from 'react'

export default function AccountLayout({
    children,
    title,
    description,
}: PropsWithChildren<{ title: string; description: string }>) {
    const { component } = usePage()

    return (
        <Card className="rounded-2xl border-none">
            <CardContent className="p-8">
                <div className="flex flex-col md:flex-row space-y-10 md:space-x-10 md:space-y-0">
                    {/* sidebar navigation */}
                    <nav className="w-full flex flex-col space-y-1.5 sm:max-w-[15rem]">
                        <NavItem
                            href={route('dashboard.account.profile.edit')}
                            isActive={component === 'dashboard/account/profile'}
                        >
                            Profile
                        </NavItem>

                        <NavItem
                            href={route('dashboard.account.password.edit')}
                            isActive={
                                component === 'dashboard/account/password'
                            }
                        >
                            Password
                        </NavItem>

                        <NavItem
                            href={route('dashboard.account.password.edit')}
                            isActive={component === 'dashboard/account/account'}
                        >
                            Account
                        </NavItem>
                    </nav>

                    {/* content */}
                    <div className="w-full flex flex-col">
                        <h3>{title}</h3>

                        <p className="mt-1 mb-7 text-muted-foreground">
                            {description}
                        </p>

                        {children}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
