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
import DashboardLayout from '@/layouts/DashboardLayout'
import ProfileLayout from '@/layouts/dashboard/user/ProfileLayout'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function UserProfilePassword() {
    const { submit } = useSubmit()

    const schema = z
        .object({
            current_password: z.string(),
            password: z
                .string()
                .min(8, 'Password must have at least 8 characters'),
            password_confirmation: z.string(),
        })
        // make sure password confirmation matches with password
        .refine((data) => data.password === data.password_confirmation, {
            message: "Password confirmation doesn't match new password.",
            path: ['password_confirmation'],
        })

    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            current_password: '',
            password: '',
            password_confirmation: '',
        },
    })

    const { setFocus } = form
    useEffect(() => {
        setFocus('current_password')
    }, [setFocus])

    const onSubmit = async (data: z.infer<typeof schema>) =>
        await submit({
            form,
            method: 'patch',
            url: route('dashboard.profile.password.update'),
            data,
        })

    return (
        <ProfileLayout title="Password" description="Change your password.">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4 sm:max-w-sm"
                >
                    <FormField
                        control={form.control}
                        name="current_password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel isRequired>
                                    Current password
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

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel isRequired>New password</FormLabel>

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
                                    New password confirmation
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

                    <div className="pt-3">
                        <Button
                            type="submit"
                            isLoading={form.formState.isSubmitting}
                        >
                            Update
                        </Button>
                    </div>
                </form>
            </Form>
        </ProfileLayout>
    )
}

UserProfilePassword.layout = (page: ReactNode) => (
    <DashboardLayout
        metadata={{
            title: 'Profile Settings',
        }}
    >
        {page}
    </DashboardLayout>
)
