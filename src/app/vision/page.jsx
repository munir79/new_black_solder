"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Zap, Feather, Leaf } from "lucide-react";
import PublicLayOut from "@/component/publicLayOut/PublicLayOut";
import ContactForm from "@/component/common/ContactForm";
import FAQ from "@/component/faq/FAQ";

// ==========================================
// 1. Re-using Animation Variants (for consistency)
// ==========================================

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
      duration: 0.6
    }
  }
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// ==========================================
// 2. Data
// ==========================================

const visionData = [
  {
    id: 1,
    title: "Physical Waste: The World Without Waste",
    description:
      "First, we address the physical waste crisis directly by deploying and scaling cutting-edge solutions like Black Soldier Fly bioconversion, Faecal Sludge Treatment Plants (FSTP), and water safety programs. This is the tangible journey from environmental inefficiency toward a 'World Without Waste,' driven by resource optimization and economic resilience.",
    icon: Leaf,
  },
  {
    id: 2,
    title: "Systemic Waste: Building a Skilled, Modern Industry",
    description:
      'Second, we eliminate systemic inefficiencies caused by fragmented systems and a lack of skilled resources. We build local capacity, share innovative resources, and impart green skills to waste workers and engineers. We are not just building infrastructure; we are building a robust, skilled, and technologically advanced industry ecosystem.',
    icon: Zap,
  },
];

// ==========================================
// 3. Simple & Aesthetic Vision Component
// ==========================================

const Vision = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState('/assets/solutions/Gemini_Generated_Image_efaeczefaeczefae.png');
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const contentRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    // Preload the background image
    const img = new Image();
    img.src = '/assets/solutions/Gemini_Generated_Image_efaeczefaeczefae.png';
    img.onload = () => {
      setImageLoaded(true);
      setBackgroundImage('/assets/solutions/Gemini_Generated_Image_efaeczefaeczefae.png');
      // Small delay to ensure smooth transition
      setTimeout(() => {
        setIsHeroVisible(true);
        setIsContentVisible(true);
        controls.start("visible");
      }, 300);
    };
    img.onerror = () => {
      // If image fails to load, still show content with fallback
      setImageLoaded(true);
      setBackgroundImage('/assets/solutions/Gemini_Generated_Image_efaeczefaeczefae.png');
      setIsHeroVisible(true);
      setIsContentVisible(true);
      controls.start("visible");
    };
  }, [controls]);

  // Fallback: Animate content after a timeout if intersection observer doesn't trigger
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isContentVisible) {
        setIsContentVisible(true);
        controls.start("visible");
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [isContentVisible, controls]);

  const headerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: imageLoaded ? 'transparent' : '#111827',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <PublicLayOut>
      {/* --- Full-Width, 300px Header with Image and Text --- */}
      <div 
        className="w-full h-[300px] relative overflow-hidden font-sans bg-gray-900"
        style={headerStyle}
      >
        {/* Loading overlay while image loads */}
        <div className={`absolute inset-0 bg-gray-900 transition-opacity duration-700 ${imageLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <div className="flex items-center justify-center h-full">
            <div className="w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>

        {/* Hero content */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isHeroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-slate-900/60 flex items-center justify-center p-4"
        >
          <div className="text-center max-w-4xl mx-auto">
            {/* Header Text - Now animated within the hero section */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-sm font-bold text-amber-300 tracking-widest uppercase mb-3"
            >
              # OUR TWO-FOLD VISION
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4"
            >
              From <span className="text-amber-400">Waste World</span> to a World Without Waste
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-gray-200 text-lg max-w-3xl mx-auto hidden sm:block"
            >
              Our strategy is to lead the transition from a resource-wasting linear economy to a circular, sustainable model where efficiency, value, and purpose are prioritized.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* --- Main Content Section (Now just the cards and conclusion) --- */}
      <motion.div
        ref={contentRef}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="bg-white py-20 md:py-28 font-sans"
      >
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          
          {/* --- Two Pillars/Cards Section (Cool and Aesthetic) --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {visionData.map(({ id, description, icon: Icon, title }, index) => (
              <motion.div
                key={id}
                variants={cardVariants}
                custom={index}
                className="p-8 md:p-10 border-2 border-gray-100 rounded-2xl shadow-xl transition-all duration-300 transform hover:shadow-2xl hover:border-amber-400 relative overflow-hidden group bg-white"
              >
                {/* Pillar Number/Index */}
                <div className="absolute top-0 right-0 p-4 text-7xl font-extrabold text-amber-500/10 transition-transform duration-500 group-hover:scale-110 group-hover:text-amber-500/15">
                  0{id}
                </div>

                {/* Icon and Title */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-400 text-slate-900 shadow-md flex-shrink-0 group-hover:bg-amber-500 transition-colors duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 leading-snug">
                    {title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-base leading-relaxed">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* --- Concluding Statement (Simple and Central) --- */}
          <motion.div
            variants={fadeUpVariants}
            transition={{ delay: 0.5 }}
            className="text-center text-gray-700 max-w-4xl mx-auto text-lg leading-relaxed mt-16 pt-8 border-t border-gray-100"
          >
            Our commitment is to act as a catalyst, providing <strong>technical expertise and strategic capabilities</strong> to prove that a World Without Waste is not just an ideal, but a viable, profitable, and necessary future for Bangladesh and beyond.
          </motion.div>
        </div>
      </motion.div>

      <FAQ/>

      <ContactForm backgroundImage='/assets/navserivice/Gemini_Generated_Image_ixoyq2ixoyq2ixoy.png'/>
    </PublicLayOut>
  );
};

export default Vision;