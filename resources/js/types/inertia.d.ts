import { PageProps } from '@inertiajs/core'
import { Nullable } from '.'
import { UserEntity } from './entities/user.entity'

// extend InertiaJS props to match props in "HandleInertiaRequests.php"
interface PagePropsExtended extends PageProps {
    props: {
        user: UserEntity
        flash: {
            success: Nullable<string>
        }
        // this prop is not defined in HandleInertiaRequests file, but
        status?: Nullable<string>
    }
}

declare module '@inertiajs/react' {
    export function usePage(): PagePropsExtended
}
