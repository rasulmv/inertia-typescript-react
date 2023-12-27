import {
    IconAmpersand,
    IconGauge,
    IconPhone,
    IconSun,
    IconUser,
} from '@tabler/icons-react'
import { Feature } from './Feature'

export const Features = () => {
    return (
        <div className="pt-10 pb-16">
            <div className="container">
                <h2>Features</h2>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <Feature
                        title="Dark Mode Support"
                        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, totam!"
                        icon={<IconSun />}
                    />

                    <Feature
                        title="Authorization"
                        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, totam!"
                        icon={<IconUser />}
                    />

                    <Feature
                        title="Responsive"
                        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, totam!"
                        icon={<IconPhone />}
                    />

                    <Feature
                        title="Lighthouse Optimized"
                        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, totam!"
                        icon={<IconGauge />}
                    />

                    <Feature
                        title="Typography"
                        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, totam!"
                        icon={<IconAmpersand />}
                    />
                </div>
            </div>
        </div>
    )
}
