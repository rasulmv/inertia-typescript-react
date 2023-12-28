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
        <Card className="rounded-3xl border-none">
            <CardContent className="pt-6 pb-8 px-8">
                <div className="flex flex-col md:flex-row items-start space-y-10 md:space-y-0 md:space-x-10">
                    {/* sidebar navigation */}
                    <nav className="w-full flex flex-col space-y-1 sm:w-auto sm:flex-row sm:space-y-0 md:flex-col md:space-y-1 sm:min-w-[15rem]">
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
                    </nav>

                    {/* content */}
                    <div className="w-full flex flex-col">
                        {/* title */}
                        <h3>{title}</h3>

                        {/* description */}
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
