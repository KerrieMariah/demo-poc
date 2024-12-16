'use client'

import { motion } from 'framer-motion'
import { BarChart, PieChart, TrendingUp } from 'lucide-react'

const features = [
  {
    title: 'Real-Time Data',
    description: 'Get instant insights with our real-time data processing capabilities.',
    icon: BarChart,
  },
  {
    title: 'Customizable Reports', 
    description: 'Create tailored reports that match your specific business needs.',
    icon: PieChart,
  },
  {
    title: 'Predictive Analysis',
    description: 'Forecast trends and make data-driven decisions with our AI-powered predictive analysis.',
    icon: TrendingUp,
  },
]

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-deep-blue to-soft-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-soft-white">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="bg-vibrant-teal/10 p-4 rounded-full w-fit mb-6">
                <feature.icon className="w-12 h-12 text-vibrant-teal" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-deep-blue">{feature.title}</h3>
              <p className="text-gray-700 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
