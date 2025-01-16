import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ once: true, offset: 120, duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <Navbar />
      <div className="font-sans flex-grow">
        {/* Hero Section */}
        <div
          className="relative bg-cover bg-center bg-fixed overflow-hidden"
          style={{
            backgroundImage: "url('/aboutus.jpg')",
            height: "80vh",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 flex flex-col items-center justify-center text-white text-center backdrop-blur-[2px]">
            <h1
              className="text-6xl md:text-8xl font-bold mb-8 tracking-wider drop-shadow-xl"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              About Us
            </h1>
            <div
              className="h-1.5 w-40 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full shadow-lg"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            ></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative max-w-6xl mx-auto py-32 px-6 lg:px-8">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
          
          <h3
            className="text-5xl font-bold text-center mb-8 text-gray-800 tracking-tight"
            data-aos="fade-up"
          >
            Fine<span className="text-blue-500 bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">.lk</span>
          </h3>
          <div
            className="h-1.5 w-28 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-20 rounded-full"
            data-aos="fade-up"
            data-aos-delay="200"
          ></div>

          <div className="space-y-16 relative z-10">
            <p
              className="text-xl text-gray-700 leading-relaxed px-6 hover:text-gray-900 transition-colors duration-300 text-center"
              data-aos="fade-up"
            >
              Welcome to Fine.lk, Sri Lanka&apos;s innovative platform dedicated to
              revolutionizing the way fines are managed and paid. Our mission is to
              provide a seamless, efficient, and transparent solution for
              individuals, law enforcement authorities, and intermediaries, making
              fine management simpler and more accessible.
            </p>

            <p
              className="text-xl text-gray-700 leading-relaxed px-6 hover:text-gray-900 transition-colors duration-300 text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              We believe in bridging the gap between technology and public services
              by incorporating features that cater to both digital and non-digital
              users. Our integration with offline payment channels like post offices
              ensures inclusivity, enabling individuals across urban and rural areas
              to benefit from the platform.
            </p>

            <p
              className="text-xl text-gray-700 leading-relaxed px-6 hover:text-gray-900 transition-colors duration-300 text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              As a proud advocate of digitization, Fine.lk is not just about
              simplifying processes but also contributing to the broader goal of
              modernizing public services in Sri Lanka. By fostering transparency
              and accessibility, we aim to empower citizens and authorities alike,
              ensuring a safer, more connected, and efficient system for all.
            </p>
          </div>

          {/* Enhanced Decorative Elements */}
          <div className="absolute -left-4 top-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -right-4 bottom-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute left-1/2 top-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;

// Add this CSS to your global styles or as a style tag in your HTML
// <style>
//   .bg-grid-pattern {
//     background-image: linear-gradient(to right, #f0f0f0 1px, transparent 1px),
//       linear-gradient(to bottom, #f0f0f0 1px, transparent 1px);
//     background-size: 24px 24px;
//   }
// </style>
