import { Logo } from '@/components/common/Logo'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Link } from '@inertiajs/react'
import { IconChevronLeft, IconDashboard, IconUsers } from '@tabler/icons-react'
import { SidebarMenuItem } from './SidebarMenuItem'
import { SidebarMenuSection } from './SidebarMenuSection'

export const Sidebar = () => {
    return (
        <aside className="dark w-[300px] h-full border-r bg-zinc-900 dark:bg-card">
            {/* sidebar header */}
            <div className="h-[60px] border-b px-8">
                <div className="w-full h-full flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-3">
                        <Logo className="w-6 h-6 fill-foreground" />

                        <span className="font-semibold text-foreground">
                            Wave CRM
                        </span>
                    </Link>

                    <Button size="icon" variant="secondary">
                        <IconChevronLeft />
                    </Button>
                </div>
            </div>

            {/* sidebar body */}
            <ScrollArea className="h-full pt-5 px-4">
                <SidebarMenuSection label="menu">
                    <SidebarMenuItem href="/" Icon={IconDashboard}>
                        Dashboard
                    </SidebarMenuItem>

                    <SidebarMenuItem href="/" Icon={IconUsers}>
                        Users
                    </SidebarMenuItem>
                </SidebarMenuSection>
            </ScrollArea>
        </aside>
    )
}
