import React, { useEffect } from 'react';

// --- SVG Icons/Logos ---
// Adjusted colors and styles to better match the source.
const ForbesLogo = () => (
    <svg className="h-8 md:h-9 text-gray-500" viewBox="0 0 100 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="15" fontFamily="serif" fontSize="18" fontWeight="bold">Forbes</text>
    </svg>
);

const BusinessInsiderLogo = () => (
    <svg className="h-8 md:h-9 text-gray-500" viewBox="0 0 200 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="15" fontFamily="'Helvetica Neue', Arial, sans-serif" fontSize="14" fontWeight="bold">BUSINESS</text>
        <text x="90" y="15" fontFamily="'Helvetica Neue', Arial, sans-serif" fontSize="14">INSIDER</text>
    </svg>
);

const EntrepreneurLogo = () => (
    <svg className="h-8 md:h-9 text-gray-500" viewBox="0 0 150 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="15" fontFamily="serif" fontSize="16" fontStyle="italic" fontWeight="bold">Entrepreneur</text>
    </svg>
);

const HuffPostLogo = () => (
    <svg className="h-8 md:h-9 text-gray-500" viewBox="0 0 150 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="15" fontFamily="'Helvetica Neue', Arial, sans-serif" fontSize="16" fontWeight="bold">HUFFPOST</text>
    </svg>
);

const IncLogo = () => (
    <svg className="h-8 md:h-9 text-gray-500" viewBox="0 0 50 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="15" fontFamily="serif" fontSize="18" fontWeight="bold">Inc.</text>
    </svg>
);

const BuzzFeedLogo = () => (
    <svg className="h-8 md:h-9 text-gray-500" viewBox="0 0 120 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="15" fontFamily="'Helvetica Neue', Arial, sans-serif" fontSize="16" fontWeight="bold">BuzzFeed</text>
    </svg>
);


// --- Mock Data ---
const pressFeatures = [
    {
        publication: 'HOLLYWOOD UNLOCKED',
        quote: '"Ranked No#1: Hollywood\'s Power Players: The Top 10 PR Firms Behind Celebrity Success". - HOLLYWOOD UNLOCKED',
        description: 'MAGNATES PRESS takes the top spot in Hollywood Unlocked\'s rankings, recognized as the No#1 PR firm behind celebrity success. Our unwavering commitment to elevating celebrities has earned us this prestigious position. We\'re the driving force behind star-studded triumphs in the world of entertainment.',
        articleUrl: 'https://hollywoodunlocked.com/hollywoods-power-players-the-top-10-pr-firms-behind-celebrity-success/#:~:text=of%20famous%20personalities%3A-,Mogul%20Press,-Mogul%20Press%2C%20founded',
        imgurl: 'https://mogulpress.com/storage/2023/10/Hollywood.jpg',
        imageAlt: 'Preview of Magnates Press article in Hollywood Unlocked'
    },
    {
        publication: 'OUTLOOK',
        quote: '"A Full-Service PR Firm Elevating Brands To The Next Level". - OUTLOOK',
        description: 'MAGNATES PRESS has secured a feature in Outlook, highlighting our role as a full-service PR firm dedicated to elevating brands to new heights. We pride ourselves on being the driving force behind taking brands to the next level. Outlook recognizes our commitment to excellence and innovation in the PR industry.',
        articleUrl: 'https://www.outlookindia.com/business-spotlight/mogul-press-a-full-service-pr-firm-elevating-brands-to-the-next-level-news-226730',
        imgurl: 'https://mogulpress.com/storage/2023/09/Outlook.jpg',
        imageAlt: 'Preview of Magnates Press article in Outlook'
    },
    {
        publication: 'Business Insider',
        quote: '"Magnates Press Goes Global, Handcrafting the Best PR Strategies for Clients". - Business Insider',
        description: 'MAGNATES PRESS continues to make waves in the PR world, this time grabbing the spotlight in Yahoo Finance. We\'re excited to announce our global expansion as we handcraft cutting-edge PR strategies that redefine excellence.',
        articleUrl: 'https://markets.businessinsider.com/news/stocks/mogul-press-goes-global-handcrafting-the-best-pr-strategies-for-clients-1031763970',
        imgurl: 'https://mogulpress.com/storage/2023/10/Business-Insider.png',
        imageAlt: 'Preview of Magnates Press article in Business Insider'
    },
    {
        publication: 'FAST COMPANY',
        quote: '"Leading PR Firm Magnates Press Is Helping Brands Break Through The Noise". - FAST COMPANY',
        description: 'MAGNATES PRESS is making its mark in the PR industry, as highlighted by FAST COMPANY. We\'re at the forefront, helping brands effectively break through the noise and stand out in a crowded marketplace. FAST COMPANY recognizes our leadership in the field, and we\'re committed to continuing our mission of driving innovation and success for our clients in the ever-evolving world of public relations.',
        articleUrl: 'https://www.fastcompany.co.za/business/leading-pr-firm-mogul-press-is-helping-brands-break-through-the-noise-d9cec7d5-a984-4ee1-8148-010e0bf3b0b5',
        imageAlt: 'Preview of Magnates Press article in Fast Company',
        imgurl: 'https://mogulpress.com/storage/2023/10/Fast-Company.png',
    },
    {
        publication: 'VENTURE CAPITAL POST',
        quote: '"Ranked No#1: 15 Best PR Agencies for Venture Capital Firms". - VENTURE CAPITAL',
        description: 'MAGNATES PRESS proudly ranks No#1 among the \'15 Best PR Agencies for Venture Capital Firms,\' featured in Venture Capital Post. Our dedication, exceptional results, and unmatched expertise have earned us this prestigious recognition. We\'re committed to providing top-tier PR services that drive success in the dynamic world of venture capital.',
        articleUrl: 'https://www.vcpost.com/articles/124094/20230925/15-best-pr-agencies-for-venture-capital-firms.htm#:~:text=For%20VC%20Firms-,1.%20Mogul%20Press%3A%C2%A0,-Mogul%20Press%2C%20also',
        imgurl: '	https://mogulpress.com/storage/2023/10/1.jpg',
        imageAlt: 'Preview of Magnates Press article in Venture Capital Post'
    },
    {
        publication: 'LA WEEKLY',
        quote: '"Magnates Press Can Brighten Up Your PR Strategy. Here\'s How". - LA WEEKLY',
        description: 'MAGNATES PRESS has garnered attention in LA Weekly, shedding light on our ability to illuminate your PR strategy. We\'re here to bring a fresh perspective, showcasing how we can brighten up your approach to public relations. LA Weekly recognizes our expertise and innovative approach in delivering impactful results for our clients.',
        articleUrl: 'https://mogulpress.com/storage/2023/09/LA-Weekly.jpg',
        imgurl: 'https://mogulpress.com/storage/2023/09/LA-Weekly.jpg',
        imageAlt: 'Preview of Magnates Press article in LA Weekly',
        directImage: true
    },
    {
        publication: 'Bloomberg',
        quote: '"Magnates Press: Disrupting the PR Industry". - Bloomberg',
        description: 'MAGNATES PRESS is making headlines once again, this time earning recognition from Bloomberg. Our agency is going global, crafting tailor-made PR strategies that set the gold standard for client success. Bloomberg acknowledges our dedication to excellence, and we\'re proud to lead the charge in reshaping the PR landscape on a global scale.',
        articleUrl: 'https://mogulpress.com/storage/2023/10/Bloomberg.png',
        imgurl: '	https://mogulpress.com/storage/2023/10/Bloomberg.png',
        imageAlt: 'Preview of Magnates Press article in Bloomberg',
        directImage: true
    },
    {
        publication: 'Mashable',
        quote: '"Magnates Press: Redefining Tech PR Excellence in Today\'s Digital Era". - Mashable',
        description: 'Magnates Press has once again made waves in the industry, earning a spotlight on Mashable for our groundbreaking work in redefining tech PR excellence. The article highlights our commitment to navigating the ever-evolving digital landscape with innovative strategies.',
        articleUrl: 'https://nl.mashable.com/pr/9296/mogul-press-redefining-tech-pr-excellence-in-todays-digital-era',
        imageAlt: 'Preview of Magnates Press article in Mashable',
        imgurl: 'https://mogulpress.com/storage/2023/10/Business-Insider.png',
    },
    {
        publication: 'International Business Times',
        quote: '"Magnates Press: One Of The Fastest Growing PR Firms In The World". - International Business Times',
        description: 'MAGNATES PRESS has gained international acclaim, earning a feature in the prestigious International Business Times. As one of the fastest-growing PR firms globally, we\'re proud of our rapid ascent in the industry. International Business Times recognizes our dedication to excellence and our unwavering commitment to delivering exceptional results for our clients.',
        articleUrl: 'https://www.ibtimes.sg/mogul-press-one-fastest-growing-pr-firms-world-64231',
        imgurl: '	https://mogulpress.com/storage/2023/09/IBT-3.jpg',
        imageAlt: 'Preview of Magnates Press article in International Business Times'
    },
    {
        publication: 'OK Magazine',
        quote: '"Ranked No#1: Lights, Camera, PR: The Top Celebrity Publicists in Hollywood". - OK Magazine',
        description: 'OK Magazine features Magnates Press as a top-tier USA-based PR agency shaping Hollywood narratives. Renowned for collaborations with stars like Selena Gomez and successful campaigns with entertainment giants such as Walt Disney Studios, we take pride in our influential role in the industry.',
        articleUrl: 'https://okmagazine.com/p/lights-camera-pr-top-celebrity-publicists-hollywood/#:~:text=Nasty%20Little%20Man-,1.%20Mogul%20Press,-As%20a%20leading',
        imgurl: '	https://mogulpress.com/storage/2024/01/Mogul-Press-OK-Magazine-1.jpg',
        imageAlt: 'Preview of Magnates Press article in OK Magazine'
    },
    {
        publication: 'Hindustan Times',
        quote: '"Magnates Press Leads the Charge in Redefining Public Relations for a New Era ". - Hindustan Times',
        description: 'Hindustan Times profiles Magnates Press as the unsung hero revolutionizing public relations for celebrities. The stars\' ascent to stardom and their enjoyment of the limelight are orchestrated by the strategic genius of agencies such as Magnates Press.',
        articleUrl: 'https://www.hindustantimes.com/brand-stories/mogul-press-leads-the-charge-in-redefining-public-relations-for-a-new-era-101706611546069.html',
        imgurl: 'https://mogulpress.com/storage/2024/02/Screenshot-2024-02-13-174739.png',
        imageAlt: 'Preview of Magnates Press article in Hindustan Times'
    },
    {
        publication: 'HOLLYWOOD LIFE',
        quote: '"Magnates Press: Behind the Scenes of Celebrity PR Success Stories". - HOLLYWOOD LIFE',
        description: 'HOLLYWOOD LIFE shines a spotlight on Magnates Press, the behind-the-scenes powerhouse reshaping the landscape of celebrity PR. While the stars bask in the limelight, it\'s the strategic genius of agencies like Magnates Press that orchestrates their ascent to greatness.',
        articleUrl: 'https://hollywoodlife.com/2024/02/09/behind-the-scenes-of-celebrity-pr-success-stories/',
        imgurl: 'https://mogulpress.com/storage/2024/02/Hollywood-Life-Mogul-Press.jpg',
        imageAlt: 'Preview of Magnates Press article in Hollywood Life'
    },
    {
        publication: 'Market Watch',
        quote: '"Magnates Press Celebrates Half a Decade of Redefining Public Relations Serving Over 10,000 Clients". - Market Watch',
        description: 'Market Watch has featured MAGNATES PRESS, emphasizing our position as a full-service PR company committed to taking businesses to new heights. We take great satisfaction in being the engine that elevates brands to new heights. Outlook acknowledges our dedication to innovation and quality in the PR sector.',
        articleUrl: 'https://www.marketwatch.com/press-release/mogul-press-celebrates-half-a-decade-of-redefining-public-relations-serving-over-10-000-clients-338edec0',
        imgurl: 'https://mogulpress.com/storage/2024/02/Screenshot-2024-02-13-174356.png',
        imageAlt: 'Preview of Magnates Press article in Market Watch'
    },
    {
        publication: 'Khaleej Times',
        quote: '"Nabeel Ahmad\'s vision drives Magnates Press\'s expansion in the Middle East since 2019 " - Khaleej Times',
        description: 'Delving into the dynamic landscape of Middle Eastern PR, the Khaleej Times spotlights Magnates Press and its transformative journey under the visionary leadership of Nabeel Ahmad. Since its inception in 2019, Magnates Press has redefined media relations and branding standards, ushering in a new era of innovation and excellence in the region.',
        articleUrl: 'https://www.khaleejtimes.com/kt-network/nabeel-ahmads-vision-drives-mogul-presss-expansion-in-the-middle-east-since-2019',
        imgurl: 'https://mogulpress.com/storage/2024/02/Khaleej-Times.jpg',
        imageAlt: 'Preview of Magnates Press article in Khaleej Times'
    },
    {
        publication: 'Independent',
        quote: '"Magnates Press: Turning Entrepreneurs Into Industry Titans". - Independent',
        description: 'Since its founding in 2019, Magnates Press has not just been another PR agency, it has redefined the very essence of public relations.',
        imgurl: 'https://mogulpress.com/storage/2024/03/Independent-UK.jpg',
        articleUrl: 'https://www.independent.co.uk/asia',
        imageAlt: 'Preview of Magnates Press article in Independent'
    },
    {
        publication: 'USA Today',
        quote: '"Nabeel Ahmad and Magnates Press: A New Horizon in the World of Public Relations". - USA Today',
        description: 'USA Today highlights Magnates Press, the unsung hero changing the face of celebrity public relations. The strategic brilliance of agencies like Magnates Press is what orchestrates the stars\' rise to fame as they revel in the spotlight.',
        articleUrl: 'https://placehold.co/1200x800/FFFFFF/333333?text=USA+Today+Article',
        imgurl: 'https://mogulpress.com/storage/2024/02/Screenshot-2024-02-13-173712.png',
        imageAlt: 'Preview of Magnates Press article in USA Today',
        directImage: true
    },
    {
        publication: 'Benzinga',
        quote: '"Magnates Press: Shaping The Future Of Corporate Communications – A Fresh Perspective". - Benzinga',
        description: 'According to Benzinga, Magnates Press is the unsung hero transforming celebrity public relations. The deliberate brilliance of firms like Magnates Press orchestrates the stars\' rise to fame and their revelry in the spotlight.',
        articleUrl: 'https://www.benzinga.com/general/24/02/37126028/mogul-press-shaping-the-future-of-corporate-communications-a-fresh-perspective',
        imgurl: '	https://mogulpress.com/storage/2024/02/Screenshot-2024-02-14-223510.png',
        imageAlt: 'Preview of Magnates Press article in Benzinga'
    }
];



// Hero Section Component
const HeroSection = () => {
    return (
        <div className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: `url('https://cdn.scoopempire.com/wp-content/uploads/2019/09/0-45.jpeg')`,
                    opacity: '0.9'
                }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black opacity-80 z-10"></div>

            {/* Content Container */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 text-center">
                {/* Press/Media Label */}
                <div className="mb-6 sm:mb-8">
                    <p className="text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-wider text-yellow-500">
                        PRESS/MEDIA
                    </p>
                </div>

                {/* Main Headline */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6 md:mb-8 px-4">
                    Magnates Press has been Featured on 100's of<br className="hidden md:block" /> Major Media Outlets
                </h1>

                {/* Subheading */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 md:mb-16 max-w-4xl mx-auto px-4">
                    From Forbes, to Entrepreneur Magazine, to <span className="italic">Bloomberg</span>, to Inc.<br className="hidden md:block" /> Magazine, and more.
                </p>

                {/* As Seen In Label */}
                <div className="mb-8 md:mb-12">
                    <p className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-8 md:mb-12">
                        As Seen In
                    </p>
                </div>

                {/* Media Logos Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 items-center justify-items-center max-w-4xl mx-auto px-4">
                    {/* Forbes */}
                    <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity min-h-[60px] md:min-h-[80px]">
                        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic text-gray-400">Forbes</span>
                    </div>

                    {/* Business Insider */}
                    <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity min-h-[60px] md:min-h-[80px]">
                        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-gray-400 text-center leading-tight">
                            BUSINESS<br />INSIDER
                        </span>
                    </div>

                    {/* Entrepreneur */}
                    <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity min-h-[60px] md:min-h-[80px]">
                        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-gray-400">Entrepreneur</span>
                    </div>

                    {/* HuffPost */}
                    <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity min-h-[60px] md:min-h-[80px]">
                        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase text-gray-400">HUFFPOST</span>
                    </div>

                    {/* Inc. */}
                    <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity min-h-[60px] md:min-h-[80px]">
                        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-400">Inc.</span>
                    </div>

                    {/* BuzzFeed */}
                    <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity min-h-[60px] md:min-h-[80px]">
                        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-400">BuzzFeed</span>
                    </div>
                </div>
            </div>
        </div>
    );
};


// Reusable Feature Section Component
const FeatureSection = ({ feature, index }) => {
    // Alternate background colors based on the index
    const isEven = index % 2 === 0;
    const bgColor = isEven ? 'bg-white' : 'bg-black';
    const headingColor = isEven ? 'text-black' : 'text-white';
    const quoteColor = isEven ? 'text-gray-800' : 'text-gray-200';
    const descriptionColor = isEven ? 'text-gray-700' : 'text-gray-300';

    // Check if it's a direct image or if URL is empty
    const isDirectImage = feature.directImage || false;
    const hasUrl = feature.articleUrl && feature.articleUrl.trim() !== '' && !isDirectImage;

    // Determine the image source
    let thumbnailUrl;
    if (isDirectImage) {
        thumbnailUrl = feature.imgurl || feature.articleUrl;
    } else if (hasUrl) {
        thumbnailUrl = feature.imgurl || `https://s.wordpress.com/mshots/v1/${encodeURIComponent(feature.articleUrl)}?w=1200&h=800`;
    } else {
        // Use imgurl if available, otherwise placeholder
        thumbnailUrl = feature.imgurl || `https://placehold.co/1200x800/${isEven ? 'F5F5F5/333333' : '1F1F1F/FFFFFF'}?text=${encodeURIComponent(feature.publication)}`;
    }
    return (
        <section className={`${bgColor} py-8 sm:py-12 md:py-16`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-6 sm:mb-8">
                    <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 ${headingColor} px-2`}>
                        Featured in {feature.publication}
                    </h2>
                    <p className={`text-base sm:text-lg md:text-xl lg:text-2xl font-semibold max-w-3xl mx-auto mb-4 sm:mb-6 ${quoteColor} px-4`}>
                        {feature.quote}
                    </p>
                    <p className={`text-sm sm:text-base md:text-lg lg:text-xl max-w-6xl mx-auto leading-relaxed ${descriptionColor} px-4`}>
                        {feature.description}
                    </p>
                </div>
                <div className="mt-6 sm:mt-8 max-w-6xl mx-auto">
                    {hasUrl ? (
                        <a
                            href={feature.articleUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <div className="rounded-lg shadow-xl overflow-hidden border border-gray-300 hover:shadow-2xl transition-shadow duration-300 h-64 sm:h-80 md:h-full bg-gray-100">
                                <img
                                    src={thumbnailUrl}
                                    alt={feature.imageAlt}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.style.display = 'none';
                                        e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center ${isEven ? 'bg-gray-100 text-gray-600' : 'bg-gray-800 text-gray-400'}"><div class="text-center p-4 sm:p-8"><svg class="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg><p class="text-base sm:text-lg font-semibold">Article Preview</p><p class="text-xs sm:text-sm mt-2">Click to view full article</p></div></div>`;
                                    }}
                                />
                            </div>
                        </a>
                    ) : (
                        <div className="rounded-lg shadow-xl overflow-hidden border border-gray-300 h-64 sm:h-80 md:h-96 bg-gray-100">
                            <img
                                src={thumbnailUrl}
                                alt={feature.imageAlt}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center ${isEven ? 'bg-gray-100 text-gray-600' : 'bg-gray-800 text-gray-400'}"><div class="text-center p-4 sm:p-8"><svg class="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg><p class="text-base sm:text-lg font-semibold">${feature.publication}</p><p class="text-xs sm:text-sm mt-2">Featured Article</p></div></div>`;
                                }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

// --- Main App Component ---
export default function App() {
    // Use useEffect to manage side effects, like manipulating the document head.
    // This ensures the font is loaded without causing invalid HTML structure.
    useEffect(() => {
        const fontLink = document.createElement('link');
        fontLink.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap";
        fontLink.rel = "stylesheet";

        const preconnect1 = document.createElement('link');
        preconnect1.rel = "preconnect";
        preconnect1.href = "https://fonts.googleapis.com";

        const preconnect2 = document.createElement('link');
        preconnect2.rel = "preconnect";
        preconnect2.href = "https://fonts.gstatic.com";
        preconnect2.crossOrigin = "true";

        const styleTag = document.createElement('style');
        styleTag.innerHTML = `body { font-family: 'Poppins', sans-serif; }`;

        document.head.appendChild(preconnect1);
        document.head.appendChild(preconnect2);
        document.head.appendChild(fontLink);
        document.head.appendChild(styleTag);

        // Cleanup function to remove the elements when the component unmounts.
        return () => {
            document.head.removeChild(preconnect1);
            document.head.removeChild(preconnect2);
            document.head.removeChild(fontLink);
            document.head.removeChild(styleTag);
        };
    }, []); // The empty dependency array ensures this effect runs only once.

    return (
        <main className="antialiased">
            <HeroSection />

            {pressFeatures.map((feature, index) => (
                <FeatureSection
                    key={index}
                    feature={feature}
                    index={index}
                />
            ))}
        </main>
    );
}