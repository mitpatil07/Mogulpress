import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/MP-Logo.png';

export default function MogulPressLanding() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white">
      {/* Navbar */}
      <nav className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-28">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img 
                  src={Logo}
                  alt="MAGNATES PRESS" 
                  className="h-12 lg:h-16"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
              <Link to="/" className="text-white text-sm font-medium tracking-wide hover:text-yellow-400 transition-colors">
                HOME
              </Link>
              <Link to="/about" className="text-white text-sm font-medium tracking-wide hover:text-yellow-400 transition-colors">
                ABOUT
              </Link>
              <a href="/contact-us" className="text-white text-sm font-medium tracking-wide hover:text-yellow-400 transition-colors">
                CONTACT
              </a>
              <a href="/press-media" className="text-white text-sm font-medium tracking-wide hover:text-yellow-400 transition-colors">
                PRESS/MEDIA
              </a>
              <a href="/CaseStudy" className="text-white text-sm font-medium tracking-wide hover:text-yellow-400 transition-colors">
                CASE STUDIES
              </a>
              <a href="/blog" className="text-white text-sm font-medium tracking-wide hover:text-yellow-400 transition-colors">
                BLOG
              </a>
              <a 
                href="contact-us-mp" 
                className="bg-yellow-400 text-black text-sm font-bold tracking-wide px-6 xl:px-8 py-3 xl:py-3.5 rounded hover:bg-yellow-500 transition-colors"
              >
                GET FEATURED
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
              aria-label="Toggle menu"
            >
              <span className={`w-8 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-8 h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-8 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="lg:hidden py-4 space-y-4 border-t border-gray-800">
              <Link to="/" className="block text-white text-sm font-medium tracking-wide hover:text-yellow-400 transition-colors py-2" onClick={() => setMenuOpen(false)}>
                HOME
              </Link>
              <Link to="/about" className="block text-white text-sm font-medium tracking-wide hover:text-yellow-400 transition-colors py-2" onClick={() => setMenuOpen(false)}>
                ABOUT
              </Link>
              <a href="/contact-us" className="block text-white text-sm font-medium tracking-wide hover:text-yellow-400 transition-colors py-2" onClick={() => setMenuOpen(false)}>
                CONTACT
              </a>
              <a href="/press-media" className="block text-white text-sm font-medium tracking-wide hover:text-yellow-400 transition-colors py-2" onClick={() => setMenuOpen(false)}>
                PRESS/MEDIA
              </a>
              <a href="/CaseStudy" className="block text-white text-sm font-medium tracking-wide hover:text-yellow-400 transition-colors py-2" onClick={() => setMenuOpen(false)}>
                CASE STUDIES
              </a>
              <a href="/blog" className="block text-white text-sm font-medium tracking-wide hover:text-yellow-400 transition-colors py-2" onClick={() => setMenuOpen(false)}>
                BLOG
              </a>
              <a 
                href="/contact-us-mp" 
                className="block bg-yellow-400 text-black text-sm font-bold tracking-wide px-6 py-3 rounded hover:bg-yellow-500 transition-colors text-center mt-4"
                onClick={() => setMenuOpen(false)}
              >
                GET FEATURED
              </a>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}