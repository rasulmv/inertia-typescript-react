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
import AccountLayout from '@/layouts/dashboard/user/AccountLayout'
import { usePage } from '@inertiajs/react'
import { ReactNode, useEffect } from 'react'
import { useForm } from 'react-hook-form'

type TFormValues = {
    first_name: string
    last_name: string
    email: string
}

export default function DashboardAccountProfile() {
    const { user } = usePage().props
    const { submit } = useSubmit()

    const form = useForm({
        defaultValues: {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
        },
    })

    const { setFocus } = form
    useEffect(() => {
        setFocus('first_name')
    }, [setFocus])

    const onSubmit = async (data: TFormValues) =>
        await submit({
            form,
            method: 'patch',
            url: route('dashboard.account.profile.update'),
            data,
        })

    return (
        <AccountLayout
            title="Profile"
            description="Update your profile information."
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4 sm:max-w-sm"
                >
                    <FormField
                        control={form.control}
                        name="first_name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>First name</FormLabel>

                                <FormControl>
                                    <Input
                                        required
                                        placeholder={user.first_name}
                                        spellCheck={false}
                                        {...field}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="last_name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Last name</FormLabel>

                                <FormControl>
                                    <Input
                                        required
                                        placeholder={user.last_name}
                                        spellCheck={false}
                                        {...field}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>E-mail</FormLabel>

                                <FormControl>
                                    <Input
                                        type="email"
                                        required
                                        placeholder={user.email}
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
        </AccountLayout>
    )
}

DashboardAccountProfile.layout = (page: ReactNode) => (
    <DashboardLayout
        metadata={{
            title: 'Profile Settings',
        }}
    >
        {page}
    </DashboardLayout>
)
