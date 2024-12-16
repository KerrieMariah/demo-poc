'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-deep-blue text-soft-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">AIMarketing</h3>
            <p className="text-sm">Transform your data into actionable strategies with our AI-powered marketing analytics platform.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-vibrant-teal transition-colors">Home</Link></li>
              <li><Link href="#features" className="hover:text-vibrant-teal transition-colors">Features</Link></li>
              <li><Link href="#pricing" className="hover:text-vibrant-teal transition-colors">Pricing</Link></li>
              <li><Link href="#about" className="hover:text-vibrant-teal transition-colors">About</Link></li>
              <li><Link href="#contact" className="hover:text-vibrant-teal transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm mb-2">123 AI Street, Tech City, 12345</p>
            <p className="text-sm mb-2">Phone: (123) 456-7890</p>
            <p className="text-sm">Email: info@aimarketing.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-sm mb-4">Stay updated with our latest features and news.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded bg-soft-white text-deep-blue"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-vibrant-teal text-soft-white px-4 py-2 rounded font-semibold"
                type="submit"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">&copy; 2023 AIMarketing. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-soft-white hover:text-vibrant-teal transition-colors">
              <Facebook />
            </a>
            <a href="#" className="text-soft-white hover:text-vibrant-teal transition-colors">
              <Twitter />
            </a>
            <a href="#" className="text-soft-white hover:text-vibrant-teal transition-colors">
              <LinkedIn />
            </a>
            <a href="#" className="text-soft-white hover:text-vibrant-teal transition-colors">
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

