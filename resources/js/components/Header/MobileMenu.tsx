import { useRoutes } from '@/hooks/use-routes'
import { MobileMenuItem } from './MobileMenuItem'
import { CircleUserIcon } from 'lucide-react'

export const MobileMenu = () => {
    const routes = useRoutes()

    return (
        <div className="sm:hidden absolute top-[60px] py-6 w-full bg-background border-b shadow">
            <div className="container">
                <div className="flex flex-col">
                    {routes.map(({ href, label, icon }) => (
                        <MobileMenuItem
                            key={href}
                            label={label}
                            href={href}
                            Icon={icon}
                        />
                    ))}

                    <MobileMenuItem
                        label="Sign In"
                        href="/login"
                        Icon={CircleUserIcon}
                    />
                </div>
            </div>
        </div>
    )
}
