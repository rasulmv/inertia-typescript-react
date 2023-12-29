import DashboardLayout from '@/layouts/DashboardLayout'
import { ReactNode } from 'react'

export default function DashboardIndex() {
    return (
        <div>
            <p className="mt-3 text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deserunt quasi sit, totam saepe distinctio ex cupiditate culpa
                pariatur adipisci repellendus fugiat nobis, eveniet quis quidem
                nihil minima voluptas dolores consequuntur. Ea vel facere
                commodi eos rem quam sequi vitae totam earum minima unde
                obcaecati consequatur numquam soluta fugit, quod adipisci
                repudiandae nulla. Iste optio nobis obcaecati quia, omnis ab
                unde nihil dolore sapiente iure facere eum provident! Doloremque
                minima itaque nostrum? Minima, eius sunt? Totam distinctio
                tenetur debitis architecto quia, autem provident? Earum saepe
                neque placeat magni quaerat cum incidunt ex beatae facere?
                Voluptatum, voluptatem. Alias quam nemo est facere.
            </p>
        </div>
    )
}

DashboardIndex.layout = (page: ReactNode) => (
    <DashboardLayout metadata={{ title: 'Dashboard' }}>{page}</DashboardLayout>
)
