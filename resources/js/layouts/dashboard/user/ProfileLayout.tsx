import { Card, CardContent } from '@/components/ui/card'
import { NavItem } from '@/components/user/profile/NavItem'
import { usePage } from '@inertiajs/react'
import { PropsWithChildren } from 'react'

export default function ProfileLayout({
    children,
    title,
    description,
}: PropsWithChildren<{ title: string; description: string }>) {
    const { component } = usePage()

    return (
        <Card>
            <CardContent className="p-8">
                <div className="flex flex-col md:flex-row space-y-10 md:space-x-10 md:space-y-0">
                    {/* sidebar navigation */}
                    <nav className="w-full flex flex-col space-y-1.5 sm:max-w-[15rem]">
                        <NavItem
                            href={route('dashboard.profile.edit')}
                            isActive={component === 'dashboard/profile/index'}
                        >
                            Profile
                        </NavItem>

                        <NavItem
                            href={route('dashboard.profile.password.edit')}
                            isActive={
                                component === 'dashboard/profile/password'
                            }
                        >
                            Password
                        </NavItem>

                        <NavItem
                            href={route('dashboard.profile.account.edit')}
                            isActive={component === 'dashboard/profile/account'}
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
