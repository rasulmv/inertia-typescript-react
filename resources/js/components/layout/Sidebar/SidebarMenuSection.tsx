import { PropsWithChildren } from 'react'

export const SidebarMenuSection = ({
    children,
    label,
}: PropsWithChildren<{ label: string }>) => {
    return (
        <div className="flex flex-col space-y-2">
            <p className="uppercase font-semibold text-muted-foreground/50 px-4">
                {label}
            </p>

            <div className="flex flex-col">{children}</div>
        </div>
    )
}
