'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-deep-blue/95 backdrop-blur-sm text-soft-white py-4 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tight hover:text-vibrant-teal transition-colors">
          AIMarketing
        </Link>
        <nav className="hidden md:flex space-x-8">
          {['Home', 'Features', 'Pricing', 'About', 'Contact'].map((item) => (
            <Link
              key={item}
              href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
              className="hover:text-vibrant-teal transition-colors text-sm uppercase tracking-wider font-medium"
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border border-soft-white hover:bg-soft-white/10 text-soft-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
          >
            Sign In
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-vibrant-teal hover:bg-vibrant-teal/90 text-soft-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
          >
            Get Started
          </motion.button>
        </div>
        <button
          className="md:hidden text-soft-white p-2 hover:bg-soft-white/10 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-deep-blue/95 backdrop-blur-sm border-t border-soft-white/10"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              {['Home', 'Features', 'Pricing', 'About', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
                  className="hover:text-vibrant-teal transition-colors text-sm uppercase tracking-wider font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <button className="bg-transparent border border-soft-white hover:bg-soft-white/10 text-soft-white px-6 py-2 rounded-full text-sm font-medium transition-colors w-full">
                  Sign In
                </button>
                <button className="bg-vibrant-teal hover:bg-vibrant-teal/90 text-soft-white px-6 py-2 rounded-full text-sm font-medium transition-colors w-full">
                  Get Started
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
