import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { useTheme } from '@/context/theme-provider'

export function ThemeSwitcher() {
    const { theme, setTheme } = useTheme()

    return (
        <Button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            variant="ghost"
            size="icon"
            className="[&>svg]:w-5 [&>svg]:h-5"
        >
            {theme === 'light' ? <Moon /> : <Sun />}
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
