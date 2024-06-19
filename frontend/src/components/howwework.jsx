import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, UserIcon, ArrowPathRoundedSquareIcon, UsersIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Direct Support:',
    description:
      'We provide tailored solutions and strategies to meet specific sectorial and organizational needs.',
    icon: UserIcon,
  },
  {
    name: 'Standby Partnership:',
    description: 'Maintaining an active surge capacity to support emergency responses globally.',
    icon: ArrowPathRoundedSquareIcon,
  },
  {
    name: 'Project Based:',
    description: 'Delivering services through cooperative agreements and direct grant support.',
    icon: ServerIcon,
  },
  {
    name: 'Multi-Actor Partnerships:',
    description: "Engaging in consortium's and projects that offer high-quality services through collaborative efforts.",
    icon: UsersIcon,
  },
]

export default function HowWeWork() {
  return (
    <div className="overflow-hidden bg-transparent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-blue-600">How We Work</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">A better workflow</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                WORLD DISASTER CENTER.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-100">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-green-400" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline text-gray-500">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://cdn.pixabay.com/photo/2024/04/18/10/09/globe-8704013_1280.jpg"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
