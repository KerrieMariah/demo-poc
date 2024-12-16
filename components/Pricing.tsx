'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const pricingTiers = [
  {
    name: 'Basic',
    price: 49,
    features: [
      'Real-time data analytics',
      'Basic customizable reports',
      'Up to 10,000 data points/month',
      'Email support',
    ],
  },
  {
    name: 'Pro',
    price: 99,
    features: [
      'All Basic features',
      'Advanced customizable reports',
      'Predictive analysis',
      'Up to 100,000 data points/month',
      'Priority email & chat support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'All Pro features',
      'Unlimited data points',
      'Custom AI model training',
      'Dedicated account manager',
      '24/7 phone & email support',
    ],
  },
]

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-soft-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-4">{tier.name}</h3>
              <p className="text-4xl font-bold mb-6">
                {typeof tier.price === 'number' ? `$${tier.price}/mo` : tier.price}
              </p>
              <ul className="mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <Check className="w-5 h-5 text-vibrant-teal mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-deep-blue text-soft-white py-2 rounded-full font-semibold"
              >
                Choose Plan
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing

