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

export default function ConfirmPassword() {
    const { isLoading, submit } = useSubmit()

    const schema = z.object({
        password: z.string().min(8, 'Password must have at least 8 characters'),
    })

    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            password: '',
        },
    })

    const { setFocus } = form
    useEffect(() => {
        setFocus('password')
    }, [setFocus])

    const onSubmit = async (data: z.infer<typeof schema>) =>
        await submit({
            form,
            method: 'post',
            url: route('password.confirm'),
            data,
            resetFormOnSuccess: true,
        })

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex flex-col">
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

                    <div className="mt-5 flex items-end justify-between">
                        <Button type="submit" isLoading={isLoading}>
                            Confirm Password
                        </Button>
                    </div>
                </div>
            </form>
        </Form>
    )
}

ConfirmPassword.layout = (page: ReactNode) => (
    <AuthLayout
        metadata={{
            title: 'Confirm Password',
            description:
                'This is a secure area of the application. Please confirm your password before continuing.',
        }}
    >
        {page}
    </AuthLayout>
)
