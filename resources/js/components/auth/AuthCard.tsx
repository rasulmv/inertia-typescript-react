import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { usePage } from '@inertiajs/react'
import { PropsWithChildren, Suspense, lazy } from 'react'

const AuthCardFooter = lazy(() =>
    import('./AuthCardFooter').then(({ AuthCardFooter }) => ({
        default: AuthCardFooter,
    })),
)

export const AuthCard = ({
    children,
    title,
    description,
}: PropsWithChildren<{ title: string; description?: string }>) => {
    const { url } = usePage()

    const isLoginPage = url === '/auth/login'
    const isRegisterPage = url === '/auth/register'

    return (
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

            {/* show this footer only on login and register pages */}
            <Suspense fallback={<></>}>
                {(isLoginPage || isRegisterPage) && (
                    <AuthCardFooter isLoginPage={isLoginPage} />
                )}
            </Suspense>
        </Card>
    )
}
