/**
 * Layer needed to darken/blur the entire page when mobile menu is open.
 */
import { useHeaderContext } from '@/context/HeaderContext'

export const PageLayer = () => {
    const { isMobileMenuOpen, setMobileMenuOpen } = useHeaderContext()

    return (
        <div
            onClick={() => setMobileMenuOpen(false)}
            className="sm:hidden z-[21] absolute inset-0 w-full h-full bg-foreground/20 dark:bg-background/50"
            style={{
                opacity: isMobileMenuOpen ? 1 : 0,
                pointerEvents: isMobileMenuOpen ? 'all' : 'none',
            }}
        ></div>
    )
}
