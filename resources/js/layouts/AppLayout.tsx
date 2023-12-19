/**
 * Root layout.
 */
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { MobileMenu } from '@/components/Header/MobileMenu'
import { useUIStore } from '@/store/ui.atom'
import { Head, usePage } from '@inertiajs/react'
import { PropsWithChildren } from 'react'

export default function AppLayout({
    children,
    title,
}: PropsWithChildren<{ title: string }>) {
    const isMobileMenuOpen = useUIStore((s) => s.isMobileMenuOpen)
    const setMobileMenuOpen = useUIStore((s) => s.setMobileMenuOpen)

    const { url } = usePage()

    return (
        <>
            {/* page title */}
            <Head title={title} />

            <div className="relative min-h-screen flex flex-col justify-between">
                {/* layer needed to darken/blur the entire page when mobile menu is open */}
                <div
                    onClick={() => setMobileMenuOpen(false)}
                    className="sm:hidden z-[21] absolute inset-0 w-full h-full bg-foreground/20 dark:bg-background/50"
                    style={{
                        opacity: isMobileMenuOpen ? 1 : 0,
                        pointerEvents: isMobileMenuOpen ? 'all' : 'none',
                    }}
                ></div>

                <Header />

                <MobileMenu />

                {/* 60px -> exact height of the header */}
                <main className="flex-1 pt-[60px]">{children}</main>

                {/* hide footer on auth and dashboard pages */}
                {!url.startsWith('/auth/') && !url.startsWith('/dashboard') && (
                    <Footer />
                )}
            </div>
        </>
    )
}
