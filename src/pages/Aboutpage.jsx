import React from 'react';
import Logosimg from '../assets/multilogos.png'
const AboutHeroSection = () => {
    return (
        <div className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: `url('https://4111a3c0fefecefc5feb-6a9fe2ec286bb24c5c1033685b764080.ssl.cf1.rackcdn.com/forbes-magazine-covers-photographed-by-Eric-Millette.jpg')`,
                    opacity: '0.5'
                }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black opacity-80 z-10"></div>

            {/* Content Container */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 text-center">
                {/* Press/Media Label */}
                <div className="mb-6 sm:mb-8">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-wider text-yellow-500">
                        PRESS/MEDIA
                    </p>
                </div>

                {/* Main Headline */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6 md:mb-8 px-2 sm:px-4">
                    Mogul Press
                </h1>

                {/* Subheading */}
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 mb-8 sm:mb-12 md:mb-16 max-w-4xl mx-auto px-2 sm:px-4">
                    Mogul Press, a powerhouse public relations firm in the USA, we've been driving transformative success for more than four years. With an illustrious track record of empowering 1000+ clients, we help brands establish unrivaled authority within their industries.
                </p>

                {/* As Seen In Label */}
                <div className="mb-6 sm:mb-8 md:mb-12">
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white mb-6 sm:mb-8 md:mb-12">
                        FEATURED ON
                    </p>
                </div>

                {/* Media Logos Grid */}
                <div className=" items-center justify-items-center max-w-8xl mx-auto px-2 sm:px-4">
                    <img src={Logosimg} alt="Forbes" className="h-90 sm:h-full object-contain" />
                </div>
            </div>
        </div>
    );
};

const ProcessSection = () => {
    const steps = [
        {
            icon: "fa-users",
            title: "CONSULTATION",
            description: "Together, we'll go through a series of questions to verify that we are the right fit for each other, after that We discuss our targets and goals to be achieved"
        },
        {
            icon: "fa-road",
            title: "ROADMAP TO SUCCESS",
            description: "Based on your specific needs, we'll build out a roadmap of publications, a timeline, and a trajectory for success that will best elevate your digital authority."
        },
        {
            icon: "fa-user-cog",
            title: "GET TO WORK",
            description: "We will send you the questionnaire that we leverage to craft your content. Then, once you approve the articles, we send them out for publication!"
        }
    ];

    return (
        <section className="bg-white py-12 sm:py-16 md:py-20 font-sans">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h3 className="text-base sm:text-lg md:text-xl font-bold tracking-widest mb-3 sm:mb-4" style={{color: '#DDB32E'}}>HOW WE DO IT</h3>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mb-4 sm:mb-6 px-2">Our Process</h2>
                <p className="max-w-3xl mx-auto text-gray-600 mb-10 sm:mb-12 md:mb-16 text-base sm:text-lg leading-relaxed px-2">Empowering Your Digital Journey: Guiding you towards amplified online influence through tailored strategies and impactful content.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
                    {steps.map(step => (
                        <div key={step.title} className="flex flex-col items-center px-4">
                            <i className={`fas ${step.icon} text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-6`} style={{color: '#DDB32E'}}></i>
                            <h4 className="text-xl sm:text-2xl font-bold text-black mb-2 sm:mb-3">{step.title}</h4>
                            <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
import ibt from "../assets/About/ibt.png";

const MediaImpactSection = () => {
    return (
        <section className="bg-black text-white py-12 sm:py-16 md:py-20 font-sans">
             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                     <h3 className="text-base sm:text-lg md:text-xl tracking-widest mb-3 sm:mb-4 px-2" style={{color: '#DDB32E'}}>OUR MEDIA FEATURES</h3>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight px-2">Ranked #1 by International Business Times<br className="hidden sm:block"/> as the top PR agency of 2022</h2>
                    <p className="max-w-5xl mx-auto text-white mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed px-2">Discover how our commitment to excellence led us to be honored as the top PR agency of 2022 by International Business Times. Dive into our journey of accomplishments that have garnered attention and trust across the industry.</p>
                </div>
                <div className="max-w-5xl mx-auto bg-white p-2 sm:p-3 md:p-4 rounded-lg">
                    <img src={ibt} alt="International Business Times Ranking" className="w-full rounded-md shadow-lg" />
                </div>
             </div>
        </section>
    );
};

const MediaFeaturesSection = () => {
    const features = [
        {
            icon: "fa-unlock-alt",
            title: "Unlocking Media Impact",
            description: "With our expert team of writers and media experts, we secure you hard-hitting coverage in the publications and on the platforms that matter."
        },
        {
            icon: "fa-crosshairs",
            title: "Where Data Meets Creativity",
            description: "We combine the science of data with the art of communications to deliver targeted, measurable and engaging PR campaigns."
        },
        {
            icon: "fa-photo-video",
            title: "Seamless Multi-Channel Reach",
            description: "We offer multi-channel communications services across online media, video, and audio. We get your message to the right people, in the right way, at the right time."
        }
    ];

    return (
        <section className="bg-white py-12 sm:py-16 md:py-20 font-sans">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h3 className="text-base sm:text-lg md:text-xl tracking-widest mb-3 sm:mb-4 px-2" style={{color: '#DDB32E'}}>OUR MEDIA FEATURES</h3>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mb-4 sm:mb-6 px-2">Discover Our Media Impact Strategies</h2>
                <p className="max-w-5xl mx-auto text-gray-600 mb-10 sm:mb-12 md:mb-16 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed px-2">Harness the prowess of our skilled writers and media specialists to secure impactful coverage in pivotal publications and platforms.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
                    {features.map(feature => (
                        <div key={feature.title} className="flex flex-col items-center px-4">
                            <i className={`fas ${feature.icon} text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-6`} style={{color: '#DDB32E'}}></i>
                            <h4 className="text-xl sm:text-2xl font-bold text-black mb-2 sm:mb-3">{feature.title}</h4>
                            <p className="text-gray-600 leading-relaxed text-base sm:text-lg md:text-xl">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const WhyUsSection = () => {
    return (
         <section className="bg-white py-8 sm:py-12 md:py-16 font-sans">
             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <img src="https://mogulpress.com/storage/elementor/thumbs/Hero-Image-01-qbo6rxyx0954zt4yqa4vmnngc8qlngdfmj7uy3qbi2.png" alt="Forbes Magazine Cover" className="rounded-lg shadow-2xl mx-auto w-full max-w-full md:max-w-lg"/>
                    </div>
                    <div className="order-1 md:order-2 px-2">
                         <h3 className="text-base sm:text-lg md:text-xl font-bold tracking-widest mb-3 sm:mb-4" style={{color: '#DDB32E'}}>WHY US?</h3>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 text-black">We Do. Others don't.</h2>
                        <div className="text-gray-600 space-y-3 sm:space-y-4 text-base sm:text-lg md:text-xl leading-relaxed">
                            <p>Mogul Press is one of the top Public Relations companies. As a PR Agency, we have worked with top entrepreneurs, helping them shape their communication strategies, publicity channels, and public relations marketing. We assist with essential public relations functions such as media relations and press release management.</p>
                            <p>We utilize all available tools of Public Relations, including press release distribution, press coverage, and earned media coverage. In our digital arm, we provide services like social media management, social media content creation, and promotion. Our team comprises the best and passionate professionals in our domain.</p>
                        </div>
                    </div>
                </div>
             </div>
        </section>
    );
};

export default function App() {
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
            <AboutHeroSection />
            <ProcessSection />
            <MediaImpactSection />
            <MediaFeaturesSection />
            <WhyUsSection />
        </>
    );
}