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

export default function Register() {
    const { submit, isLoading } = useSubmit()

    const schema = z
        .object({
            first_name: z
                .string()
                .min(2, 'First name must have at least 2 characters.'),
            last_name: z
                .string()
                .min(2, 'Last name must have at least 2 characters.'),
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

    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            password_confirmation: '',
        },
    })

    const { setFocus } = form
    useEffect(() => {
        setFocus('first_name')
    }, [setFocus])

    const onSubmit = async (data: z.infer<typeof schema>) =>
        await submit({
            form,
            method: 'post',
            url: route('register.store'),
            data,
            stopLoadingOnSuccess: false,
        })

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 space-x-4">
                    {/* first name */}
                    <FormField
                        control={form.control}
                        name="first_name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel isRequired>First name</FormLabel>

                                <FormControl>
                                    <Input placeholder="John" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* last name */}
                    <FormField
                        control={form.control}
                        name="last_name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel isRequired>Last name</FormLabel>

                                <FormControl>
                                    <Input placeholder="Doe" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel isRequired>E-mail</FormLabel>

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
                            <FormLabel isRequired>Password</FormLabel>

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
                            <FormLabel isRequired>
                                Password Confirmation
                            </FormLabel>

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
                        Register
                    </Button>
                </div>
            </form>
        </Form>
    )
}

Register.layout = (page: ReactNode) => (
    <AuthLayout
        children={page}
        title="Sign Up"
        description="Create a new account."
    />
)
