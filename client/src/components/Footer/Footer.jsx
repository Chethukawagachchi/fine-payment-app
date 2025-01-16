const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute inset-0 bg-grid-gray-100/[0.025] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      <div className="relative container px-4 py-16 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Logo Section */}
          <div className="lg:col-span-4">
            <a href="/" className="flex items-center space-x-2 group">
              <img 
                src="Fine.png" 
                alt="Fine Payment Logo" 
                className="h-12 w-auto transform transition-transform group-hover:scale-105" 
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Fine Payment
              </span>
            </a>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Streamlining fine payments for a better tomorrow. Experience seamless transactions and efficient service.
            </p>

            {/* Newsletter Section */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Stay Updated
              </h4>
              <div className="mt-4 flex max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 min-w-0 px-4 py-2 text-sm text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-150">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
              {/* Product Section */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase">Product</h3>
                <ul className="space-y-3">
                  {['Features', 'Integrations', 'Pricing', 'FAQ'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-base text-gray-600 hover:text-blue-600 transition-colors duration-200 ease-in-out relative group">
                        {item}
                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase">Company</h3>
                <ul className="space-y-3">
                  {['Privacy', 'Terms of Service'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-base text-gray-600 hover:text-blue-600 transition-colors duration-200 ease-in-out relative group">
                        {item}
                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase">Developers</h3>
                <ul className="space-y-3">
                  {['Documentation', 'API Reference', 'Guides'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-base text-gray-600 hover:text-blue-600 transition-colors duration-200 ease-in-out relative group">
                        {item}
                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Media Section */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase">Connect</h3>
                <div className="flex space-x-5">
                  {['facebook', 'twitter', 'instagram'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-gray-600 hover:text-blue-600 transform transition-transform hover:scale-110"
                      aria-label={`Follow us on ${social}`}
                    >
                      <span className="sr-only">Follow us on {social}</span>
                      <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        {social === 'facebook' && (
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12"/>
                        )}
                        {social === 'twitter' && (
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
                        )}
                        {social === 'instagram' && (
                          <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"/>
                        )}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-12 border-t border-gray-200">
          <p className="text-sm text-center text-gray-600">
            © {currentYear} Fine Payment System. All rights reserved. Made with 
            <span className="mx-1 text-red-500">♥</span> for a better future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
