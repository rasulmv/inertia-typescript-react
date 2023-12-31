import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useSubmit } from '@/hooks/use-submit'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export const DeleteAccountForm = () => {
    const { submit } = useSubmit()

    const schema = z.object({
        password: z
            .string()
            .min(8, 'Password must contain at least 8 characters'),
    })

    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            password: '',
        },
    })

    const onSubmit = async (data: z.infer<typeof schema>) =>
        await submit({
            form,
            method: 'patch',
            url: route('dashboard.profile.account.delete'),
            data,
        })

    return (
        <div className="flex flex-col">
            <h4 className="mb-4">Delete account</h4>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4 sm:max-w-sm"
                >
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel isRequired>Password</FormLabel>

                                <FormDescription className="max-w-sm">
                                    Enter your current password
                                </FormDescription>

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
                            variant="destructive"
                            isLoading={form.formState.isSubmitting}
                        >
                            Delete
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}
