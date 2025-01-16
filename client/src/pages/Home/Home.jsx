import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import OurServices from "../../components/OurServices/OurServices";
import Card from "../../components/Card/Card";
import FeedBack from "../../components/FeedBack/FeedBack";
import Download from "../../components/Download/Download";
import MyMap from "../../components/MyMap/MyMap";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [slideIn, setSlideIn] = useState(false);
  
  const texts = ["Clear Fine", "Save Time", "Save Money", "Stay Safe"];
  const images = [
    "/37a.jpg",
    "/dd.png",
    "/20.jpg",
    "/67.jpg",

    "fine.jpg",
  ];
  
  const particleCount = 50;
  const particles = Array.from({ length: particleCount });

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.5,
      filter: "blur(20px) brightness(0.7)",
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px) brightness(1)",
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 1.2 },
        scale: { duration: 1.5 },
        filter: { duration: 1.2 }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.3,
      filter: "blur(20px) brightness(0.7)",
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.8 }
      }
    })
  };

  useEffect(() => {
    const timer = setTimeout(() => setSlideIn(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextIndex(prev => (prev + 1) % texts.length);
    }, 4000);
    return () => clearInterval(textInterval);
  });

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setImageIndex(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(imageInterval);
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsVisible(window.scrollY <= 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <motion.div className="relative">
        {/* Particle Effect Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: Math.random() * 0.5 + 0.3,
              }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                opacity: [null, Math.random() * 0.5 + 0.3],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Hero Section with Enhanced Animations */}
        <div className="relative h-[93.5vh] overflow-hidden">
          <AnimatePresence mode="wait" initial={false} custom={imageIndex}>
            <motion.div
              key={imageIndex}
              custom={imageIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
            >
              <motion.img 
                src={images[imageIndex]}
                alt={`Hero ${imageIndex + 1}`}
                className="w-full h-full object-cover"
                animate={{
                  scale: [1, 1.1],
                  x: [0, -20],
                  y: [0, -20],
                }}
                transition={{
                  duration: 5,
                  ease: "easeOut",
                  times: [0, 1],
                }}
              />
              
              {/* Enhanced overlays */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
              
              <motion.div 
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.4, 0.6, 0.4],
                background: [
                  "linear-gradient(to bottom, rgba(0,0,0,0.5), transparent, rgba(0,0,0,0.7))",
                  "linear-gradient(to bottom, rgba(0,0,0,0.6), transparent, rgba(0,0,0,0.8))",
                  "linear-gradient(to bottom, rgba(0,0,0,0.5), transparent, rgba(0,0,0,0.7))"
                ]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
          </AnimatePresence>
          
          {/* Remove or comment out the navigation dots section */}
          {/* If you want to keep the code but hide it, you can add a hidden className:
          <motion.div 
            className="hidden absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20"
            ...
          >
            {images.map((_, idx) => (...))}
          </motion.div>
          */}

          {/* Subtle gradient shadow for additional depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </div>
        
        {/* Updated Hero Content with centered positioning */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-center max-w-4xl px-4"
          >
            <motion.div
              animate={{ 
                textShadow: [
                  "0 2px 4px rgba(0,0,0,0.3)",
                  "0 2px 8px rgba(0,0,0,0.2)",
                  "0 2px 4px rgba(0,0,0,0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <h1 className="text-7xl font-bold mb-8 text-white tracking-tight drop-shadow-lg">
                Fine.lk{" "}
                <AnimatePresence mode="wait">
                  <motion.span
                    key={texts[textIndex]}
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    animate={{ 
                      opacity: 1, 
                      y: 0, 
                      filter: "blur(0px)",
                      backgroundSize: ["100% 100%", "200% 100%"],
                      backgroundPosition: ["0% 0%", "100% 0%"]
                    }}
                    exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                    className="text-transparent bg-clip-text"
                    style={{
                      backgroundImage: "linear-gradient(45deg, #60A5FA, #3B82F6, #60A5FA)",
                      backgroundSize: "200% 100%",
                      transition: "background-position 0.5s ease"
                    }}
                  >
                    {texts[textIndex]}
                  </motion.span>
                </AnimatePresence>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold text-white leading-relaxed drop-shadow-lg">
                Fine.lk simplifies the process of managing traffic fines for citizens,
                <br />
                officers, and post offices
              </h2>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Content Sections with Enhanced Animations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="relative z-10 bg-white"
      >
        <OurServices />
        <Card />
        <FeedBack />
        <Download />
        <MyMap />
      </motion.div>

      <Footer />
    </div>
  );
};

export default Home;