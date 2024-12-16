'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, BarChart2, Users, TrendingUp } from 'lucide-react'

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-deep-blue to-deep-blue/95 text-soft-white min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <div className="inline-block bg-vibrant-teal/20 text-vibrant-teal px-4 py-2 rounded-full text-sm font-medium mb-6">
              #1 AI Marketing Platform
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Marketing with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-vibrant-teal to-teal-400">
                AI-Powered
              </span>{' '}
              Analytics
            </h1>
            <p className="text-xl text-soft-white/80 mb-8 leading-relaxed max-w-xl">
              Harness the power of artificial intelligence to unlock deep insights, predict trends, and supercharge your marketing ROI.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-vibrant-teal hover:bg-vibrant-teal/90 text-soft-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 shadow-lg shadow-vibrant-teal/25"
              >
                Start Free Trial <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-soft-white/10 hover:bg-soft-white/20 text-soft-white px-8 py-4 rounded-full text-lg font-semibold"
              >
                Watch Demo
              </motion.button>
            </div>
            <div className="flex gap-8">
              {[
                { icon: BarChart2, text: '30% Higher ROI' },
                { icon: Users, text: '10K+ Users' },
                { icon: TrendingUp, text: '24/7 Analytics' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <item.icon className="w-5 h-5 text-vibrant-teal" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-vibrant-teal/20 to-purple-500/20 rounded-xl blur-3xl" />
            <Image
              src="/dashboard.svg"
              alt="AI-Powered Marketing Analytics Dashboard"
              width={700}
              height={500}
              className="rounded-xl shadow-2xl relative hover:scale-105 transition-transform duration-500"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
