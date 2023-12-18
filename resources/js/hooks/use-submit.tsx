/**
 * A simple wrapper around Inertia & plain Axios requests to reduce the boilerplate code.
 *
 * NOTE: Important! This hook returns a Promise and it must be awaited!
 */
import { useToast } from '@/components/ui/use-toast'
import { Errors, PageProps } from '@/types/inertia'
import { sleep } from '@/lib/utils'
import { router } from '@inertiajs/react'
import { Dispatch, SetStateAction, useState } from 'react'
import { UseFormReturn } from 'react-hook-form'

interface SubmitFunctionParams {
    // react-hook-form form instance
    form?: UseFormReturn<any>

    // request URL
    url: string

    // success request callback
    onSuccess?:
        | ((props: PageProps) => void)
        | ((props: PageProps) => Promise<void>)

    // failed request callback
    onError?: ((errors: Errors) => void) | ((errors: Errors) => Promise<void>)

    // fake delay for animation: when form submits too quickly user's not sure if anything happened
    delay?: boolean | number

    // sometimes user is redirected after form submission
    // in cases like this there's no need to stop the loading
    stopLoadingOnSuccess?: boolean

    // request method
    method?: 'get' | 'post' | 'put' | 'patch' | 'delete'

    // request payload
    data?: any

    // whether or not to reset the form on successful request
    resetFormOnSuccess?: boolean

    // slug: if there are multiple submit() calls, slug needed to differentiate them
    slug?: string

    // router options
    options?: {
        preserveScroll?: boolean
        preserveState?: boolean
    }
}

interface UseSubmitReturnType {
    submit: (args: SubmitFunctionParams) => Promise<void>
    isLoading: boolean
    setIsLoading: Dispatch<SetStateAction<boolean>>
    slug: string | undefined
    status: string | null
}

export function useSubmit(): UseSubmitReturnType {
    const [actionSlug, setActionSlug] = useState<string | undefined>(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [status, setStatus] = useState(null)

    const { toast } = useToast()

    async function submit({
        form,
        onSuccess,
        onError,
        delay = true,
        stopLoadingOnSuccess = true,
        method = 'get',
        url,
        data,
        resetFormOnSuccess = false,
        slug,
        options,
    }: SubmitFunctionParams) {
        slug && setActionSlug(slug)

        setIsLoading(true)

        if (isLoading) {
            return
        }

        // if number was passed, use it as a timeout
        if (delay) {
            await sleep(typeof delay === 'boolean' ? undefined : delay)
        }

        router[method](url, data ?? {}, {
            ...(options && options),
            // @ts-ignore: Couldn't properly type "onSuccess" callback
            onSuccess: async ({ props }: PageProps) => {
                // toast if flash.success is passed
                if (props.flash?.success) {
                    toast({
                        variant: 'success',
                        description: props.flash.success,
                    })
                }

                if (props.status) {
                    setStatus(props.status)
                }

                form && resetFormOnSuccess && form.reset()

                onSuccess && (await onSuccess(props))

                stopLoadingOnSuccess && setIsLoading(false)
            },
            onError: async (errors) => {
                if (form) {
                    for (const prop in errors) {
                        // @ts-ignore
                        form.setError(prop, { message: errors[prop] })
                    }
                }

                onError && (await onError(errors))
                setIsLoading(false)
            },
        })
    }

    return {
        submit,
        isLoading,
        setIsLoading,
        slug: actionSlug,
        status,
    }
}
