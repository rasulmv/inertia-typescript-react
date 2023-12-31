import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'
import { IconLoader2 } from '@tabler/icons-react'

const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                default:
                    'bg-primary text-primary-foreground hover:bg-primary/90',
                destructive:
                    'bg-destructive text-destructive-foreground hover:bg-destructive/90 dark:bg-destructive/10 dark:text-destructive dark:hover:bg-destructive/20',
                outline:
                    'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
                secondary:
                    'bg-accent hover:bg-accent/80 dark:bg-primary/10 dark:text-primary dark:hover:bg-primary/20',
                ghost: 'hover:bg-accent hover:text-accent-foreground transition-none',
                link: 'text-primary underline-offset-2 underline hover:no-underline !h-auto !p-0',
            },
            size: {
                default: 'h-9 px-4 text-[0.91rem]',
                sm: 'h-8 rounded-md px-4',
                lg: 'h-10 rounded-md px-6 text-[0.925rem]',
                icon: 'h-9 w-9',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<
    HTMLButtonElement,
    ButtonProps & { isLoading?: boolean }
>(({ className, variant, size, asChild = false, isLoading, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
        <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            disabled={isLoading}
            {...props}
        >
            {isLoading ? (
                <IconLoader2 className="w-5 h-5 animate-spin" />
            ) : (
                props.children
            )}
        </Comp>
    )
})
Button.displayName = 'Button'

export { Button, buttonVariants }
