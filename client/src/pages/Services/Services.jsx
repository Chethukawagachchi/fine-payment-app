import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { motion } from "framer-motion";

const Services = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const scaleOnHover = {
    whileHover: { scale: 1.02 },
    transition: { type: "spring", stiffness: 300 }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 via-blue-50 to-white relative overflow-hidden">
      <div className="fixed inset-0 z-0 opacity-40">
        <div className="absolute w-[600px] h-[600px] -top-48 -left-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute w-[600px] h-[600px] -top-48 -right-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute w-[600px] h-[600px] -bottom-48 left-48 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      
      <Navbar />
      <div className="min-h-screen relative z-10">
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Fine.lk</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@400;500&display=swap"
            rel="stylesheet"
          />
          <style>{`
            body {
              font-family: 'Roboto', sans-serif;
            }
            .fade-in {
              opacity: 0;
              transform: translateY(30px);
              transition: opacity 0.8s ease-out, transform 0.8s ease-out;
            }
            .fade-in-visible {
              opacity: 1;
              transform: translateY(0);
            }
            .service-card {
              background: rgba(255, 255, 255, 0.8);
              backdrop-filter: blur(20px);
              border: 1px solid rgba(255, 255, 255, 0.3);
              box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
              transform-style: preserve-3d;
              perspective: 1000px;
            }
            
            .service-card:hover {
              transform: translateY(-8px) scale(1.01);
              background: rgba(255, 255, 255, 0.95);
              border-color: rgba(59, 130, 246, 0.4);
            }
            
            .service-image {
              transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
              filter: brightness(1.05) contrast(1.05);
            }
            
            .service-card:hover .service-image {
              transform: scale(1.08) translateZ(20px);
            }
            
            .gradient-text {
              background: linear-gradient(135deg, #1e40af, #3b82f6, #60a5fa);
              background-size: 200% 200%;
              -webkit-background-clip: text;
              background-clip: text;
              color: transparent;
              animation: gradient 8s ease infinite;
            }

            .floating {
              animation: floating 6s ease-in-out infinite;
            }
            
            @keyframes floating {
              0%, 100% { transform: translate(0, 0px) rotate(0deg); }
              25% { transform: translate(5px, 15px) rotate(1deg); }
              75% { transform: translate(-5px, -15px) rotate(-1deg); }
            }
          `}</style>
        </head>
        
        <div className="container mx-auto px-4 py-16 md:py-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-20 md:mb-32"
          >
            <h3 className="text-7xl md:text-9xl font-extrabold mb-8 md:mb-10 gradient-text">
              Fine.lk
            </h3>
            <h3 className="text-2xl md:text-3xl font-light mb-6 md:mb-10 text-gray-700">
              Clear Fine, Save Time
            </h3>
            <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-gray-600 font-light">
              Fine.lk simplifies the process of managing traffic fines for citizens, officers, and post offices. 
              Pay, report, and resolve issues conveniently while staying informed with real-time updates.
            </p>
          </motion.div>

          <div className="space-y-20 md:space-y-40">
            {/* Services sections with enhanced animations */}
            <motion.div 
              {...scaleOnHover}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="grid md:grid-cols-2 gap-12 md:gap-16 items-center service-card p-8 md:p-12 rounded-3xl"
            >
              <div className="space-y-6 order-2 md:order-1">
                <h3 className="text-3xl md:text-4xl font-bold gradient-text">For Citizens</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  For individuals, Fine.lk offers an intuitive system to manage
                  traffic fines. Users can easily pay fines online through
                  secure payment gateways or offline at partnered post offices,
                  ensuring inclusivity for all. The platform also features an
                  Online Report service, allowing users to file disputes or
                  report issues like lost fine slips, incorrect charges, or
                  grievances, all from the comfort of their homes. Additionally,
                  users can access Traffic Alerts, providing real-time updates
                  on road conditions, congestion, and safety notifications to
                  improve their travel experience.
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl shadow-xl floating">
                <img
                  src="city.jpg"
                  alt="Citizens using Fine.lk services"
                  className="w-full h-[250px] md:h-[400px] object-cover service-image"
                />
              </div>
            </motion.div>

            {/* Police Offices Section */}
            <motion.div 
              {...scaleOnHover}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="grid md:grid-cols-2 gap-12 md:gap-16 items-center service-card p-8 md:p-12 rounded-3xl"
            >
              <div className="overflow-hidden rounded-2xl shadow-xl floating">
                <img
                  src="po.png"
                  alt="Police office services"
                  className="w-full h-[250px] md:h-[400px] object-cover service-image"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold gradient-text">For Police Offices</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  For law enforcement officers, Fine.lk provides tools to issue
                  fines digitally, track payment statuses, and monitor
                  compliance through a centralized dashboard. Officers can also
                  manage dispute resolutions efficiently and generate analytical
                  reports to gain insights into trends and improve operations.
                </p>
              </div>
            </motion.div>

            {/* Post Office Section */}
            <motion.div 
              {...scaleOnHover}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="grid md:grid-cols-2 gap-12 md:gap-16 items-center service-card p-8 md:p-12 rounded-3xl"
            >
              <div className="space-y-6 order-2 md:order-1">
                <h3 className="text-3xl md:text-4xl font-bold gradient-text">For Post Offices</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  For post office officials, the platform streamlines offline
                  payment processing by enabling easy verification of fine
                  details and real-time synchronization of payment data with the
                  central system. Receipts are generated instantly, ensuring
                  accuracy and reducing manual errors.
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl shadow-xl floating">
                <img
                  src="post.png"
                  alt="Post office services"
                  className="w-full h-[250px] md:h-[400px] object-cover service-image"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
