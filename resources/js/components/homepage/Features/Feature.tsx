import React from 'react'

export const Feature = ({
    title,
    description,
    Icon,
}: {
    title: string
    description: string
    Icon: React.ElementType
}) => {
    return (
        <div className="p-6 rounded-xl flex flex-col border dark:border-none bg-card">
            <div className="rounded-full w-9 h-9 flex items-center justify-center bg-brand/10">
                <Icon className="w-5 h-5 text-brand" />
            </div>

            <p className="ml-1 mt-4 mb-1 text-xl font-semibold">{title}</p>

            <p className="ml-1 text-muted-foreground">{description}</p>
        </div>
    )
}
