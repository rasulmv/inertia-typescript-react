export const Footer = () => {
    return (
        <footer className="border-t py-6">
            <div className="container">
                <div className="h-full flex space-y-4 items-center justify-between">
                    <p className="text-muted-foreground text-center">
                        Template by{' '}
                        <a
                            target="_blank"
                            href="https://github.com/rismailov"
                            className="text-foreground font-medium underline underline-offset-2 hover:no-underline"
                        >
                            rismailov
                        </a>
                        . Source code available on{' '}
                        <a
                            target="_blank"
                            href="https://github.com/rismailov/inertia-typescript-react"
                            className="text-foreground font-medium underline underline-offset-2 hover:no-underline"
                        >
                            Github
                        </a>
                        .
                    </p>
                </div>
            </div>
        </footer>
    )
}
