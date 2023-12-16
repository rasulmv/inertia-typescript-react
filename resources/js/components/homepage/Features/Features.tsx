import {
    AmpersandIcon,
    GaugeIcon,
    SmartphoneIcon,
    SunIcon,
    UserIcon,
} from 'lucide-react'
import { Feature } from './Feature'

export const Features = () => {
    return (
        <div className="py-10">
            <div className="container">
                <h2>Features</h2>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <Feature
                        title="Dark Mode Support"
                        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, totam!"
                        icon={<SunIcon />}
                    />

                    <Feature
                        title="Authorization"
                        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, totam!"
                        icon={<UserIcon />}
                    />

                    <Feature
                        title="Responsive"
                        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, totam!"
                        icon={<SmartphoneIcon />}
                    />

                    <Feature
                        title="Lighthouse Optimized"
                        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, totam!"
                        icon={<GaugeIcon />}
                    />

                    <Feature
                        title="Typography"
                        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, totam!"
                        icon={<AmpersandIcon />}
                    />
                </div>
            </div>
        </div>
    )
}
