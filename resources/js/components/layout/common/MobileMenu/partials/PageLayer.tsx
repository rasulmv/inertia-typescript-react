import { useMobileMenuContext } from '../context/mobile-menu-provider'

/**
 * This component needed to darken the entire page when mobile menu is open.
 */
export const PageLayer = () => {
    const { close, isOpen } = useMobileMenuContext()

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
