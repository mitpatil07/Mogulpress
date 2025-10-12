import React from 'react';

const App = () => {
  // Helper component for list items with a checkmark
  const ListItem = ({ children }) => (
    <li className="flex items-start">
      <svg className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
      <span>{children}</span>
    </li>
  );

  const SectionTitle = ({ children }) => (
    <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-8">{children}</h2>
  );
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-white font-sans leading-relaxed text-gray-700">
      {/* Header Section */}
      <header className="bg-black text-white text-center py-20 px-4">
        <h1 className="text-yellow-500 text-lg font-semibold">Mogul Press</h1>
        <h2 className="text-5xl font-bold mt-2">Terms & Conditions</h2>
        <p className="mt-4 max-w-2xl mx-auto">
          These terms and conditions outline the rules and regulations for the use of Mogul Press Global LLC's Website.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-8 bg-white  my-12 rounded-lg">
        <section>
          <SectionTitle>Terms & Conditions</SectionTitle>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Authority Accelerator Program</h3>
          <ol className="list-decimal list-inside space-y-4">
            <li>Our Authority Accelerator Program is designed to rapidly position you as a trusted leader in your industry. We leverage our extensive media network to get you featured in top-tier publications, building your authority and credibility. Through strategic media placements, we help you unlock new opportunities, secure social media verification, and even create a Google Knowledge Panel. Whether you’re looking to boost your personal brand or elevate your business, our program provides tailored solutions to ensure long-term success.</li>
            <li>You can cancel the SMS service at any time. Simply text "STOP" to the shortcode. Upon sending "STOP," we will confirm your unsubscribe status via SMS. Following this confirmation, you will no longer receive SMS messages from us. To rejoin, sign up as you did initially, and we will resume sending SMS messages to you.</li>
            <li>If you experience issues with the messaging program, reply with the keyword HELP for more assistance, or reach out directly to <a href="mailto:marketing@mogulpress.com" className="text-yellow-600 hover:underline">marketing@mogulpress.com</a>.</li>
            <li>Carriers are not liable for delayed or undelivered messages.</li>
            <li>As always, message and data rates may apply for messages sent to you from us and to us from you. Message frequency varies. For questions about your text plan or data plan, contact your wireless provider.</li>
            <li>For privacy-related inquiries, please refer to our privacy policy: <a href="#" className="text-yellow-600 hover:underline">Privacy Policy</a>.</li>
          </ol>
        </section>

        <section>
          <SectionTitle>Welcome to Mogul Press</SectionTitle>
          <p className="mb-4">These terms and conditions outline the rules and regulations for the use of Mogul Press Global LLC's Website.</p>
          <p className="mb-4">By accessing this website we assume you accept these terms and conditions. Do not continue to use Mogul Press website if you do not agree to take all of the terms and conditions stated on this page.</p>
          <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>
        </section>

        <section>
            <SectionTitle>Cookies</SectionTitle>
            <p className="mb-4">We employ the use of cookies. By accessing Mogul Press website, you agreed to use cookies in agreement with the Mogul Press Global LLC's Privacy Policy.</p>
            <p>Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>
        </section>

        <section>
            <SectionTitle>License</SectionTitle>
            <p className="mb-4">Unless otherwise stated, Mogul Press Global LLC and/or its licensors own the intellectual property rights for all material. All intellectual property rights are reserved. You may access this for your own personal use subjected to restrictions set in these terms and conditions.</p>
            <p className="mb-2 font-semibold">You must not:</p>
            <ul className="space-y-2 mb-4">
                <ListItem>Republish material from Mogul Press</ListItem>
                <ListItem>Sell, rent or sub-license material from Mogul Press</ListItem>
                <ListItem>Reproduce, duplicate or copy material from Mogul Press</ListItem>
                <ListItem>Redistribute content from Mogul Press</ListItem>
            </ul>
            <p className="mb-4">This Agreement shall begin on the date hereof.</p>
            <p className="mb-4">Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Mogul Press Global LLC does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Mogul Press Global LLC, its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Mogul Press Global LLC shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</p>
            <p className="mb-4">Mogul Press Global LLC reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes a breach of these Terms and Conditions.</p>
            <p className="mb-2 font-semibold">You warrant and represent that:</p>
             <ul className="space-y-2 mb-4">
                <ListItem>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</ListItem>
                <ListItem>The Comments do not invade any intellectual property rights, including without limitation copyright, patent or trademark of any third party;</ListItem>
                <ListItem>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</ListItem>
                <ListItem>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</ListItem>
            </ul>
            <p>You hereby grant Mogul Press Global LLC a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.</p>
        </section>
        
        <section>
            <SectionTitle>Hyperlinking to our Content</SectionTitle>
            <p className="mb-2 font-semibold">The following organizations may link to our Website without prior written approval:</p>
            <ul className="space-y-2 mb-4">
                <ListItem>Government agencies;</ListItem>
                <ListItem>Search engines;</ListItem>
                <ListItem>News organizations;</ListItem>
                <ListItem>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses;</ListItem>
                <ListItem>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our website.</ListItem>
            </ul>
            <p className="mb-4">These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site.</p>
            <p className="mb-2 font-semibold">We may consider and approve other link requests from the following types of organizations:</p>
            <ul className="space-y-2 mb-4">
                <ListItem>Commonly-known consumer and/or business information sources</ListItem>
                <ListItem>Dot.com community sites</ListItem>
                <ListItem>Associations or other groups representing charities</ListItem>
                <ListItem>Online directory distributors;</ListItem>
                <ListItem>Internet portals</ListItem>
                <ListItem>Accounting, law and consulting firms; and</ListItem>
                <ListItem>Educational institutions and trade associations.</ListItem>
            </ul>
            <p className="mb-4">We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Mogul Press Global LLC; and (d) the link is in the context of general resource information.</p>
            <p className="mb-4">These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site.</p>
            <p className="mb-4">If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an email to Mogul Press Global LLC. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.</p>
            <p className="mb-2 font-semibold">Approved organizations may hyperlink to our Website as follows:</p>
            <ul className="space-y-2 mb-4">
                <ListItem>By use of our corporate name; or</ListItem>
                <ListItem>By use of the uniform resource locator being linked to; or</ListItem>
                <ListItem>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party's site.</ListItem>
            </ul>
            <p>No use of Mogul Press Global LLC's logo or other artwork will be allowed for linking absent a trademark license agreement.</p>
        </section>

        <section>
            <SectionTitle>iFrames</SectionTitle>
            <p>Without prior approval and written permission, you may not create frames around our web pages that alter in any way the visual presentation or appearance of our Website.</p>
        </section>

        <section>
            <SectionTitle>Content Liability</SectionTitle>
            <p>We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>
        </section>

        <section>
            <SectionTitle>Your Privacy</SectionTitle>
            <p>Please read <a href="#" className="text-yellow-600 hover:underline">Privacy Policy</a></p>
        </section>

        <section>
            <SectionTitle>Reservation of Rights</SectionTitle>
            <p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>
        </section>
        
        <section>
            <SectionTitle>Removal of links from our website</SectionTitle>
            <p className="mb-4">If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</p>
            <p>We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.</p>
        </section>
        
        <section>
            <SectionTitle>Disclaimer</SectionTitle>
            <p className="mb-4">To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Limit or exclude our or your liability for death or personal injury;</li>
                <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
            </ul>
            <p className="mb-4">The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</p>
            <p>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
        </section>

        <section>
            <SectionTitle>Unauthorized Copying Prohibition</SectionTitle>
            <p>It is totally forbidden to duplicate, reproduce, or distribute any content from Mogul Press without authorization. This covers any content that is shown on the website, including text, pictures, videos, and other files. Under international treaties and copyright regulations, every content on Mogul Press is protected. Any action that includes the unapproved duplication of content by users is strictly forbidden without express written consent from Mogul Press. If this policy is broken, user accounts may be suspended or terminated, legal action may be taken, and Mogul Press may take other appropriate measures as well.</p>
        </section>

      </main>

      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-yellow-500 text-white p-3 rounded-full shadow-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition-transform transform hover:scale-110"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
};

export default App;
