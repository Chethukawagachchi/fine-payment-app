import  { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

const Report = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans relative z-10 bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5 z-0"></div>
      <Navbar />
      
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center bg-fixed transform-gpu"
        style={{
          backgroundImage: "url('48.jpg')",
          height: "75vh",
          minHeight: "600px",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 backdrop-blur-sm flex flex-col items-center justify-center">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight"
            data-aos="fade-up"
          >
            Online Report
          </h1>
          <p 
            className="text-xl text-gray-300 mt-6 max-w-2xl text-center px-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Efficient traffic violation reporting and management system
          </p>
          <div
            className="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mt-8"
            data-aos="fade-up"
            data-aos-delay="200"
          ></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto py-20 px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 backdrop-blur-sm bg-white/90" data-aos="fade-up">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            VIEW &amp; PAY FINES
          </h3>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-12"></div>
          
          <div className="space-y-8">
            <p className="text-gray-700 text-lg leading-relaxed" data-aos="fade-up">
              The <span className="font-semibold text-blue-600">Online Report</span> feature 
              on fine.lk empowers users to conveniently report various traffic-related 
              incidents and concerns in real-time, ensuring a smooth and transparent 
              communication channel between individuals and law enforcement authorities.
              This feature allows users to submit reports regarding lost fine slips, incorrect fine details, disputes over violations, or even grievances related to traffic incidents. By providing an intuitive interface, users can easily enter key details such as vehicle registration numbers, incident descriptions, location, and supporting evidence like images or documents. Each submitted report is logged into the system and forwarded to the relevant traffic department for swift review and resolution, streamlining what is traditionally a lengthy and complex process.
            </p>
            
            <p className="text-gray-700 text-lg leading-relaxed" data-aos="fade-up">
              The platform ensures transparency and accountability by enabling users
              to track the status of their reports through a reference number
              provided after submission. Notifications and updates are sent via
              email and SMS, keeping users informed about the progress of their
              cases. This not only saves time but also eliminates the need for
              individuals to physically visit government offices, reducing
              bureaucratic delays. The fine.lk Online Report feature benefits law
              enforcement by providing a centralized repository for managing reports
              efficiently while improving response times and communication with the
              public. Ultimately, this functionality enhances trust, accountability,
              and efficiency, marking a significant step toward modernizing public
              services in Sri Lanka.
            </p>
          </div>
          
          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16" data-aos="fade-up">
            <div className="group bg-blue-50 p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-blue-800 mb-3">
                Real-time Tracking
              </h4>
              <p className="text-gray-600">
                Monitor your report status instantly with our advanced tracking system
              </p>
            </div>

            <div className="group bg-blue-50 p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-blue-800 mb-3">
                Digital Documentation
              </h4>
              <p className="text-gray-600">
                Submit and store all your documents securely in digital format
              </p>
            </div>

            <div className="group bg-blue-50 p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-blue-800 mb-3">
                Secure Process
              </h4>
              <p className="text-gray-600">
                End-to-end encrypted data transmission and storage
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Report;
