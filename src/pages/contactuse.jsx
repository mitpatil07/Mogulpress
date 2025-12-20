import React, { useState, useEffect } from 'react';

// --- SVG Icons ---
const FiMail = () => (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>);
const FiPhone = () => (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>);
const FiArrowUp = () => (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>);
const FaFacebookF = () => (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 320 512" fill="currentColor"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>);
const FaInstagram = () => (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 448 512" fill="currentColor"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37.2-2.1-147.9-2.1-185.1 0-35.9 1.7-67.7 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37.2-2.1 147.9 0 185.1 1.7 35.9 9.9 67.7 36.2 93.9 26.3 26.2 58 34.4 93.9 36.2 37.2 2.1 147.9 2.1 185.1 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37.2 2.1-147.8 0-185.1z" /></svg>);
const FaLinkedinIn = () => (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 448 512" fill="currentColor"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>);
const FaTwitter = () => (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" fill="currentColor"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.214 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>);

const ConnectCard = ({ icon, title, children }) => (
  <div className="flex flex-col items-center text-center">
    <div className="text-5xl text-[#dcb25c] mb-6">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>{title}</h3>
    <div>{children}</div>
  </div>
);

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="bg-white text-gray-800" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Section 1: Hero Header */}
      <header className="relative bg-black text-white text-center py-12 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://cdn.scoopempire.com/wp-content/uploads/2019/09/0-45.jpeg')" }}
        ></div>
        <div className="relative z-10 container mx-auto px-4">
          <p className="text-[#dcb25c] text-3xl tracking-widest mb-4">CONTACT US</p>
          <h1 className="text-4xl md:text-6xl font-extrabold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Interested in Working With Us?</h1>
          <p className="mt-6 text-xl md:text-3xl max-w-3xl mx-auto text-gray-200">
            We would be happy to set up a call, and discuss how we can help you take your brand to the next level!
          </p>
        </div>
      </header>

      {/* Section 2: Book A Call */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#dcb25c] font-bold tracking-widest mb-4">CONTACT US</p>
          <h2
            className="text-4xl md:text-5xl font-extrabold"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Book A Call Below
          </h2>

          <div className="mt-12 max-w-3xl mx-auto bg-white p-12 text-gray-800 rounded-lg relative overflow-hidden shadow-2xl">
            {/* Calendly inline widget */}
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/vivafox-media/strategy-session" 
              style={{ minWidth: '320px', height: '700px' }}
            ></div>
          </div>
        </div>
      </section>

      {/* Section 3: Let's Connect */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#dcb25c] text-xl tracking-widest mb-4">Endless Avenues Await</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Let's Connect and Explore Infinite Possibilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-16 max-w-5xl mx-auto">
            <ConnectCard icon={<FiMail />} title="Email Us">
              <a href="mailto:info@magnatespress.com" className="text-gray-500 hover:text-[#dcb25c] transition-colors">info@magnatespress.com</a>
            </ConnectCard>

            <ConnectCard icon={<div className="flex space-x-4 text-xl text-white">
              <a href="#" aria-label="Facebook" className="bg-[#3b5998] h-12 w-12 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"><FaFacebookF /></a>
              <a href="#" aria-label="Instagram" className="bg-gradient-to-bl from-[#833ab4] via-[#fd1d1d] to-[#fcb045] h-12 w-12 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn" className="bg-[#0077b5] h-12 w-12 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"><FaLinkedinIn /></a>
              <a href="#" aria-label="Twitter" className="bg-[#1da1f2] h-12 w-12 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"><FaTwitter /></a>
            </div>} title="Follow Us">
              <p className="text-gray-500">On our social accounts</p>
            </ConnectCard>

            <ConnectCard icon={<FiPhone />} title="Book A Call">
              <p className="text-gray-500">Let's schedule a Call</p>
            </ConnectCard>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button 
          onClick={scrollToTop} 
          aria-label="Scroll to top" 
          className="fixed bottom-5 right-5 bg-[#dcb25c] text-black h-12 w-12 rounded-md flex items-center justify-center shadow-lg hover:bg-[#c8a04a] transition-colors z-50"
        >
          <FiArrowUp />
        </button>
      )}
    </div>
  );
};

export default App;