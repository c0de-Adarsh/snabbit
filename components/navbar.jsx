import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full top-0 z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          {/* Desktop Navigation - White Pill Box */}
          <div className="hidden md:flex">
            <div className="bg-white rounded-full px-8 py-3 shadow-lg">
              <div className="flex items-center space-x-8">
                <a href="#services" className="text-gray-600 hover:text-pink-500 font-medium transition-colors">
                  Services
                </a>
                <a href="#how-it-works" className="text-gray-600 hover:text-pink-500 font-medium transition-colors">
                  How it works
                </a>
                
                {/* Logo in center */}
                <div className="text-2xl font-bold text-pink-500 px-4">
                  Snabbit
                </div>
                
                <a href="#why-us" className="text-gray-600 hover:text-pink-500 font-medium transition-colors">
                  Why us?
                </a>
                <a href="#faqs" className="text-gray-600 hover:text-pink-500 font-medium transition-colors">
                  FAQs
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden w-full">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg flex items-center justify-between">
              <div className="text-xl font-bold text-pink-500">
                Snabbit
              </div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-pink-500"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="bg-white rounded-2xl px-6 py-4 shadow-lg space-y-2">
              <a href="#services" className="block px-4 py-2 text-gray-600 hover:text-pink-500 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                Services
              </a>
              <a href="#how-it-works" className="block px-4 py-2 text-gray-600 hover:text-pink-500 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                How it works
              </a>
              <a href="#why-us" className="block px-4 py-2 text-gray-600 hover:text-pink-500 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                Why us?
              </a>
              <a href="#faqs" className="block px-4 py-2 text-gray-600 hover:text-pink-500 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                FAQs
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}