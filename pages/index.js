import { useState, useEffect } from 'react'
import Navbar from '../components/navbar'
import StarDecoration from '../components/StarDecoration'
import PhoneMockup from '../components/PhoneMockup'
import ServiceCard from '../components/ServiceCard'
import HowItWorks from '@/components/work'
import SnabbitHomepage from '@/components/card'
import Reviews from './review'
import FAQSECTION from './faqsection'
import Footer from '@/components/footer'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [showButtons, setShowButtons] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    const handleScroll = () => {
      setScrollY(window.scrollY)
      
      // Show buttons only when user scrolls past Services section
      const servicesSection = document.querySelector('[data-section="services"]')
      if (servicesSection) {
        const servicesSectionBottom = servicesSection.offsetTop + servicesSection.offsetHeight
        setShowButtons(window.scrollY > servicesSectionBottom)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  if (!mounted) {
    return <div className="min-h-screen bg-gray-100"></div>
  }

  const heroHeight = typeof window !== 'undefined' ? window.innerHeight : 800
  const phoneTransition = Math.min(scrollY / heroHeight, 1)
  
  return (
    <>
      <Navbar />
      
      {/* Floating Phone - Fixed Position - Hidden on Mobile */}
      {!isMobile && (
        <div 
          className="fixed z-30 transition-all duration-700 ease-out"
          style={{
            left: '50%',
            top: phoneTransition < 0.5 
              ? `${60 - (phoneTransition * 20)}%` 
              : `${50 - ((phoneTransition - 0.5) * 20)}%`,
            transform: `translateX(-50%) scale(${1 - (phoneTransition * 0.2)})`,
           opacity: scrollY > (heroHeight * 1.5) ? 0 : 1,
            display: scrollY > (heroHeight * 1.5) ? 'none' : 'block' 
          }}
        >
          <PhoneMockup />
        </div>
      )}
      
      {/* Hero Section */}
      <section className="bg-gray-50 min-h-screen  pt-16 relative overflow-hidden">
        {/* Background Decorations */}
        <StarDecoration className="top-20 left-10 text-pink-500" size="w-8 h-8" />
        <StarDecoration className="top-40 right-20 text-pink-400" size="w-6 h-6" />
        <StarDecoration className="bottom-20 left-20 text-pink-300" size="w-10 h-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <StarDecoration className="text-pink-500" size="w-12 h-12" />
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
              <span className="text-gray-800">INDIA'S FIRST</span>
              <br />
              <span className="text-pink-500 italic">QUICK</span>
              <span className="text-gray-800"> SERVICE APP</span>
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              On-demand home services to empower urban households
            </p>
            
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-2">
              <a 
                href="#" 
                className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                GET IT ON Google Play
              </a>
              <a 
                href="#" 
                className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                </svg>
                Download on the App Store
              </a>
            </div>
            
            {/* Hero Illustration */}
            <div className="relative z-30">
              {/* Desktop Layout - Show both cleaners and empty space for phone */}
              <div className="hidden md:flex flex-wrap justify-center items-end gap-8">
                {/* Service People Illustrations */}
                <div className="w-[390px] h-[400px] relative z-20">
                  <img src="/cleaner1.svg" alt="cleaner" className="w-full h-[650px] object-contain" />
                </div>
                
                {/* Empty space for floating phone */}
                <div className="w-64 h-40 flex items-center justify-center">
                  {/* Phone will float here */}
                </div>
                
                <div className="w-[390px] h-[400px] relative z-20">
                  <img src="/cleaner2.svg" alt="cleaner" className="w-full h-[550px] object-contain" />
                </div>
              </div>
              
              {/* Mobile Layout - Show only cleaner1 */}
              <div className="md:hidden flex justify-center items-end">
                <div className="w-[280px] h-[350px] relative z-20">
                  <img src="/cleaner1.svg" alt="cleaner" className="w-full h-[500px] object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section data-section="services" className="min-h-screen py-20 relative overflow-hidden z-10" style={{backgroundColor: '#5D0F36'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
              ONE BOOKING, <span className="text-[#FF2E6D] italic">MANY</span>
              <br />
              <span className="text-[#FF2E6D] italic">TASKS</span>
            </h2>
          </div>
          
          {/* Horizontal Scrolling Service Cards - Centered */}
          <div className="overflow-hidden relative z-10 flex items-center justify-center min-h-[400px]">
            <div className="flex animate-scroll-left gap-6 items-center">
              {/* First set of services */}
              <ServiceCard 
                title="Window Cleaning"
                image="https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=400"
                className="w-48 flex-shrink-0"
              />
              <ServiceCard 
                title="Kitchen Cleaning"
                image="https://images.pexels.com/photos/4239140/pexels-photo-4239140.jpeg?auto=compress&cs=tinysrgb&w=400"
                className="w-48 flex-shrink-0"
              />
              <ServiceCard 
                title="Dishwashing"
                image="https://images.pexels.com/photos/4239103/pexels-photo-4239103.jpeg?auto=compress&cs=tinysrgb&w=400"
                className="w-48 flex-shrink-0"
              />
              <ServiceCard 
                title="Laundry"
                image="https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?auto=compress&cs=tinysrgb&w=400"
                className="w-48 flex-shrink-0"
              />
              
              {/* Duplicate set for seamless loop */}
              <ServiceCard 
                title="Window Cleaning"
                image="https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=400"
                className="w-48 flex-shrink-0"
              />
              <ServiceCard 
                title="Kitchen Cleaning"
                image="https://images.pexels.com/photos/4239140/pexels-photo-4239140.jpeg?auto=compress&cs=tinysrgb&w=400"
                className="w-48 flex-shrink-0"
              />
              <ServiceCard 
                title="Dishwashing"
                image="https://images.pexels.com/photos/4239103/pexels-photo-4239103.jpeg?auto=compress&cs=tinysrgb&w=400"
                className="w-48 flex-shrink-0"
              />
              <ServiceCard 
                title="Laundry"
                image="https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?auto=compress&cs=tinysrgb&w=400"
                className="w-48 flex-shrink-0"
              />
              
              {/* Third set for seamless loop */}
              <ServiceCard 
                title="Window Cleaning"
                image="https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=400"
                className="w-48 flex-shrink-0"
              />
              <ServiceCard 
                title="Kitchen Cleaning"
                image="https://images.pexels.com/photos/4239140/pexels-photo-4239140.jpeg?auto=compress&cs=tinysrgb&w=400"
                className="w-48 flex-shrink-0"
              />
              <ServiceCard 
                title="Dishwashing"
                image="https://images.pexels.com/photos/4239103/pexels-photo-4239103.jpeg?auto=compress&cs=tinysrgb&w=400"
                className="w-48 flex-shrink-0"
              />
              <ServiceCard 
                title="Laundry"
                image="https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?auto=compress&cs=tinysrgb&w=400"
                className="w-48 flex-shrink-0"
              />
            </div>
          </div>
          

        </div>
      </section>
      
      <HowItWorks />
      <SnabbitHomepage />
      <Reviews />
      <FAQSECTION/>
      
      {/* Fixed Floating Buttons - Only show from footer onwards */}
      {/* Download Button - Left Side */}
      <div className="fixed bottom-8 left-8 z-40 hidden md:block">
        <div className="bg-white rounded-2xl p-6 shadow-2xl" style={{width: '320px'}}>
          <div className="flex items-center justify-between">
            {/* Left side text */}
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-800 mb-1 tracking-wide">
                DOWNLOAD THE
              </h3>
              <h2 className="text-3xl font-bold text-[#FF2E6D] mb-0">
                Snabbit
              </h2>
            </div>
            
            {/* Right side buttons */}
            <div className="flex flex-col gap-2 ml-4">
              <a 
                href="#" 
                className="block hover:transform hover:scale-105 transition-transform"
              >
                <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div>
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-sm font-bold">Google Play</div>
                  </div>
                </div>
              </a>
              <a 
                href="#" 
                className="block hover:transform hover:scale-105 transition-transform"
              >
                <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                  </svg>
                  <div>
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-bold">App Store</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Write to Us Button - Right Side */}
      <div className="fixed bottom-8 right-8 z-40">
        <button className="bg-white text-[#5D0F36] px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 font-medium">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Write to us
        </button>
      </div>
      
      <Footer/>
      
      {/* CSS Animation Styles */}
      <style jsx global>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
        }
        
        /* Pause animation on hover */
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  )
}