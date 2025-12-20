import React, { useState, useEffect } from 'react';

// --- SVG Icons ---
// Using inline SVGs to keep everything in one file and avoid external dependencies.

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#D1A82E]" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#D1A82E]" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
);

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96s4.46 9.96 9.96 9.96c5.5 0 9.96-4.46 9.96-9.96S17.5 2.04 12 2.04zm3.6 5.4h-2.1c-.55 0-.66.26-.66.65v.9h2.7l-.35 2.7h-2.35v6.9h-2.8V11.7H9.4v-2.7h1.4V7.6c0-1.4.86-2.2 2.14-2.2h1.86v2.44z"></path>
    </svg>
);
const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><path d="M17.5 6.5h.01"></path>
    </svg>
);
const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM8.5 18H6v-9h2.5v9zM7.25 7.75a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM18 18h-2.5v-4.5c0-1.08-.02-2.47-1.5-2.47s-1.73 1.18-1.73 2.39V18h-2.5V9H12v1.17h.03c.35-.66 1.2-1.33 2.37-1.33 2.54 0 3 1.67 3 3.85V18z"></path>
    </svg>
);
const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.49-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.58-.7-.02-1.37-.21-1.95-.53v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.94.07 4.28 4.28 0 004 2.98 8.52 8.52 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21c7.34 0 11.36-6.08 11.36-11.36 0-.17 0-.34-.01-.51.78-.56 1.45-1.26 1.99-2.06z"></path>
    </svg>
);


// --- Components ---

const HeroSection = () => {
  return (
    <section 
      className="relative bg-cover bg-center text-white py-20 md:py-32"
      style={{ backgroundImage: `url('https://cdn.scoopempire.com/wp-content/uploads/2019/09/0-45.jpeg')` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative container mx-auto text-center z-10 px-4 sm:px-6 lg:px-8">
        <p className="font-sans text-xl md:text-2xl text-[#D1A82E] uppercase tracking-widest mb-4">
          Contact Us
        </p>
        <h1 className="font-serif text-4xl md:text-6xl font-extrabold mb-4" style={{fontFamily: "'Montserrat', sans-serif"}}>
          Interested in Working With Us?
        </h1>
        <p className="font-sans text-lg md:text-2xl max-w-3xl mx-auto" style={{fontFamily: "'Open Sans', sans-serif"}}>
          We would be happy to set up a call, and discuss how we can help you take your brand to the next level!
        </p>
      </div>
    </section>
  );
};

const ContactForm = () => {
    // const [agreed, setAgreed] = useState(false);
    // return (
    //     // <section className="bg-[#F8F8F8] py-16 md:py-20 px-4 sm:px-6 lg:px-8">
    //     //     <div className="container mx-auto max-w-6xl">
    //     //         <div className="text-center mb-12">
    //     //             <p className="text-lg md:text-xl text-[#D1A82E] uppercase tracking-widest mb-4" style={{fontFamily: "'Montserrat', sans-serif"}}>
    //     //                 Tell us how we can help
    //     //             </p>
    //     //             <h2 className="text-3xl md:text-5xl font-extrabold text-black" style={{fontFamily: "'Montserrat', sans-serif"}}>
    //     //                 Unlock Your Media <br className="md:hidden" />
    //     //                 <span className="text-[#D1A82E] px-2 py-1"><br/>Potential with Us</span>
    //     //             </h2>
    //     //             <p className="text-base md:text-xl text-gray-600 mt-6 max-w-4xl mx-auto" style={{fontFamily: "'Open Sans', sans-serif"}}>
    //     //                 We love to work with individuals and companies who are looking to use the power of the media to take their business to the next level. Just book a call with us, and we can discuss about how we can help.
    //     //             </p>
    //     //         </div>
    //     //         <form className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{fontFamily: "'Open Sans', sans-serif"}}>
    //     //             <input type="text" placeholder="Your Name" className="p-4 bg-white border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-[#D1A82E] focus:border-transparent outline-none"/>
    //     //             <input type="email" placeholder="Your Email" className="p-4 bg-white border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-[#D1A82E] focus:border-transparent outline-none"/>
    //     //             <select className="p-4 bg-white border border-gray-300 rounded-md w-full text-gray-500 focus:ring-2 focus:ring-[#D1A82E] focus:border-transparent outline-none">
    //     //                 <option>Which service are you interested in</option>
    //     //                 <option>Public Relations</option>
    //     //                 <option>Featured Articles</option>
    //     //                 <option>Social Media Verification</option>
    //     //                 <option>Other</option>
    //     //             </select>
    //     //             <select className="p-4 bg-white border border-gray-300 rounded-md w-full text-gray-500 focus:ring-2 focus:ring-[#D1A82E] focus:border-transparent outline-none">
    //     //                 <option>What's Your Estimated Budget</option>
    //     //                 <option>$5,000 - $10,000</option>
    //     //                 <option>$10,000 - $20,000</option>
    //     //                 <option>$20,000+</option>
    //     //             </select>
    //     //             <input type="tel" placeholder="Your Phone (Optional)" className="p-4 bg-white border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-[#D1A82E] focus:border-transparent outline-none"/>
    //     //             <input type="text" placeholder="Your Company/Organization (Optional)" className="p-4 bg-white border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-[#D1A82E] focus:border-transparent outline-none"/>
    //     //             <textarea placeholder="Let us know a bit about your project" rows="6" className="md:col-span-2 p-4 bg-white border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-[#D1A82E] focus:border-transparent outline-none"></textarea>
    //     //             <div className="md:col-span-2 flex items-start space-x-3 text-xs sm:text-sm text-gray-500">
    //     //                 <input type="checkbox" id="agree" checked={agreed} onChange={() => setAgreed(!agreed)} className="mt-1 h-4 w-4 border-gray-300 rounded text-[#D1A82E] focus:ring-[#D1A82E] flex-shrink-0"/>
    //     //                 <label htmlFor="agree">
    //     //                     I agree to <a href="#" className="text-[#D1A82E] underline">Privacy Policy</a> and <a href="#" className="text-[#D1A82E] underline">Terms & Conditions</a> provided by the Magnates Press LLC. By providing my phone number, I agree to receive text messages from the business. I agree to receive marketing messaging from Magnates Press LLC at the phone number provided above. I understand I will receive 2 messages a month, data rates may apply, reply STOP to opt out
    //     //                 </label>
    //     //             </div>
    //     //             <div className="md:col-span-2 text-center mt-4">
    //     //                 <button type="submit" className="bg-[#D1A82E] text-black font-bold text-base md:text-lg py-3 px-8 md:py-4 md:px-12 rounded-md hover:bg-yellow-500 transition-colors duration-300 w-full sm:w-auto" style={{fontFamily: "'Montserrat', sans-serif"}}>
    //     //                     Let's Start a Conversation
    //     //                 </button>
    //     //             </div>
    //     //         </form>
    //     //     </div>
    //     // </section>
    // );
};

const BookingSection = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-[#D1A82E]">CONTACT US</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Book A Call Below
          </p>
        </div>

        {/* Calendly inline widget */}
        <div 
          className="calendly-inline-widget" 
          data-url="https://calendly.com/vivafox-media/strategy-session" 
          style={{ minWidth: '320px', height: '700px' }}
        ></div>
      </div>
    </div>
  );
};

// const BookingSection = () => {
//     return (
//         <section className="bg-black text-white py-20">
//         <div className="container mx-auto px-4 text-center">
//           <p className="text-[#dcb25c] font-bold tracking-widest mb-4">CONTACT US</p>
//           <h2
//             className="text-4xl md:text-5xl font-extrabold"
//             style={{ fontFamily: "'Montserrat', sans-serif" }}
//           >
//             Book A Call Below
//           </h2>

//           <div className="mt-12 max-w-3xl mx-auto bg-white p-12 text-gray-800 rounded-lg relative overflow-hidden shadow-2xl">
//             {/* ✅ Embedded LeadConnector Booking Calendar */}
//             <iframe
//               src="https://api.leadconnectorhq.com/widget/booking/cOKBSaoHIakdT7b5siL7"
//               style={{ width: "100%", border: "none", overflow: "hidden", height: "700px" }}
//               scrolling="no"
//               id="cOKBSaoHIakdT7b5siL7_1761844656719"
//               title="LeadConnector Booking"
//             ></iframe>

//             {/* ✅ External script for the widget */}
//             <script
//               src="https://link.msgsndr.com/js/form_embed.js"
//               type="text/javascript"
//             ></script>
//           </div>
//         </div>
//       </section>
//     );
// };

const ConnectSection = () => {
    return (
        <section className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto text-center">
                <p className="text-base md:text-sm font-bold text-[#D1A82E] uppercase tracking-widest mb-4" style={{fontFamily: "'Montserrat', sans-serif"}}>
                    Endless Avenues Await
                </p>
                <h2 className="text-3xl md:text-5xl font-extrabold mb-12 text-black" style={{fontFamily: "'Montserrat', sans-serif"}}>
                    Let's Connect and Explore Infinite Possibilities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-8 max-w-5xl mx-auto" style={{fontFamily: "'Open Sans', sans-serif"}}>
                    <div className="flex flex-col items-center">
                        <MailIcon />
                        <h3 className="text-2xl font-bold mt-4 mb-2 text-black" style={{fontFamily: "'Montserrat', sans-serif"}}>Email Us</h3>
                        <a href="mailto:info@magnatespress.com" className="text-gray-600 hover:text-[#D1A82E] break-all">info@magnatespress.com</a>
                    </div>
                    <div className="flex flex-col items-center">
                         <div className="flex space-x-4 items-center h-16">
                            <a href="#" className="text-pink-600 hover:opacity-80 transition-opacity"><InstagramIcon/></a>
                            <a href="#" className="text-blue-800 hover:opacity-80 transition-opacity"><FacebookIcon/></a>
                            <a href="#" className="text-blue-700 hover:opacity-80 transition-opacity"><LinkedinIcon/></a>
                            <a href="#" className="text-blue-500 hover:opacity-80 transition-opacity"><TwitterIcon/></a>
                        </div>
                        <h3 className="text-2xl font-bold mt-4 mb-2 text-black" style={{fontFamily: "'Montserrat', sans-serif"}}>Follow Us</h3>
                        <p className="text-gray-600">On our social accounts</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <PhoneIcon />
                        <h3 className="text-2xl font-bold mt-4 mb-2 text-black" style={{fontFamily: "'Montserrat', sans-serif"}}>Book A Call</h3>
                        <p className="text-gray-600">Let's schedule a Call</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-5 right-5 bg-[#D1A82E] text-black p-3 rounded-full shadow-lg transition-opacity duration-300 z-50 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            aria-label="Scroll to top"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
        </button>
    );
};

// --- Main App Component ---
export default function App() {
  return (
    <div className="bg-white">
      <main>
        <HeroSection />
        <ContactForm />
        <BookingSection />
        <ConnectSection />
      </main>
      <ScrollToTopButton />
    </div>
  );
}
