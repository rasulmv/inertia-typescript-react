import { cn } from '@/lib/utils'
import { Nullable } from '@/types'
import { InertiaLinkProps, Link } from '@inertiajs/react'
import { IconX } from '@tabler/icons-react'
import {
    PropsWithChildren,
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useRef,
} from 'react'
import { Button } from '../ui/button'
import { Logo } from './Logo'

const MobileMenuContext = createContext({
    isOpen: false,
    close: () => {},
})

export default function MobileMenu({
    children,
    isOpen,
    close,
}: PropsWithChildren<{
    isOpen: boolean
    close: () => void
}>) {
    /**
     * Close mobile menu when any link or button gets clicked.
     *
     * I'm using this global listener instead of a granular "onClick" on subcomponents,
     * because in dashboards <SidebarInner /> gets passed into <MobileMenu.Body />
     * and it would be too much of a hassle to add conditional props just for this.
     *
     * If the mobile menu is going to have an interactive button which is not a link, this
     * logic will be no longer useful and this component will be refactored, but for now it will do
     */
    const rootRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        let links: Nullable<NodeListOf<HTMLAnchorElement>> = null

        if (rootRef.current) {
            links = rootRef.current.querySelectorAll('a, button')
        }

        if (links) {
            links.forEach((link) => link.addEventListener('click', close))
        }

        return () => {
            if (links) {
                links.forEach((link) =>
                    link.removeEventListener('click', close),
                )
            }
        }
    }, [close])

    return (
        <MobileMenuContext.Provider value={{ isOpen, close }}>
            <PageLayer />

            <div
                ref={rootRef}
                className="lg:hidden z-30 fixed top-0 bottom-0 right-0 w-[300px] h-screen flex flex-col bg-background border-l will-change-transform transition-transform duration-300"
                style={{
                    transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
                }}
            >
                {children}
            </div>
        </MobileMenuContext.Provider>
    )
}

function Header({
    children,
    className,
}: {
    children?: ReactNode
    className?: string
}) {
    return (
        <div
            className={cn(
                'h-[60px] flex items-center justify-between px-6 border-b',
                className,
            )}
        >
            {/* left side */}
            {/* show logo by default, but can be replaced with anything */}
            {children ?? (
                <Link href="/" aria-label="Visit homepage">
                    <Logo />
                </Link>
            )}

            {/* right side */}
            <Button
                // NOTE: don't need the onClick handler here because of the root event listener
                // onClick={close}
                size="icon"
                variant="ghost"
                aria-label="Close mobile menu"
            >
                <IconX className="w-6 h-6" />
            </Button>
        </div>
    )
}

function Body({
    children,
    className,
}: PropsWithChildren<{ className?: string }>) {
    return (
        <div className={cn('flex-1 py-4 px-6 flex flex-col', className)}>
            {children}
        </div>
    )
}

function Footer({ children }: PropsWithChildren) {
    return <div className="py-6 px-6 border-t">{children}</div>
}

function Item({
    isActive,
    className,
    ...rest
}: InertiaLinkProps & { isActive?: boolean }) {
    return (
        <Link
            {...rest}
            className={cn(
                'w-full flex items-center justify-between space-x-4 py-1.5 text-xl font-medium [&>svg]:w-5 [&>svg]:h-5',
                isActive ? 'text-foreground' : 'text-muted-foreground/80',
                className,
            )}
        />
    )
}

function PageLayer() {
    const { close, isOpen } = useContext(MobileMenuContext)

    return (
        <div
            onClick={close}
            className="lg:hidden z-[21] absolute inset-0 w-full h-full bg-foreground/20 dark:bg-background/50 transition-all"
            style={{
                opacity: isOpen ? 1 : 0,
                pointerEvents: isOpen ? 'all' : 'none',
            }}
        ></div>
    )
}

MobileMenu.Header = Header
MobileMenu.Body = Body
MobileMenu.Footer = Footer
MobileMenu.Item = Item
