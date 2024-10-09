import Image from 'next/image'
import { DollarSign, Hammer, TrendingUp, Brain } from 'lucide-react'

const features = [
  {
    icon: <DollarSign className="h-6 w-6 text-primary" />,
    title: "Instant ROI",
    description: "Start saving time and cutting costs from day one."
  },
  {
    icon: <Hammer className="h-6 w-6 text-primary" />,
    title: "Built for Builders",
    description: "Tools designed to solve real construction challenges, not generic software."
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-primary" />,
    title: "Grow Without the Growing Pains",
    description: "Take on more projects without ballooning your overhead."
  },
  {
    icon: <Brain className="h-6 w-6 text-primary" />,
    title: "Enhance Your Expertise",
    description: "Focus on craftsmanship while AI handles the time-consuming details."
  }
]

export default function Component() {
  return (
    <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="relative aspect-w-16 aspect-h-7 mb-8">
        <Image
          src="/placeholder.svg?height=400&width=800"
          alt="Construction site with AI overlay"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>

      <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-1">
          <h2 className="font-bold text-2xl md:text-3xl text-gray-800 dark:text-gray-200">
            Reclaim Your Time and Boost Your Bottom Line with AI
          </h2>
          <p className="mt-2 md:mt-4 text-gray-500 dark:text-gray-400">
            Constructiv AI empowers builders with cutting-edge tools that streamline operations, enhance productivity, and drive growth. Experience the future of construction management today.
          </p>
        </div>

        <div className="lg:col-span-2">
          <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-x-5">
                <div className="flex-shrink-0 mt-1">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
