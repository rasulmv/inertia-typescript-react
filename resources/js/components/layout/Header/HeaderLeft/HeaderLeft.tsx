import { Suspense, lazy } from 'react'

const HeaderLeftDefault = lazy(() =>
    import('./HeaderLeftDefault').then(({ HeaderLeftDefault }) => ({
        default: HeaderLeftDefault,
    })),
)

const HeaderLeftDashboard = lazy(() =>
    import('./HeaderLeftDashboard').then(({ HeaderLeftDashboard }) => ({
        default: HeaderLeftDashboard,
    })),
)

export const HeaderLeft = ({ isDashboard }: { isDashboard: boolean }) => {
    return (
        <div className="flex items-center">
            <Suspense fallback={<></>}>
                {isDashboard ? <HeaderLeftDashboard /> : <HeaderLeftDefault />}
            </Suspense>
        </div>
    )
}
