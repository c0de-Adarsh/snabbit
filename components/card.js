import React, { useState, useEffect, useRef } from 'react';
import { Star, CheckCircle, Calendar, X } from 'lucide-react';

export default function SnabbitHomepage() {
  const [isAnimated, setIsAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current; // Store current ref value
    
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isAnimated) {
          // Section visible hone par 1 second wait karna
          setTimeout(() => {
            setIsAnimated(true);
          }, 1000);
        }
      },
      {
        threshold: 0.3, // 30% section visible hone par trigger hoga
        rootMargin: '0px 0px -100px 0px' // Bottom se 100px pehle trigger hoga
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isAnimated]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white py-6 px-4 sm:px-4 lg:px-4">
        <div className="max-w-6xl mx-auto" ref={sectionRef}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14 relative">
            
            {/* Background Verified Experts */}
            <div 
              className={`text-center bg-white rounded-2xl shadow-lg p-2 transition-all duration-1000 ease-out ${
                isAnimated 
                  ? 'transform translate-x-0 translate-y-0 opacity-100' 
                  : 'transform translate-x-96 translate-y-96 opacity-0'
              }`}
              style={{
                transitionDelay: isAnimated ? '0.1s' : '0s'
              }}
            >
              <div className="relative mb-6 h-40">
                <img
                  src="/c1.png"
                  alt="Background Verified Experts"
                  className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Background Verified and Trusted Experts
              </h3>
            </div>
            
            {/* Professionally Trained */}
            <div 
              className={`text-center bg-white rounded-2xl shadow-lg p-6 transition-all duration-1000 ease-out ${
                isAnimated 
                  ? 'transform translate-x-0 translate-y-0 opacity-100' 
                  : 'transform translate-x-96 translate-y-96 opacity-0'
              }`}
              style={{
                transitionDelay: isAnimated ? '0.2s' : '0s'
              }}
            >
              <div className="relative mb-6 h-40">
                <img
                  src="/c2.svg"
                  alt="Professionally Trained"
                  className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Professionally Trained For Home Cleaning
              </h3>
            </div>
            
            {/* Freedom to Cancel */}
            <div 
              className={`text-center bg-white rounded-2xl shadow-lg p-6 transition-all duration-1000 ease-out ${
                isAnimated 
                  ? 'transform translate-x-0 translate-y-0 opacity-100' 
                  : 'transform translate-x-96 translate-y-96 opacity-0'
              }`}
              style={{
                transitionDelay: isAnimated ? '0.3s' : '0s'
              }}
            >
              <div className="relative mb-6 h-40">
                <img
                  src="/c3.svg"
                  alt="Freedom to Cancel"
                  className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Freedom to Cancel or Reschedule
              </h3>
            </div>
          </div>
          
          {/* Main Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              WHY CHOOSE <span className="text-pink-500">SNABBIT</span>
            </h1>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Powered By Strong Women */}
            <div 
              className={`text-center bg-white rounded-2xl shadow-lg p-6 transition-all duration-1000 ease-out ${
                isAnimated 
                  ? 'transform translate-x-0 translate-y-0 opacity-100' 
                  : 'transform translate-x-96 translate-y-96 opacity-0'
              }`}
              style={{
                transitionDelay: isAnimated ? '0.4s' : '0s'
              }}
            >
              <div className="relative mb-6 h-40">
                <img
                  src="/c4.png"
                  alt="Strong Women Workforce"
                  className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Powered By Strong Women Workforce
              </h3>
            </div>
            
            {/* Average Service Rating */}
            <div 
              className={`text-center bg-white rounded-2xl shadow-lg p-6 transition-all duration-1000 ease-out ${
                isAnimated 
                  ? 'transform translate-x-0 translate-y-0 opacity-100' 
                  : 'transform translate-x-96 translate-y-96 opacity-0'
              }`}
              style={{
                transitionDelay: isAnimated ? '0.5s' : '0s'
              }}
            >
              <div className="relative mb-6 h-40">
                <img
                  src="/c4.svg"
                  alt="Quality Service"
                  className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Quality You Can Trust
              </h3>
            </div>
            
            {/* Trusted By 6000+ Families */}
            <div 
              className={`text-center bg-white rounded-2xl shadow-lg p-6 transition-all duration-1000 ease-out ${
                isAnimated 
                  ? 'transform translate-x-0 translate-y-0 opacity-100' 
                  : 'transform translate-x-96 translate-y-96 opacity-0'
              }`}
              style={{
                transitionDelay: isAnimated ? '0.6s' : '0s'
              }}
            >
              <div className="relative mb-6 h-40">
                <img
                  src="/c6.svg"
                  alt="Trusted by Families"
                  className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Trusted By 6000+ Families
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}