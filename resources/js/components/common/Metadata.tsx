import { TMetadata } from '@/types'
import { Head } from '@inertiajs/react'

export const Metadata = ({ metadata }: { metadata: TMetadata }) => {
    return (
        <Head title={metadata.title}>
            {metadata.description && (
                <meta
                    head-key="description"
                    name="description"
                    content={metadata.description}
                />
            )}
        </Head>
    )
}
