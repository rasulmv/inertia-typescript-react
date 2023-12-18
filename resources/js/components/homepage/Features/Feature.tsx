import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

export const Feature = ({
    title,
    description,
    icon,
}: {
    title: string
    description: string
    icon: ReactNode
}) => {
    return (
        <div className="bg-card p-6 border rounded-xl flex flex-col">
            <div
                className={cn(
                    'self-start rounded-full w-9 h-9 flex items-center justify-center bg-foreground/5 [&>svg]:w-5 [&>svg]:h-5',
                )}
            >
                {icon}
            </div>

            <h4 className="ml-1 mt-4 mb-1">{title}</h4>

            <p className="ml-1 text-muted-foreground">{description}</p>
        </div>
    )
}
