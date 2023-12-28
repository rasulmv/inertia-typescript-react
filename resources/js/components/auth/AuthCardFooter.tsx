import { Link } from '@inertiajs/react'
import { Button } from '../ui/button'
import { CardFooter } from '../ui/card'

export default function AuthCardFooter({
    isLoginPage,
}: {
    isLoginPage: boolean
}) {
    return (
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
    )
}
