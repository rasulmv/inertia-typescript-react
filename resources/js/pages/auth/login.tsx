import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
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
import { Link, usePage } from '@inertiajs/react'
import { ReactNode, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function Login() {
    const { status } = usePage().props
    const { submit, isLoading } = useSubmit()

    const schema = z.object({
        email: z.string().email('Invalid e-mail address'),
        password: z.string().min(8, 'Password must have at least 8 characters'),
        remember: z.boolean(),
    })

    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            email: '',
            password: '',
            remember: false,
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
            url: route('login.store'),
            data,
            stopLoadingOnSuccess: false,
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

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <div className="flex items-center justify-between">
                                    <FormLabel>Password</FormLabel>

                                    <Link
                                        href={route('password.request')}
                                        className="text-sm underline"
                                    >
                                        Forgot password?
                                    </Link>
                                </div>

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
                        name="remember"
                        render={({ field }) => (
                            <FormItem>
                                <div className="pt-1 flex items-center space-x-2">
                                    <FormControl>
                                        <Checkbox
                                            id="remember"
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>

                                    <label
                                        htmlFor="remember"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Remember me
                                    </label>
                                </div>

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
                            Login
                        </Button>
                    </div>
                </form>
            </Form>
        </>
    )
}

Login.layout = (page: ReactNode) => (
    <AuthLayout
        children={page}
        metadata={{
            title: 'Sign In',
            description: 'Log into your account.',
        }}
    />
)
