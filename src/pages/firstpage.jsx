
import React, { useState } from 'react';
import img1 from '../assets/logos/1.png'
import img2 from '../assets/logos/2.png'
import img3 from '../assets/logos/3.png'
import img4 from '../assets/logos/4.png'
import img5 from '../assets/logos/5.png'
import img6 from '../assets/logos/6.png'
import img7 from '../assets/logos/7.png'
import img8 from '../assets/logos/8.png'
import img9 from '../assets/logos/9.png'
import img10 from '../assets/logos/10.png'
import img11 from '../assets/logos/11.png'
import img12 from '../assets/logos/12.png'
import img13 from '../assets/logos/13.png'
import img14 from '../assets/logos/14.png'
import img15 from '../assets/logos/15.png'
import img16 from '../assets/logos/16.png'
// --- Global Styles & Font Imports ---
// const GlobalStyles = () => (
//     <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Poppins:wght@400;500;600;700&display=swap');

//         body {
//             font-family: 'Poppins', sans-serif;
//         }

//         h1, h2, h3, h4, h5, h6 {
//             font-family: 'Montserrat', sans-serif;
//         }
//     `}</style>
// );

// --- SVG Icons ---
const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#DDB32E] inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const PeopleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#DDB32E] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.122-1.28-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.122-1.28.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const DesktopIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#DDB32E] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const FolderIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#DDB32E] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    </svg>
);

const AwardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#DDB32E] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const RedCrossIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 inline-block mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const GreenTickIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 inline-block mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


// --- HOME PAGE COMPONENTS ---
const HeroSection = () => {
    return (
        <div className="relative bg-black text-white" style={{
            backgroundImage: `url('https://4111a3c0fefecefc5feb-6a9fe2ec286bb24c5c1033685b764080.ssl.cf1.rackcdn.com/forbes-magazine-covers-photographed-by-Eric-Millette.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 text-center">
                <h1 className="text-3xl md:text-5xl lg:text-5xl font-extrabold leading-tight mb-4 mt-3">
                    GET FEATURED On The World's Leading <br />Publications - Guaranteed
                </h1>
                <p className="text-2lg md:text-2xl font-bold max-w-3xl mx-auto mb-8 text-white-400">
                    ...So you can know what it's like to have your reputation backed by undeniable sources that fuel the attention you need to dominate your industry
                </p>
                <p className="max-w-5xl mx-auto mb-10 text-white-400">
                    Click Below to book a call and finally get the attention and recognition you need to dominate your industry now...
                </p>
                <a
  href="https://api.leadconnectorhq.com/widget/booking/cOKBSaoHIakdT7b5siL7"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#DDB32E] text-white text-4xl rounded-xs font-bold px-8 py-4 inline-block hover:bg-yellow-500 transition-transform transform hover:scale-105"
>
  YES! I'm Ready To Get Featured
</a>

            </div>
        </div>
    );
};

const StatsSection = () => {
    const stats = [
        { icon: <PeopleIcon size={64} strokeWidth={1.5} />, value: "1000+", label: "Happy Clients" },
        { icon: <DesktopIcon size={64} strokeWidth={1.5} />, value: "3000+", label: "Media Outlets" },
        { icon: <FolderIcon size={64} strokeWidth={1.5} />, value: "15,000+", label: "Articles Published" },
        { icon: <AwardIcon size={64} strokeWidth={1.5} />, value: "100%", label: "Satisfaction guaranteed" },
    ];

    return (
        <section className="bg-white py-16 md:py-8 lg:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h3 className="text-sm md:text-base font-semibold text-yellow-600 tracking-wide mb-4">
                    WHY Magnates Press?
                </h3>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-6 leading-tight">
                    What Makes us Different
                </h2>
                <p className="max-w-4xl mx-auto text-base md:text-lg text-gray-700 mb-16 md:mb-20 leading-relaxed px-4">
                    Magnates Press is an award-winning public relations and communications agency that specializes in{" "}
                    <span className="font-bold text-black">media placements</span>, personal branding, and marketing strategy.
                    We work with top entrepreneurs, influencers, and established companies to grow their media presence,
                    build strong brand credibility, and boost their business.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center justify-center space-y-4">
                            <div className="text-yellow-600 mb-2">{stat.icon}</div>
                            <p className="text-4xl md:text-5xl font-black text-black leading-none">{stat.value}</p>
                            <p className="text-base md:text-lg font-semibold text-gray-900 max-w-[180px]">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
const PublicationsSection = () => {
    const logoImages = [
        img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16
    ];

    return (
        <section className="bg-black text-white py-16 md:py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h3 className="text-xs md:text-sm font-bold text-[#DDB32E] tracking-widest mb-3">
                    PUBLICATIONS WE WORK VERY CLOSELY WITH
                </h3>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-12 md:mb-16 leading-tight max-w-5xl mx-auto">
                    Our Clients Are Consistently Featured On Some Of The Most – Elite Publications
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4 md:gap-y-10 md:gap-x-8 items-center justify-items-center max-w-6xl mx-auto">
                    {logoImages.map((logo, index) => (
                        <div
                            key={index}
                            className="flex justify-center items-center w-full h-12 md:h-16 opacity-90 hover:opacity-100 transition-opacity duration-300"
                        >
                            <img
                                src={logo}
                                alt={`Publication logo ${index + 1}`}
                                className="max-h-full max-w-full object-contain filter brightness-100"
                                style={{ width: 'auto', height: 'auto' }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};



const FeaturesSection = () => {
    const features = [
        {
            title: "Use PR to Create Undeniable Social Proof in Sales",
            description: "Most importantly, you will learn exactly how industry leaders like Gary Vaynerchuk, Kylie Jenner, and Grant Cardone use PR as their best-kept secret. You'll also learn how you can ‘skip the line’ so you can immediately begin capitalizing on the advantage press coverage has the power to provide."
        },
        {
            title: "Use Press Coverage To Skyrocket Profitability of Marketing Campaigns",
            description: "If you’ve ever felt like your marketing efforts are leaking profits, then PR may be your best, and quickest bet at plugging that leak for good, preventing your ads and content marketing from wasting any more time and money."
        },
        {
            title: "Create A Legacy That Lasts In Weeks Rather Than Decades",
            description: "Discover the exact steps that have helped 1,000 businesses and personal brands build a legacy that lasts by securing features inside major media outlets like Forbes, Entrepreneur, Fox News, The Huffington Post, Bloomberg, Business Insider, International Business Times, and Nasdaq, etc. (to name a few). This can be achieved without the wait, so you can start dominating your niche before your competition knows what hit them."
        }
    ];
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h3 className="text-xl font-bold text-[#DDB32E] tracking-widest mb-2">WHY Magnates Press?</h3>
                    <h2 className="text-5xl md:text-5xl font-extrabold text-black">Our Time Together Will Reveal How You Can:</h2>
                </div>
                <div className="max-w-6xl mx-auto space-y-8">
                    {features.map((feature, index) => (
                        <div key={index}>
                            <h4 className="text-2xl font-medium mb-2">
                                <CheckCircleIcon />
                                {feature.title}
                            </h4>
                            <p className="text-xl text-gray-600 ml-8 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


const FeaturedLogos = () => {


    const logos = [
        img1, img2, img3, img4, img5
    ];
    const shuffledLogos = [...logos].sort(() => Math.random() - 0.5);

    return (
        <div className="mt-16 text-center">
            <h3 className="text-lg font-bold text-white mb-8">FEATURED ON</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
                {shuffledLogos.map((logo, index) => (
                    <div key={index} className="grayscale hover:grayscale-0 transition-all">
                        <img
                            src={logo}
                            alt={`Publication logo ${index + 1}`}
                            className="h-10 md:h-16 w-auto object-contain filter brightness-0 invert"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Arjun Dhingra",
            title: "LEADING MORTGAGE AND REAL ESTATE CONSULTANT",
            quote: "I connected with Magnates Press to do a full-fledged PR campaign for me, and they completely exceeded my expectations, they got me featured in several amazing publications such as Bloomberg, Yahoo Business, and even membership in the Forbes Council. They really over-delivered, and several articles were great exposure pieces for me. Now I have a very strong and great media kit. I will highly recommend these guys to anybody. Highly recommended and highly appreciated.",
            videoUrl: "https://www.youtube.com/embed/aO4LJs3gwxM",
            videoId: "aO4LJs3gwxM"
        },
        {
            name: "Jeff Eiben",
            title: "FOUNDER RIVER POINT TECHNOLOGY",
            quote: "I want to give a big shoutout to Magnates Press. They helped me to get featured on Yahoo Finance, Bloomberg, International Business Time (Singapore), and a bunch of amazing news outlets, so my experience has been amazing. They over-delivered what they promised, and also, the team has been excellent.",
            videoUrl: "https://www.youtube.com/embed/F2C0btRktY4",
            videoId: "F2C0btRktY4"
        },
        {
            name: "Jeff Eiben",
            title: "FOUNDER RIVER POINT TECHNOLOGY",
            quote: "I recently authored a book in regard to our methodology and to promote that, I worked with Magnates Press who did a fantastic job of getting me publicity across some pretty high-end publications as well as some spots on TV. I was ultimately able to convey what we do, and how it works and promote my book. I am not typically a self-promoter or leverage self social media but Magnates Press helped with the whole process. I highly recommend them. Feel free to reach out if you want to discuss it further but Magnates Press did an awesome job for me and I thank them for that.",
            videoUrl: "https://www.youtube.com/embed/fy4PKA3cdW4",
            videoId: "fy4PKA3cdW4"
        },
        {
            name: "Zeroed-In Consulting",
            title: "LIFESTYLE AND SOCIAL MEDIA CONTENT CREATOR",
            quote: "As we started our PR journey, we didn't really know where to start. So coming across Magnates Press was great. They did a great job of helping us select a package of reasonably priced but high-impact publications and where we had some concerns about finding the right publications for our business being a bit more specialized. They did a great job of overdelivering and getting us on publications such as Yahoo Finance, and Bloomberg. Thank you so much for helping us along the way and giving us a great PR experience, we would highly recommend it.",
            videoUrl: "https://www.youtube.com/embed/F2C0btRktY4",
            videoId: "F2C0btRktY4"
        }
    ];

    const [activeVideo, setActiveVideo] = useState(null);

    return (
        <section className="bg-black text-white py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h3 className="text-sm font-bold text-[#DDB32E] tracking-widest mb-2">
                        OUR CLIENTS GET RESULTS
                    </h3>
                    <h2 className="text-3xl md:text-4xl font-extrabold">
                        Here's What Clients Have To Say
                    </h2>
                </div>

                <div className="space-y-20">
                    {testimonials.map((testimonial, index) => (
                        <div key={index}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div className="relative group">
                                    {activeVideo === index ? (
                                        <iframe
                                            className="w-full aspect-video rounded-lg"
                                            src={testimonial.videoUrl + "?autoplay=1"}
                                            title={`Testimonial from ${testimonial.name}`}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    ) : (
                                        <div
                                            onClick={() => setActiveVideo(index)}
                                            className="cursor-pointer relative rounded-lg overflow-hidden shadow-2xl"
                                        >
                                            <img
                                                src={`https://img.youtube.com/vi/${testimonial.videoId}/hqdefault.jpg`}
                                                alt={`Testimonial from ${testimonial.name}`}
                                                className="w-full aspect-video object-cover"
                                                onError={(e) => {
                                                    e.target.src = `https://img.youtube.com/vi/${testimonial.videoId}/0.jpg`;
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all">
                                                <div className="bg-red-600 rounded-full p-5 group-hover:scale-110 transition-transform shadow-2xl">
                                                    <svg
                                                        className="h-8 w-8 text-white ml-1"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M8 5v14l11-7z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold mb-1 flex items-center gap-2">
                                        <svg className="h-6 w-6 text-[#DDB32E]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm font-bold text-[#DDB32E] tracking-widest mb-4 ml-8">
                                        {testimonial.title}
                                    </p>
                                    <p className="text-gray-300 w-xl text-justify leading-relaxed">{testimonial.quote}</p>
                                </div>
                            </div>

                            <FeaturedLogos />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CaseStudiesSection = () => {
    const cases = [
        { name: "Arjun Dhingra", role: "Mortgage and Real Estate Consultant", img: "https://mogulpress.com/storage/2023/08/Arjun-1536x1026.png" },
        { name: "Walid Chaya", role: "Award-Winning Director & Actor", img: "https://mogulpress.com/storage/2023/08/2-1-1536x1026.png" },
        { name: "Justin Cao", role: "Successful Amazon FBA Mentor", img: "https://mogulpress.com/storage/2023/08/Justin-1536x1026.png" },
        { name: "Adam Gorly", role: "Mortgage and Real Estate Consultant", img: "https://mogulpress.com/storage/2023/09/4-1536x1026.jpg" },
        { name: "Henry Calyx", role: "Award-Winning Director & Actor", img: "https://mogulpress.com/storage/2023/09/5-1536x1026.jpg" },
        { name: "Tom Caravel", role: "Successful Amazon FBA Mentor", img: "https://mogulpress.com/storage/2023/09/6-1536x1026.jpg" },
    ];
    return (
        <section className="max-w-7xl mx-auto bg-white-50 py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h3 className="text-sm font-bold text-[#DDB32E] tracking-widest mb-2">REAL SUCCESS STORIES</h3>
                <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">Case Studies From Our Best Clients</h2>
                <p className="max-w-3xl mx-auto text-gray-600 mb-12 leading-relaxed">
                    Delve into compelling case studies featuring our esteemed clients. Witness firsthand the transformative strategies and remarkable outcomes that define our client relationships.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cases.map((c, i) => (
                        <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden group">
                            <img src={c.img} alt={c.name} className="w-full h-56 object-cover" />
                            <div className="p-6 text-left">
                                <h4 className="font-bold text-xl mb-1">{c.name}: <span className="font-normal">{c.role}</span></h4>
                                <a href="/CaseStudy" className="mt-4 inline-block bg-[#DDB32E] text-black text-sm font-bold px-8 py-3 rounded-md hover:bg-yellow-500 transition-colors">
                                    Read More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

import Forbeimg from '../assets/forbse-header.png';
const CtaSection = () => {
    return (
        <section className="bg-black pt-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 items-center">
                    <div>
                        <img src={Forbeimg} alt="Forbes Magazine Cover" className="rounded-lg shadow-2xl mx-auto" />
                    </div>
                    <div className="text-white">
                        <h3 className="text-sm font-bold text-[#DDB32E] tracking-widest mb-2">GET COVERAGE TODAY</h3>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Will You Be One Of The Few That Lets PR<br /> Generate The Attention For You?</h2>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Click Below to finally get the attention and recognition you need to dominate your industry.
                        </p>
                        <a
                            href="https://api.leadconnectorhq.com/widget/booking/cOKBSaoHIakdT7b5siL7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#DDB32E] text-black text-lg font-bold px-10 py-4 rounded-md hover:bg-yellow-500 transition-transform transform hover:scale-105 inline-block"
                        >
                            YES! I’m Ready To Get Featured
                        </a>

                    </div>
                </div>
            </div>
        </section>
    );
};

import post1 from '../assets/imge1.png'
import post2 from '../assets/img2.webp'
import post3 from '../assets/img3.png'

const BlogSection = () => {
    const posts = [
        { date: "APRIL 18, 2024", category: "PRESS RELEASE", title: "Magnates Press: Deep Dive Into The ROI Of Press Release Distribution Services", img: post1 },
        { date: "MARCH 8, 2024", category: "PUBLIC RELATIONS", title: "5 Innovative Public Relations Firms' Strategies For Tech Startups", img: post2 },
        //{ date: "JANUARY 15, 2024", category: "MARKETING", title: "Elevate Your Business: Marketing Tactics For Small Businesses", img: post3 },
    ];

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h3 className="text-xl font-bold text-[#DDB32E] tracking-widest mb-2">OUR BLOG</h3>
                <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-12">Unveiling the Power of Public Relations</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {posts.map((post, i) => (
                        <div key={i} className="group">
                            <div className="max-w-4xl  overflow-hidden rounded-lg mb-4">
                                <img src={post.img} alt={post.title} className="w-full h-56 object-cover" />
                                <div className="absolute top-0 right-0 bg-white p-4 transform -rotate-90 origin-top-right">
                                    <p className="text-xs font-bold tracking-widest whitespace-nowrap">{post.date}</p>
                                </div>
                            </div>
                            <p className="text-xs font-bold text-gray-500 mb-2">{post.category}</p>
                            <h4 className="text-xl font-bold text-black group-hover:text-[#DDB32E] transition-colors">{post.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const MissionSection = () => {
    const logos = [
        img3, img5, img7, img9, img11
    ];

    return (
        <section className="bg-gray-100 py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h3 className="text-sm font-bold text-yellow-600 tracking-widest mb-4">
                        OUR MISSION
                    </h3>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-8 flex items-center justify-center gap-3">
                        <svg className="h-10 w-10 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Behind Magnates Press
                    </h2>
                </div>

                <div className="max-w-5xl mx-auto text-center space-y-6 text-gray-800 text-lg leading-relaxed mb-16">
                    <p>
                        <span className="font-bold text-black">Magnates Press</span> is a PR firm that helps companies and individuals build visibility and credibility through media placements. As one of the leading PR agencies in the industry, our team has managed PR campaigns and media coverage for more than 1,000 clients.
                    </p>

                    <p>
                        We specialize in getting our clients featured in major publications like Forbes, Entrepreneur, Bloomberg, Business Insider, International Business Times, and Nasdaq, among others. <span className="font-bold text-black">Our services include media placements, contributor spots, TV interviews, and much more.</span> With our team's unmatched expertise and proven track record of success, we ensure that our clients get maximum exposure for their message.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-50">
                    {logos.map((logo, index) => (
                        <div key={index} className="grayscale hover:grayscale-0 transition-all">
                            <img
                                src={logo}
                                alt={`Publication logo ${index + 1}`}
                                className="h-8 md:h-12 w-auto object-contain filter brightness-0"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};


const ForWhomSection = () => {
    const notFor = [
        "You're noticing that you are being left behind in your industry, yet you are not willing to make the change to fix it.",
        "You don't have a story to share with the world and would rather keep yourself and your business private.",
        "You're looking to become famous overnight without following the prior steps our team will outline for you."
    ];
    const isFor = [
        "You are a serious or established entrepreneur with an inspiring story that you are ready to share.",
        "You are an action-taker who knows that a strategic approach to action is the key to winning big.",
        "You want long-term results that initiate a domino effect so you can continue to get on bigger and bigger media publications as you build up your PR portfolio."
    ];

    return (
        <section className="bg-black text-white py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h3 className="text-xl text-[#DDB32E] tracking-widest mb-4">THIS ISN'T FOR EVERYONE</h3>
                    <h2 className="text-3xl md:text-6xl font-extrabold">Do You Have What It Takes To Become <br /> An Industry Leader With PR?</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <div>
                        <h3 className="text-5xl font-bold mb-6 flex items-center"><RedCrossIcon />Who Is This Not For?</h3>
                        <ul className="space-y-4 ">
                            {notFor.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <RedCrossIcon />
                                    <span className="text-gray-400 text-xl">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-gray-800 p-8 rounded-lg">
                        <h3 className="text-5xl font-bold mb-6 flex items-center"><GreenTickIcon />Who Is This For?</h3>
                        <ul className="space-y-4">
                            {isFor.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <GreenTickIcon />
                                    <span className="text-gray-300 text-xl">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
                <div className="text-center mt-10">
                <a
  href="https://api.leadconnectorhq.com/widget/booking/cOKBSaoHIakdT7b5siL7"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#DDB32E] text-white text-4xl rounded-xs font-bold px-8 py-4 inline-block hover:bg-yellow-500 transition-transform transform hover:scale-105"
>
  YES! I'm Ready To Get Featured
</a>

                    <p className='mt-5 font-light text-xl font-grey-400' >Click above to finally get the attention and recognition you need to dominate your industry.</p>
                </div>

            </div>
        </section>
    );
};

const FaqSection = () => {
    const faqs = [
        {
            question: "What publications can you get me featured in?",
            answer: "We work with 100's of major publications, from top-tiers like Forbes, Entrepreneur Magazine, Yahoo News, Bloomberg, to many mid-tier publications as well."
        },
        {
            question: "Who is this suitable for?",
            answer: "We typically work with entrepreneurs and executives. However, our services are for anyone who is looking to grow their brand and be consistent in media because staying current in media is how you stay current in the world."
        },
        {
            question: "Is there a measurable ROI?",
            answer: "You get to become a credible, trusted source in your industry, which then opens doors and leads to opportunities that set you up for success. We position you in such a way where you can demand more money because you'll have credibility and a great reputation behind your name. And in this day and age, reputation is everything."
        },
        {
            question: "What makes your system better than the PR firm next door?",
            answer: "We give everyone a media dominance plan that is customized for THEM only and tailored to THEIR unique needs. We are able to control the narrative of your story, guarantee placements at half the cost, and move fast with very quick turnaround times and delivery rates. Plus, we live it every single day! This is exactly what we did for ourselves, now let us replicate it for you."
        }
    ];

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center mb-12">
                    <h3 className="text-xl  text-yellow-600 tracking-widest mb-2">HAVE QUESTIONS?</h3>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-black">Frequently Asked Questions</h2>
                </div>
                <div className="space-y-8">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-300 rounded-lg p-6">
                            <h3 className="font-bold text-black text-lg mb-4 flex items-start gap-3">
                                <svg className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                </svg>
                                {faq.question}
                            </h3>
                            <p className="text-gray-700 leading-relaxed pl-9">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default function HomePage() {
    return (
        <>
            <HeroSection />
            <StatsSection />
            <PublicationsSection />
            <FeaturesSection />
            <TestimonialsSection />
            <CaseStudiesSection />
            <CtaSection />
            <BlogSection />
            <MissionSection />
            <ForWhomSection />
            <FaqSection />
        </>
    )
}
