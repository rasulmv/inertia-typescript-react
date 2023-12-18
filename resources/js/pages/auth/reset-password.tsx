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
import { usePage } from '@inertiajs/react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function ResetPassword() {
    const { email, token } = usePage<{ email: string; token: string }>().props
    const { submit, isLoading } = useSubmit()

    const schema = z
        .object({
            email: z.string().email('Invalid e-mail address'),
            password: z
                .string()
                .min(8, 'Password must have at least 8 characters'),
            password_confirmation: z.string(),
        })
        // make sure password confirmation matches with password
        .refine((data) => data.password === data.password_confirmation, {
            message: 'Password confirmation doesn\t match password.',
            path: ['password_confirmation'],
        })

    const form = useForm<z.infer<typeof schema> & { token: string }>({
        resolver: zodResolver(schema),
        defaultValues: {
            token: token ?? '',
            email: email ?? '',
            password: '',
            password_confirmation: '',
        },
    })

    const { setFocus } = form
    useEffect(() => {
        setFocus('email')
    }, [setFocus])

    const onSubmit = async (data: z.infer<typeof schema> & { token: string }) =>
        await submit({
            form,
            method: 'post',
            url: route('password.store'),
            data: { ...data, token },
        })

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>

                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="********"
                                    {...field}
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password_confirmation"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password Confirmation</FormLabel>

                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="********"
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
                        Update Password
                    </Button>
                </div>
            </form>
        </Form>
    )
}

ResetPassword.layout = (page: any) => (
    <AuthLayout children={page} title="Reset Password" />
)
