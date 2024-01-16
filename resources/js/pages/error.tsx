import { Metadata } from '@/components/layout/common/Metadata'
import { MobileMenu } from '@/components/layout/common/MobileMenu'
import { Header } from '@/components/layout/guest/Header'
import { Button } from '@/components/ui/button'
import { useGuestLayoutStore } from '@/store/layouts/guest.store'
import { Link, usePage } from '@inertiajs/react'
import { IconArrowLeft } from '@tabler/icons-react'

export default function ErrorPage() {
    const { status, message } = usePage<{
        message: { title: string; description: string }
        status: number
    }>().props

    const { isMobileMenuOpen, setMobileMenuOpen } = useGuestLayoutStore(
        (s) => ({
            isMobileMenuOpen: s.isMobileMenuOpen,
            setMobileMenuOpen: s.setMobileMenuOpen,
        }),
    )

    return (
        <>
            <Metadata
                metadata={{
                    title: `Whoops! ${message.title}`,
                }}
            />

            <div className="relative min-h-screen flex flex-col justify-between">
                <Header />

                <MobileMenu
                    isOpen={isMobileMenuOpen}
                    close={() => setMobileMenuOpen(false)}
                />

                <main className="flex-1">
                    <div className="container h-[calc(100vh-60px)]">
                        <div className="h-full py-28 flex items-center flex-col lg:flex-row lg:justify-between">
                            <div className="flex flex-col items-center lg:items-start">
                                <h1>{message.title}</h1>

                                <p className="mt-2 md:mt-3 text-xl max-w-lg text-muted-foreground text-center lg:text-start">
                                    {message.description}
                                </p>

                                <div className="mt-6 lg:mt-10 flex items-center space-x-4">
                                    <Button
                                        size="lg"
                                        className="items-center"
                                        onClick={() => window.history.back()}
                                    >
                                        <IconArrowLeft className="w-5 h-5 mr-2 -ml-1" />

                                        <span>Go Back</span>
                                    </Button>

                                    <Button
                                        size="lg"
                                        variant="secondary"
                                        asChild
                                    >
                                        <Link href={route('homepage')}>
                                            Go To Homepage
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            <h1 className="mt-24 sm:mt-32 md:mt-36 lg:mt-0 text-[10rem] sm:text-[13rem] xl:text-[20rem] text-foreground/10">
                                {status}
                            </h1>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
