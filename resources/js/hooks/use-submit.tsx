/**
 * A simple wrapper around Inertia & plain Axios requests to reduce the boilerplate code.
 *
 * NOTE: Important! This hook returns a Promise and it must be awaited!
 */
import { sleep } from '@/lib/utils'
import { PagePropsExtended } from '@/types/inertia'
import { router } from '@inertiajs/react'
import { Dispatch, SetStateAction, useState } from 'react'
import { FieldValues, Path, UseFormReturn } from 'react-hook-form'
import { toast } from 'sonner'

// making "T" optional because dependant form and data props are optional too
type SubmitFunctionParams<T extends FieldValues> = {
    // react-hook-form form instance
    form?: UseFormReturn<T>

    // request payload
    data?: T

    // request URL
    url: string

    // success request callback
    onSuccess?:
        | ((props: PagePropsExtended['props']) => void)
        | ((props: PagePropsExtended['props']) => Promise<void>)

    // failed request callback
    onError?:
        | ((errors: PagePropsExtended['errors']) => void)
        | ((errors: PagePropsExtended['errors']) => Promise<void>)

    // fake delay for animation: when form submits too quickly user's not sure if anything happened
    delay?: boolean | number

    // sometimes user is redirected after form submission
    // in cases like this there's no need to stop the loading
    stopLoadingOnSuccess?: boolean

    // request method
    method?: 'get' | 'post' | 'put' | 'patch' | 'delete'

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
    submit: <T extends FieldValues>(
        args: SubmitFunctionParams<T>,
    ) => Promise<void>
    isLoading: boolean
    setIsLoading: Dispatch<SetStateAction<boolean>>
    slug: string | undefined
}

export function useSubmit(): UseSubmitReturnType {
    const [actionSlug, setActionSlug] = useState<string | undefined>(undefined)
    const [isLoading, setIsLoading] = useState(false)

    async function submit<T extends FieldValues>({
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
    }: SubmitFunctionParams<T>) {
        slug && setActionSlug(slug)

        setIsLoading(true)

        if (isLoading) {
            return
        }

        if (delay) {
            // if number was passed, use it as a timeout argument
            // otherwise default timeout will be used
            await sleep(typeof delay === 'boolean' ? undefined : delay)
        }

        router[method](url, data ?? {}, {
            ...(options && options),
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            onSuccess: async ({
                props,
            }: {
                props: PagePropsExtended['props']
            }) => {
                if (props.flash.success) {
                    toast(props.flash.success)
                }

                if (form && resetFormOnSuccess) {
                    form.reset()
                }

                if (onSuccess) {
                    await onSuccess(props)
                }

                if (stopLoadingOnSuccess) {
                    setIsLoading(false)
                }
            },
            onError: async (errors) => {
                if (form) {
                    for (const prop in errors) {
                        form.setError(prop as Path<T>, {
                            message: errors[prop],
                        })
                    }
                }

                if (onError) {
                    await onError(errors)
                }

                setIsLoading(false)
            },
        })
    }

    return {
        submit,
        isLoading,
        setIsLoading,
        slug: actionSlug,
    }
}
