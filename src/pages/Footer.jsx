import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <img 
              src="https://via.placeholder.com/150x40/000/DDB32E?text=MOGUL+PRESS"
              alt="MAGNATES PRESS" 
              className="h-8 sm:h-10 mb-4 sm:mb-6"
            />
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              Magnates Press is a public relations and communications agency specialized in media placements, personal branding, and marketing strategy.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#facebook" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#instagram" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#linkedin" className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#twitter" className="text-gray-300 hover:text-white transition-colors" aria-label="Twitter">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-base sm:text-lg font-bold mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="/about" className="text-gray-300 text-xs sm:text-sm hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/CaseStudy" className="text-gray-300 text-xs sm:text-sm hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/contact-us" className="text-gray-300 text-xs sm:text-sm hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/press-media" className="text-gray-300 text-xs sm:text-sm hover:text-white transition-colors">
                  Press/Media
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-white text-base sm:text-lg font-bold mb-4 sm:mb-6">Follow Us</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#facebook" className="text-gray-300 text-xs sm:text-sm hover:text-white transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#instagram" className="text-gray-300 text-xs sm:text-sm hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#linkedin" className="text-gray-300 text-xs sm:text-sm hover:text-white transition-colors">
                  Linkedin
                </a>
              </li>
              <li>
                <a href="#twitter" className="text-gray-300 text-xs sm:text-sm hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-white text-base sm:text-lg font-bold mb-4 sm:mb-6">Let's Scale Your Business</h3>
            <a 
              href="/contact-us-mp" 
              className="inline-block bg-yellow-400 text-black text-xs sm:text-sm font-bold tracking-wide px-6 sm:px-8 py-2.5 sm:py-3 rounded hover:bg-yellow-500 transition-colors"
            >
              GET FEATURED
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-gray-800">
          <div className="text-center mb-4 sm:mb-6">
            <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
              © 2025 Magnates Press LLC. All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
              <a href="/privacy-policy" className="text-gray-400 text-xs sm:text-sm hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a href="/terms-conditions" className="text-gray-400 text-xs sm:text-sm hover:text-white transition-colors">
                Terms of Use
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="text-center space-y-3 sm:space-y-4 px-2">
            <p className="text-gray-500 text-[10px] sm:text-xs leading-relaxed max-w-5xl mx-auto">
              *This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
            </p>
            <p className="text-gray-500 text-[10px] sm:text-xs leading-relaxed max-w-5xl mx-auto">
              Magnates Press is a public relations and communications agency specialized in media placements, personal branding, and marketing strategy. We do not offer any type of business opportunity, "get rich quick" scheme, or money-making strategy. We believe that education can better equip individuals to make financial decisions, but we cannot promise success in our programme. We make no profits claims, effort claims, or promises that our training will bring you money. All content is intellectual property and is copyrighted. Any form of replication, duplicate, or distribution is strictly prohibited.
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}