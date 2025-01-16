import { useState } from 'react';
import { FaMapMarkerAlt, FaClock, FaPhoneAlt } from 'react-icons/fa';

const containerStyle = {
  width: "100%",
  height: "700px",
  position: "relative",
};

function MyMap() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setError("Failed to load the map. Please try again later.");
    setIsLoading(false);
  };

  return (
    <div className="myMap w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 px-4 relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50 to-transparent pointer-events-none"/>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 space-y-4">
          <span className="text-blue-600 font-medium tracking-wider text-sm uppercase">Find Us</span>
          <div className="flex items-center justify-center mb-4">
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-blue-500 to-transparent mr-4"></div>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Our Location</h2>
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-blue-500 to-transparent ml-4"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find us in the heart of Colombo, where convenience meets excellence
          </p>
        </div>

        <div className="relative bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.01] border border-gray-100">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 backdrop-blur-sm z-10">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
          )}
          
          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-red-50 backdrop-blur-sm z-10">
              <p className="text-red-600 bg-white px-6 py-3 rounded-lg shadow">{error}</p>
            </div>
          )}

          <div className="w-full" style={containerStyle}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.8039219457!2d79.81500585318638!3d6.92192208483755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1735886943401!5m2!1sen!2slk"
              className="w-full h-full transition-opacity duration-300"
              style={{ border: 0, opacity: isLoading ? 0 : 1 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={handleLoad}
              onError={handleError}
            />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
            <div className="text-blue-500 mb-4">
              <FaMapMarkerAlt className="w-8 h-8 mx-auto" />
            </div>
            <h3 className="font-semibold text-gray-900 text-lg mb-2">Address</h3>
            <p className="text-gray-600">Colombo, Sri Lanka</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
            <div className="text-blue-500 mb-4">
              <FaClock className="w-8 h-8 mx-auto" />
            </div>
            <h3 className="font-semibold text-gray-900 text-lg mb-2">Opening Hours</h3>
            <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
            <div className="text-blue-500 mb-4">
              <FaPhoneAlt className="w-8 h-8 mx-auto" />
            </div>
            <h3 className="font-semibold text-gray-900 text-lg mb-2">Contact</h3>
            <p className="text-gray-600">+94 11 234 5678</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-50 to-transparent pointer-events-none"/>
    </div>
  );
}

export default MyMap;