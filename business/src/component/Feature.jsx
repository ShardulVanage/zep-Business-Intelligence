import {
    CreditCardIcon,
    InboxStackIcon,
    ChatBubbleLeftRightIcon,
    ViewfinderCircleIcon,
    AcademicCapIcon,
    PhotoIcon,
} from '@heroicons/react/20/solid'
import { motion } from "framer-motion"

const features = [
    {
        name: 'Self Paced Program with 24X7 Support.',
        description: 'Learn the program at your own pace',
        icon: InboxStackIcon,
    },
    {
        name: 'Course Completion Certificate',
        description: 'Get yourself certified after completition of the course.',
        icon: AcademicCapIcon,
    },
    {
        name: 'Internship Certificate ',
        description: 'Get a score of 80% in the assignments and you will be handed over an internship offer.',
        icon: CreditCardIcon,
    },
    {
        name: 'Class Recordings.',
        description: 'Unlimited Hassle Free Access',
        icon: ViewfinderCircleIcon,
    },
    {
        name: ' 24X7 chat support ',
        description: 'Get unlimited chat support from our experts ',
        icon: ChatBubbleLeftRightIcon,
    },
    {
        name: 'Project Based Learning with Intense Knowledge',
        description: 'Learn the skills by developing different projects throughout the sessions. ',
        icon: PhotoIcon,
    },
]
const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
}
const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
}
export default function Feature() {

    return (
        <div className="bg-gray-900  py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-semibold leading-8 tracking-tight text-[#85a0e1]">Features of the course</h2>

                    <p className="mt-6 text-lg text-center leading-8 text-gray-300 ">
                        The best business intelligence course in India provides a wide range of features to equip you with the knowledge
                        and abilities required to succeed and prepare you for a variety of positions in the industry.
                    </p>
                </div>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="visible" className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                    {features.map((feature) => (
                        <motion.div variants={item} key={feature.name} className="relative pl-9">
                            <dt className="inline font-semibold text-white">
                                <feature.icon className="absolute top-1 left-1 h-5 w-5 text-[#85a0e1]" aria-hidden="true" />
                                {feature.name}
                            </dt>{' '}
                            <dd className="inline">{feature.description}</dd>
                        </motion.div>
                    ))}
                </dl>
            </motion.div>
        </div>
    )
}
