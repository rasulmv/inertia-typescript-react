import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { useSubmit } from '@/hooks/use-submit'
import AuthLayout from '@/layouts/AuthLayout'
import { router, usePage } from '@inertiajs/react'
import { ReactNode } from 'react'

export default function VerifyEmail() {
    const { status } = usePage<{ status: string }>().props

    const { isLoading, submit } = useSubmit()

    const onSubmit = async () => {
        await submit({
            method: 'post',
            url: route('verification.send'),
        })
    }

    return (
        <>
            {status && (
                <Alert variant="success" className="mb-6">
                    <AlertDescription>{status}</AlertDescription>
                </Alert>
            )}

            <div className="flex items-end justify-between">
                <Button onClick={onSubmit} isLoading={isLoading}>
                    Resend E-mail
                </Button>

                <button
                    onClick={() => router.post(route('logout'))}
                    className="underline underline-offset-4 hover:no-underline"
                >
                    Log out
                </button>
            </div>
        </>
    )
}

VerifyEmail.layout = (page: ReactNode) => (
    <AuthLayout
        children={page}
        title="Almost there!"
        description="Please verify your e-mail address to continue."
    />
)
