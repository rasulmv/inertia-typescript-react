import { Nullable } from '.'
import { UserEntity } from './entities/user.entity'

// Inertia: making page props a little bit more type safe
type Errors = Record<string, string>
type ErrorBag = Record<string, Errors>
export type PageProps<T = {}> = T & {
    appName: string
    locale: 'en' | 'ru'
    user: Nullable<UserEntity>
    flash: {
        success: Nullable<string>
    }
    errors: Errors & ErrorBag
    status: Nullable<string>
}

export interface Page {
    component: string
    props: PageProps
    url: string
    version: string | null
    scrollRegions: Array<{
        top: number
        left: number
    }>
    rememberedState: Record<string, unknown>
    resolvedErrors: Errors
}

declare module '@inertiajs/react' {
    export function usePage(): Page
}
