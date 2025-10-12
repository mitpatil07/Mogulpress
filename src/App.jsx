import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import About from './pages/Aboutpage'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
import HomePage from './pages/firstpage'
import Contact from './pages/contact'
import Contact_us from './pages/contactuse'
import CaseStudy from './pages/CaseStudy'
import Blogpage from './pages/blog'
import Pressdata from './pages/pressData'
import Privacypolicy from './pages/Privacy-policy'
import Terms from './pages/Terms'


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/contact-us-mp" element={<Contact_us />} />
        <Route path="/CaseStudy" element={<CaseStudy />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/press-media" element={<Pressdata />} />
        <Route path="/privacy-policy" element={<Privacypolicy />} />
        <Route path="/terms-conditions" element={<Terms />} />

        
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App