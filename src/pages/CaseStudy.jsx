import React, { useState, useEffect } from 'react';
import { caseStudiesData, getAllCaseStudies } from '../assets/data/data';
import Forbes from '../assets/forbse-header.png';
import Road from '../assets/load.png'
import Work from '../assets/2ndloog.png'
import Qmark from '../assets/qmark.png'
import Trophy from '../assets/trophy.png'
import User from '../assets/user.png';

// --- Case Studies List Component ---
const CaseStudies = ({ caseStudies, onSelectPerson }) => {
    const CaseStudyCard = ({ person, onSelectPerson }) => (
        <div className="w-[350px] text-center bg-white">
            <img src={person.card.imageUrl} alt={person.name} className="w-full h-auto" />
            <div className="pt-6 pb-8">
                <h3 className="text-xl font-bold mb-2 text-[#333]">{person.name}</h3>
                <p className="text-base text-gray-600 mb-6">{person.card.title}</p>
                <button
                    onClick={() => onSelectPerson(person.id)}
                    className="bg-[#d4af37] text-white font-bold py-2.5 px-5 rounded-md transition-colors duration-300 hover:bg-[#c5a031]">
                    Read More
                </button>
            </div>
        </div>
    );

    return (
        <div className="bg-white font-['Montserrat',_sans-serif] text-[#333]">
            <div className="relative bg-black text-white text-center py-12 sm:py-16 md:py-20 lg:py-22 px-4 sm:px-5 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{ backgroundImage: "url('https://cdn.scoopempire.com/wp-content/uploads/2019/09/0-45.jpeg')" }}
                ></div>
                <div className="relative z-10 max-w-6xl mx-auto">
                    <h2 className="text-2xl text-[#d4af37] tracking-[2px] mb-4">CASE STUDIES</h2>
                    <h1 className="text-5xl font-extrabold leading-tight">No guesswork involved. We deliver results.</h1>
                    <p className="text-xl max-w-5xl mx-auto opacity-80 mt-8">
                        The case studies featured on this page are derived from actual clients. The outcomes displayed here should not be considered as the norm and should not be taken to predict comparable results.
                    </p>
                </div>
            </div>

            <div className="py-20 px-5 text-center">
                <h2 className="text-xl font-extralight text-[#d4af37] tracking-[2px]">REAL SUCCESS STORIES</h2>
                <h1 className="text-[42px] font-extrabold mt-2 text-[#1e1e1e]">
                    Case Studies From<br /> Our <span className="border-b-4 text-[#d4af37] pb-1">Best Clients</span>
                </h1>
                <p className="text-lg mt-8 max-w-5xl mx-auto text-gray-700">
                    Delve into compelling case studies featuring our esteemed clients. Witness firsthand the transformative strategies, collaborative efforts, and remarkable outcomes that define our client relationships.
                </p>
            </div>

            <div className="flex justify-center flex-wrap gap-x-10 gap-y-16 px-5 pb-20">
                {caseStudies.map((person) => (
                    <CaseStudyCard key={person.id} person={person} onSelectPerson={onSelectPerson} />
                ))}
            </div>

            {/* --- Call to Action Section --- */}
            <div className="bg-white py-2 px-5">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="text-center md:text-left">
                        <img src={Forbes} alt="Forbes Magazine Cover" className="mx-auto" />
                    </div>
                    <div className="text-left">
                        <h2 className="text-xl text-[#d4af37] tracking-[2px]">GET COVERAGE TODAY</h2>
                        <h1 className="text-[40px] font-extrabold mt-4 leading-tight text-[#1e1e1e]">
                            Will You Be One Of The Few That Let's PR Generate The Attention For You?
                        </h1>
                        <p className="text-lg mt-6 text-gray-700 font-medium">
                            Click Below to finally get the attention and recognition you need to dominate your industry.
                        </p>
                        <div className="mt-10 flex flex-col items-start gap-4">
                            <a
                                href="https://calendly.com/vivafox-media/strategy-session"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#d4af37] text-white font-bold py-5 px-12 rounded-md transition-all duration-300 hover:bg-[#c5a031] text-lg inline-block"
                            >
                                &#10142; YES! I'm Ready To Get Featured
                            </a>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Helper Components ---
const VideoPlayer = ({ videoUrl }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const getVideoId = (url) => {
        const match = url.match(/(?:v=|\.be\/)([a-zA-Z0-9_-]+)/);
        return match ? match[1] : null;
    };

    const videoId = getVideoId(videoUrl);
    const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    return (
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl cursor-pointer">
            {!isPlaying ? (
                <div onClick={() => setIsPlaying(true)} className="relative w-full h-full">
                    <img
                        src={thumbnail}
                        alt="Video thumbnail"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <button
                            className="bg-[#d4af37] text-white rounded-full w-20 h-20 flex items-center justify-center hover:bg-[#c5a031] transition-all"
                            aria-label="Play video"
                        >
                            ▶
                        </button>
                    </div>
                </div>
            ) : (
                <iframe
                    className="w-full h-full rounded-2xl"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            )}
        </div>
    );
};

// --- Case Study Template ---
const CaseStudyTemplate = ({ personData, onBack }) => {
    const { name, hero, overview, process, challenge, strategy, results, publications, testimonial } = personData;

    const StampIcon = ({ className }) => (
        <svg className={className} viewBox="0 0 100 100">
            <defs>
                <path id="circlePath" d="M 10, 50 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
            </defs>
            <g className="text-[#d4af37]">
                <use href="#circlePath" fill="none" stroke="currentColor" strokeWidth="1" />
                <text fill="currentColor" className="text-[10px] font-semibold tracking-[.2em]">
                    <textPath href="#circlePath">Featured Today</textPath>
                </text>
            </g>
        </svg>
    );

    const ProcessIcon = ({ type }) => {
        const icons = {
            consultation: (
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            ),
            roadmap: (
                <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            ),
            work: (
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0..." />
            ),
        };
        return (
            <div className="text-[#d4af37] mb-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    {icons[type]}
                </svg>
            </div>
        );
    };

    const CheckListItem = ({ children }) => (
        <li className="flex items-start mb-4 text-lg">
            <svg className="h-6 w-6 mr-3 text-[#d4af37]" viewBox="0 0 20 20" fill="currentColor">
                <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293..."
                    clipRule="evenodd"
                />
            </svg>
            <span>{children}</span>
        </li>
    );

    return (
        <div className="bg-white font-['Montserrat',_sans-serif] text-[#1e1e1e]">
            {/* Hero Section */}
            <div
                className="relative text-white text-center py-32 px-5 bg-cover bg-center"
                style={{ backgroundImage: `url(${hero.backgroundImage})` }}
            >
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10">
                    <h2 className="text-sm font-bold text-[#d4af37] tracking-[2px] mb-4">{hero.subtitle}</h2>
                    <h1 className="text-6xl font-extrabold">{name}</h1>
                    <p className="text-lg max-w-3xl mx-auto mt-6 font-light leading-relaxed">{hero.intro}</p>
                </div>
            </div>

            {/* Overview */}
            <div className="bg-white pt-24 pb-20 px-5 text-center -mt-20 rounded-t-[50px] relative z-10">
                <h2 className="text-2xl text-[#d4af37] tracking-wider">{overview.subtitle}</h2>
                <h1 className="text-5xl font-extrabold mt-2 text-[#1e1e1e]">{overview.title}</h1>
                <div className="max-w-6xl mx-auto text-left text-lg text-black mt-8 space-y-6">
                    {overview.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                    ))}
                </div>
            </div>

            {/* Process */}
            <div className="py-12 px-5 text-center bg-white">
                <h2 className="text-2xl text-[#d4af37] tracking-wider">{process.subtitle}</h2>
                <h1 className="text-5xl font-extrabold mt-2 text-[#000000]">{process.title}</h1>
                <p className="text-xl mt-8 max-w-5xl mx-auto text-black">{process.intro}</p>
                <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto mt-16 text-left">
                    {process.steps.map((step) => (
                        <div key={step.title} className="text-center">
                            <ProcessIcon type={step.icon} />
                            <h3 className="font-extrabold text-2xl mb-3">{step.title}</h3>
                            <p className="text-gray-600 text-xl">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Challenge & Strategy */}
            <div className="py-24 px-5 grid md:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
                <div className="relative">
                    <StampIcon className="w-32 h-32 absolute -top-12 -left-12 opacity-50" />
                    <div className="relative text-center md:text-left">
                        <div className="w-28 h-28 mx-auto md:mx-0 bg-[#d4af37] rounded-full flex items-center justify-center mb-6">
                            <span className="text-6xl text-white font-bold">?</span>
                        </div>
                        <h2 className="text-4xl font-extrabold mb-6">The Challenge</h2>
                        <p className="text-lg text-gray-700 font-medium">{challenge}</p>
                    </div>
                </div>

                <div className="relative text-center md:text-left">
                    <h2 className="text-4xl font-extrabold mb-6">The Strategy</h2>
                    <ul className="font-medium">
                        {strategy.map((s, i) => (
                            <CheckListItem key={i}>{s}</CheckListItem>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Results */}
            <div className="bg-black text-white py-16 sm:py-24 px-5">
                <div className="grid md:grid-cols-2 gap-12 sm:gap-16 max-w-6xl mx-auto items-center relative">
                    <i aria-hidden="true" className=" fas fa-trophy text-[150px] text-[#d4af37] absolute -top-10 right-5 opacity-10"></i>
                    <h2 className="text-5xl font-extrabold text-center md:text-left">Results</h2>
                    <ul className="font-medium">
                        {results.map((r, i) => (
                            <CheckListItem key={i}>{r}</CheckListItem>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Publications */}
            <div className="py-12 px-5 text-center">
                <h2 className="text-2xl text-[#d4af37] ">{publications.subtitle}</h2>
                <h1 className="text-5xl font-extrabold mt-2 text-[#1e1e1e]">
                    {publications.title} <span className="text-[#d4af37]">{name}</span>
                </h1>
                <div className="max-w-5xl mx-auto mt-12">
                    <img
                        src={publications.imageUrl}
                        alt={`Featured publications for ${name}`}
                        className="w-full h-auto"
                    />
                </div>
            </div>

            {/* --- Updated Testimonial Section --- */}
            <div className="bg-white py-8 px-5">
                <div className="text-center mb-16">
                    <h2 className="text-xl text-[#d4af37] tracking-wider">{testimonial.subtitle}</h2>
                    <h1 className="text-[42px] font-extrabold mt-2 text-[#1e1e1e]">{testimonial.title}</h1>
                    <p className="text-lg mt-8 max-w-3xl mx-auto text-gray-700 font-medium">{testimonial.intro}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
                    <div className="bg-black text-white p-12 rounded-3xl relative">
                        <span className="text-9xl text-[#d4af37] absolute -top-2 left-8 opacity-50 font-serif leading-none">
                            "
                        </span>
                        <p className="text-xl leading-relaxed relative z-10 font-medium">{testimonial.quote}</p>
                        <p className="text-2xl font-bold mt-8">{name}</p>
                        <p className="text-lg text-gray-400">{testimonial.role}</p>
                    </div>
                    <VideoPlayer videoUrl={testimonial.videoUrl} />
                </div>
            </div>
        </div>
    );
};

// --- Main Component ---
function CaseStudy() {
    const [selectedPersonId, setSelectedPersonId] = useState(null);

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            setSelectedPersonId(hash || null);
        };
        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const handleSelectPerson = (id) => {
        window.scrollTo(0, 0);
        window.location.hash = id;
    };

    const handleBackToList = () => {
        window.location.hash = '';
    };

    const personData = selectedPersonId ? caseStudiesData[selectedPersonId] : null;

    return (
        <div>
            <main>
                {personData ? (
                    <CaseStudyTemplate personData={personData} onBack={handleBackToList} />
                ) : (
                    <CaseStudies caseStudies={getAllCaseStudies()} onSelectPerson={handleSelectPerson} />
                )}
            </main>
        </div>
    );
}

export default CaseStudy;