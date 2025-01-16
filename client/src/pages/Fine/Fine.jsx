import { useEffect, useLayoutEffect } from "react";
import { FaSearch, FaCreditCard, FaShieldAlt, FaClock } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Fine = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('/fine.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <div className="container mx-auto h-full flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-6" data-aos="fade-up">
              Check & Pay Your Traffic Fines
            </h1>
            <p className="text-xl md:text-2xl text-center mb-8" data-aos="fade-up" data-aos-delay="200">
              Quick, secure, and hassle-free payment solution
            </p>
            
            {/* Search Box */}
            <div className="w-full max-w-md bg-white rounded-lg p-2 flex items-center" data-aos="fade-up" data-aos-delay="400">
              <input 
                type="text"
                placeholder="Enter fine number or vehicle number"
                className="flex-1 px-4 py-2 text-gray-800 focus:outline-none"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                <FaSearch className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
            Why Choose Our Platform?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <FaCreditCard />, title: "Secure Payments", desc: "Multiple payment options with bank-grade security" },
              { icon: <FaShieldAlt />, title: "Data Protection", desc: "Your information is always protected" },
              { icon: <FaClock />, title: "24/7 Access", desc: "Check and pay fines anytime, anywhere" }
            ].map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl text-blue-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Steps */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Enter Details", desc: "Input your fine reference or vehicle number" },
              { step: "2", title: "Verify Information", desc: "Check fine details and amount" },
              { step: "3", title: "Complete Payment", desc: "Pay securely using preferred method" }
            ].map((item, index) => (
              <div
                key={index}
                className="relative text-center p-8"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8" data-aos="fade-up">
            Ready to Clear Your Fines?
          </h2>
          <button 
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Check Now
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Fine;
