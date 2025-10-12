import React, { useState, useEffect } from 'react';
import { blogPostsData, getBlogPostById } from '../data/blogdata';

// --- SVG Icon Components ---

// Mogul Press 'M' Logo SVG
const MogulLogo = () => (
  <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M4.36364 18.5V0.5H0V18.5H4.36364Z" fill="#D1A138"/>
    <path d="M12 11.75L4.36364 0.5H8.72727L14.1818 9.5L19.6364 0.5H24L15.8182 11.75V18.5H12V11.75Z" fill="#D1A138"/>
  </svg>
);

// Up Arrow Icon for the Scroll-to-Top button
const ArrowUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
        <path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>
    </svg>
);

// Back Arrow Icon
const ArrowLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>
    </svg>
);

// --- Reusable Components ---

const BlogPostCard = ({ id, imageUrl, excerpt, onReadMore, cardRef }) => {
  return (
    <div 
      ref={cardRef}
      id={`blog-card-${id}`}
      className="bg-black rounded-2xl p-4 flex flex-col font-['Poppins',_sans-serif] h-full shadow-lg transition-transform duration-300 hover:-translate-y-2"
    >
      {/* Image */}
      <div className="relative mb-5">
        <img 
            src={imageUrl} 
            className="w-full h-48 object-cover rounded-xl"
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/1a1a1a/FFF?text=Image+Error'; }}
            alt="Blog post"
        />
      </div>

      {/* Excerpt and Button */}
      <div className="flex-grow flex flex-col justify-between">
        <p className="text-gray-300 text-base mb-6">{excerpt}</p>
        <button 
          onClick={() => onReadMore(id)}
          className="mt-auto inline-block text-center bg-[#D1A138] text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors duration-300"
        >
          Read More
        </button>
      </div>
    </div>
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
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 bg-[#D1A138] p-3 rounded-md shadow-lg transition-opacity duration-300 z-50 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Go to top"
    >
      <ArrowUpIcon />
    </button>
  );
};

// --- Blog Detail Page Component ---
const BlogDetailPage = ({ postId, onBack }) => {
  const post = getBlogPostById(postId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postId]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Post Not Found</h2>
          <button 
            onClick={onBack}
            className="bg-[#D1A138] text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors duration-300"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="font-['Poppins',_sans-serif] bg-white min-h-screen">
      {/* Featured Image */}
      <div className="max-w-5xl mx-auto px-4 pt-16 mb-12">
        <img 
          src={post.imgpost} 
          alt={post.title}
          className="w-full h-full object-cover rounded-2xl shadow-2xl"
          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/1200x600/1a1a1a/FFF?text=Image+Error'; }}
        />
      </div>

      {/* Article Content */}
      <article className="max-w-6xl mx-auto px-4 pb-20">
        <div 
          className="prose prose-lg max-w-none blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
          style={{
            color: '#000',
          }}
        />

        {/* Share Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-black mb-6">Share this article</h3>
          <div className="flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300">
              Twitter
            </button>
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300">
              LinkedIn
            </button>
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300">
              Facebook
            </button>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <button 
            onClick={onBack}
            className="bg-[#D1A138] text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition-colors duration-300"
          >
            Back to All Posts
          </button>
        </div>
      </article>

      <style>{`
        .blog-content h2 {
          font-size: 1.875rem;
          font-weight: 700;
          color: #000;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
        }
        .blog-content p {
          font-size: 1.125rem;
          line-height: 1.75;
          color: #374151;
          margin-bottom: 1.5rem;
        }
        .blog-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #000;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }
      `}</style>
    </div>
  );
};

// --- Main App Component ---

export default function App() {
  const [currentView, setCurrentView] = useState('list');
  const [selectedPostId, setSelectedPostId] = useState(null);

  // Effect to load the Poppins font from Google Fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  // Scroll to the previously viewed card when returning to list
  useEffect(() => {
    if (currentView === 'list' && selectedPostId) {
      setTimeout(() => {
        const cardElement = document.getElementById(`blog-card-${selectedPostId}`);
        if (cardElement) {
          const yOffset = -100; // Offset from top for better visibility
          const y = cardElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [currentView, selectedPostId]);

  const handleReadMore = (postId) => {
    setSelectedPostId(postId);
    setCurrentView('detail');
    window.scrollTo(0, 0);
  };

  const handleBackToList = () => {
    setCurrentView('list');
  };

  // Show detail page if a post is selected
  if (currentView === 'detail' && selectedPostId) {
    return (
      <>
        <BlogDetailPage postId={selectedPostId} onBack={handleBackToList} />
        <ScrollToTopButton />
      </>
    );
  }

  // Show blog list
  return (
    <div className="font-['Poppins',_sans-serif] bg-white">
      {/* Hero Section */}
      <header className="relative bg-black text-white text-center py-32 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{backgroundImage: "url('https://cdn.scoopempire.com/wp-content/uploads/2019/09/0-45.jpeg')"}}
          aria-hidden="true"
        ></div>
        <div className="relative z-10">
          <p className="text-[#D1A138] text-xl tracking-widest mb-4">OUR BLOG</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Mogul Press Blog</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore the voices behind Mogul Press. Discover diverse topics, insights, and stories in our blogs.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <p className="text-[#D1A138] text-3xl tracking-widest mb-4">BLOG</p>
          <h2 className="text-5xl md:text-5xl font-extrabold text-black">Uncover PR Insights</h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPostsData.map((post) => (
            <BlogPostCard
              key={post.id}
              id={post.id}
              imageUrl={post.imageUrl}
              excerpt={post.excerpt}
              onReadMore={handleReadMore}
            />
          ))}
        </div>
      </main>

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
}