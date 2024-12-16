'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'John Doe',
    role: 'Marketing Director',
    company: 'Tech Co.',
    content: 'This AI-powered analytics tool has revolutionized our marketing strategy. We\'ve seen a 30% increase in ROI since implementing it.',
    image: '/placeholder.svg',
  },
  {
    name: 'Jane Smith',
    role: 'CEO',
    company: 'StartUp Inc.',
    content: 'The insights we\'ve gained from this platform have been invaluable. It\'s like having a team of data scientists at our fingertips.',
    image: '/placeholder.svg',
  },
  {
    name: 'Mike Johnson',
    role: 'Digital Marketing Manager',
    company: 'E-commerce Ltd.',
    content: 'The customizable reports and predictive analysis features have helped us stay ahead of market trends. Highly recommended!',
    image: '/placeholder.svg',
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-deep-blue text-soft-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white text-deep-blue p-6 rounded-lg shadow-lg max-w-2xl mx-auto"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonials[currentIndex].name}</h3>
                  <p className="text-gray-600">{testimonials[currentIndex].role}, {testimonials[currentIndex].company}</p>
                </div>
              </div>
              <p className="text-gray-800 italic">&ldquo;{testimonials[currentIndex].content}&rdquo;</p>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-vibrant-teal text-soft-white p-2 rounded-full"
            aria-label="Previous testimonial"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-vibrant-teal text-soft-white p-2 rounded-full"
            aria-label="Next testimonial"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

