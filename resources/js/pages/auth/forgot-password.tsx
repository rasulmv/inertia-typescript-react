import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useSubmit } from '@/hooks/use-submit'
import AuthLayout from '@/layouts/AuthLayout'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function ForgotPassword() {
    const { submit, isLoading, status } = useSubmit()

    const schema = z.object({
        email: z.string().email('Invalid e-mail address'),
    })

    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            email: '',
        },
    })

    const { setFocus } = form
    useEffect(() => {
        setFocus('email')
    }, [setFocus])

    const onSubmit = async (data: z.infer<typeof schema>) =>
        await submit({
            form,
            method: 'post',
            url: route('password.email'),
            data,
        })

    return (
        <>
            {status && (
                <Alert variant="success" className="mb-6">
                    <AlertDescription>{status}</AlertDescription>
                </Alert>
            )}

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>E-mail</FormLabel>

                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="johndoe@gmail.com"
                                        {...field}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="pt-2">
                        <Button
                            type="submit"
                            className="w-full h-11"
                            size="lg"
                            isLoading={isLoading}
                        >
                            Send E-mail
                        </Button>
                    </div>
                </form>
            </Form>
        </>
    )
}

ForgotPassword.layout = (page: ReactNode) => (
    <AuthLayout
        children={page}
        title="Reset Password"
        description="Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."
    />
)
