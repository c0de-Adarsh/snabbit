'use client';

export default function Footer() {
  return (
    <div className="bg-white pt-10">
    <footer className="bg-gradient-to-br bg-white from-[#5D0F36] via-[#5D0F36] to-[#5D0F36] relative overflow-hidden rounded-t-[3rem] ">
      {/* Decorative Stars */}
      <div className="absolute top-8 left-8">
        <div className="w-3 h-3 bg-pink-400 rotate-45 transform"></div>
      </div>
      <div className="absolute top-16 right-20">
        <div className="w-4 h-4 bg-pink-300 rotate-45 transform"></div>
      </div>
      <div className="absolute bottom-32 right-32">
        <div className="w-6 h-6 bg-pink-400 rotate-45 transform"></div>
      </div>
      <div className="absolute top-20 left-1/3">
        <div className="w-2 h-2 bg-pink-300 rotate-45 transform"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-16 text-center">
        {/* Main Heading */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            INDIA'S FIRST
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-pink-400 italic">QUICK</span>
            <span className="text-white"> SERVICE APP</span>
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-white text-lg md:text-xl mb-12 max-w-md mx-auto">
          On-demand home services to empower urban households
        </p>

        {/* App Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          {/* Google Play Button */}
          <div className="bg-black rounded-lg px-6 py-3 flex items-center space-x-3 hover:bg-gray-800 transition-colors cursor-pointer">
            <div className="text-white">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-300">GET IT ON</div>
              <div className="text-white font-semibold text-lg">Google Play</div>
            </div>
          </div>

          {/* App Store Button */}
          <div className="bg-black rounded-lg px-6 py-3 flex items-center space-x-3 hover:bg-gray-800 transition-colors cursor-pointer">
            <div className="text-white">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
              </svg>
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-300">Download on the</div>
              <div className="text-white font-semibold text-lg">App Store</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#5D0F36">
          {/* Copyright */}
          <div className="flex items-center text-white text-sm mb-4 md:mb-0">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3">
              <span className="text-purple-900 text-xs font-bold">©</span>
            </div>
            <span>2025 MaestroEdge Solutions Pvt. Ltd. All rights reserved.</span>
          </div>

          {/* Policy Links */}
          <div className="flex flex-wrap gap-6 text-white text-sm">
            <a href="#" className="hover:text-pink-300 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-pink-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-pink-300 transition-colors">Equal Opportunity Policy</a>
            <a href="#" className="hover:text-pink-300 transition-colors">Refund & Cancellation Policy</a>
          </div>
        </div>
      </div>

     <div className="hidden md:block h-[60%]">
  <img src="/ss.svg" className="md:h-[400px] h-[120px] opacity-25" />
</div>

    </footer>
    </div>
  );
}