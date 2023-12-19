/**
 * Layout for authentication pages and email verification.
 */
import AppLayout from './AppLayout'

import { Button } from '@/components/ui/button'

import { PropsWithChildren } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Link, usePage } from '@inertiajs/react'
import { sleep } from '@/lib/utils'

export default function AuthLayout({
    children,
    title,
    description,
}: PropsWithChildren<{ title: string; description?: string }>) {
    const { url } = usePage()

    const isLoginPage = url === '/auth/login'
    const isRegisterPage = url === '/auth/register'

    return (
        <AppLayout title={title}>
            <div className="container">
                <div className="flex flex-col items-center justify-center py-14">
                    <Card className="w-full max-w-[450px]">
                        <CardHeader>
                            <CardTitle>{title}</CardTitle>

                            {description && (
                                <CardDescription className="text-base">
                                    {description}
                                </CardDescription>
                            )}
                        </CardHeader>

                        <CardContent>{children}</CardContent>

                        {/* show this footer only on login or register pages */}
                        {(isLoginPage || isRegisterPage) && (
                            <CardFooter className="flex items-center justify-center space-x-1">
                                <span className="text-muted-foreground">
                                    {isLoginPage
                                        ? "Don't have an account?"
                                        : 'Already have an account?'}
                                </span>

                                <Button
                                    variant="link"
                                    asChild
                                    className="p-0 h-auto text-base font-normal underline underline-offset-2 hover:no-underline"
                                >
                                    <Link
                                        href={
                                            isLoginPage
                                                ? route('register.create')
                                                : route('login.create')
                                        }
                                    >
                                        {isLoginPage ? 'Sign up' : 'Sign in'}
                                    </Link>
                                </Button>
                            </CardFooter>
                        )}
                    </Card>
                </div>
            </div>
        </AppLayout>
    )
}
