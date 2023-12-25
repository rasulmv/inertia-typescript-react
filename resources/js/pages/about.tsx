import HomeLayout from '@/layouts/HomeLayout'
import { ReactNode } from 'react'

export default function About() {
    return (
        <div className="py-10 container flex flex-col">
            <h2 className="text-center sm:text-left">About Page</h2>

            <p className="mt-3 max-w-2xl text-lg text-muted-foreground text-center sm:text-left">
                It works!
            </p>
        </div>
    )
}

About.layout = (page: ReactNode) => (
    <HomeLayout children={page} metadata={{ title: 'About' }} />
)
