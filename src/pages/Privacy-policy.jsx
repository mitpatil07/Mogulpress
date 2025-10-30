import React from 'react';

// Sub-component for individual policy sections
const PolicySection = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
    <div className="text-gray-600 space-y-4">
      {children}
    </div>
  </section>
);

// Sub-component for list items with checkmarks
const ListItem = ({ children }) => (
    <li className="flex items-start">
        <svg className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
        <span>{children}</span>
    </li>
);


// Main App component
export default function App() {
  return (
    <div className="bg-white font-sans text-gray-900">
      {/* Header Section */}
      <header className="relative bg-black text-white text-center py-20 px-4">
        <div 
            className="absolute inset-0 bg-cover bg-center opacity-30" 
            style={{ backgroundImage: "url('https://cdn.scoopempire.com/wp-content/uploads/2019/09/0-45.jpeg')" }}
            // A placeholder is used here. For the real background, you'd use the actual image URL.
        ></div>
        <div className="relative z-10">
          <p className="text-yellow-500 text-xl mb-2">Magnates Press</p>
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="max-w-3xl mx-auto text-gray-300">
            One of our main priorities is the privacy of our visitors. This Privacy Policy document contains
            types of information that is collected and recorded by Magnates Press and how we use it.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-8 md:p-12">
        <PolicySection title="Privacy Policy">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">General information</h3>
            <p>
                One of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Magnates Press and how we use it.
            </p>
            <p>
                If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us on <a href="mailto:contact@mogulpress.com" className="text-yellow-600 hover:underline">contact@mogulpress.com</a>
            </p>
        </PolicySection>

        <PolicySection title="Log files">
          <p>
            Magnates Press follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include:
          </p>
          <ul className="list-none space-y-2 my-4">
            <ListItem>Internet protocol (IP) addresses</ListItem>
            <ListItem>Browser type, Internet Service Provider (ISP)</ListItem>
            <ListItem>Date and time stamp, referring/exit pages</ListItem>
            <ListItem>Possibly the number of clicks</ListItem>
          </ul>
        </PolicySection>

        <PolicySection title="Privacy policies">
            <p>You may consult this list to find the Privacy Policy for each of the advertising partners of Magnates Press.</p>
            <p>
            Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Magnates Press, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
            </p>
            <p>Note that Magnates Press has no access to or control over these cookies that are used by third-party advertisers.</p>
        </PolicySection>
        
        <PolicySection title="Third party policies">
            <p>
            No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. Information sharing to subcontractors in support services, such as customer service is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
            </p>
             <p>
            You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?
            </p>
        </PolicySection>

        <PolicySection title="Online privacy">
            <p>
            This privacy policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Magnates Press. This policy is not applicable to any information collected offline or via channels other than this website.
            </p>
            <p>
            By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
            </p>
        </PolicySection>

        <PolicySection title="Update">
           <p>
            This Privacy Policy was last updated on 2025. If there will be any update, amendment, or changes to our Privacy Policy then these will be posted on this pages.
           </p>
        </PolicySection>
      </main>

       {/* Scroll to top button */}
       <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-yellow-500 text-white p-3 rounded-full shadow-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition-transform transform hover:-translate-y-1"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}
