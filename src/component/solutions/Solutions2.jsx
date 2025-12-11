

"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";


const ArrowRightIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
      clipRule="evenodd"
    />
  </svg>
);

const CheckCircleIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.636a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.06l2.439 2.44a.75.75 0 001.12-.047l4.04-5.564z"
      clipRule="evenodd"
    />
  </svg>
);



const introductionData = {
  tag: "# OUR INTRODUCTION",
  title: "Pure Agriculture And Organic Form",
  description:
    "There are many variations of passages available but the majority have suffered alteration. If you are going to use a passage you need to be sure there's nothing embarrassing hidden.",
  points: [
    "Lorem ipsum is not simply random text",
    "If you are going to use a passage",
    "Making this the first true generator on the internet",
    "Various versions have evolved over the years",
  ],
  button: {
    label: "Discover More",
    href: "/discover",
  },
  imageUrl: "/assets/solutions/sun2.jpg",
};



const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
      duration: 0.6
    }
  }
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const slideInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const buttonHoverVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  tap: {
    scale: 0.98
  }
};

const accentLineVariants = {
  hidden: { height: 0 },
  visible: {
    height: "75%",
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const accentCircleVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 0.7,
    transition: {
      duration: 0.6,
      delay: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};



const Solutions2 = () => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="py-20 md:py-28 bg-white font-sans overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Text Content */}
          <motion.div 
            variants={slideInFromRight}
            className="lg:pl-10"
          >
            <motion.p 
              variants={fadeUpVariants}
              className="text-sm font-bold text-amber-400 tracking-widest uppercase mb-3"
            >
              {introductionData.tag}
            </motion.p>

            <motion.h2 
              variants={fadeUpVariants}
              className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6"
            >
              Pure Agriculture{" "}
              <span className="text-amber-400">And Organic Form</span>
            </motion.h2>

            <motion.p 
              variants={fadeUpVariants}
              className="text-gray-600 text-base md:text-lg leading-relaxed mb-8"
            >
              {introductionData.description}
            </motion.p>

            <ul className="space-y-4 mb-10">
              {introductionData.points.map((point, index) => (
                <motion.li 
                  key={index}
                  custom={index}
                  variants={listItemVariants}
                  className="flex items-start space-x-3"
                >
                  <CheckCircleIcon className="h-6 w-6 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-base md:text-lg">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              variants={fadeUpVariants}
              whileHover="hover"
              whileTap="tap"
            >
              
            </motion.div>
          </motion.div>
          {/* Image Section */}
          <motion.div 
            variants={slideInFromLeft}
            className="relative"
          >
            <motion.div 
              variants={scaleInVariants}
              className="relative w-full h-[300px] sm:h-[380px] md:h-[450px] rounded-xl overflow-hidden shadow-xl"
            >
              <div
                className="w-full h-full bg-center bg-cover"
                style={{ backgroundImage: `url(${introductionData.imageUrl})` }}
              ></div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute inset-0 bg-lime-500"
              ></motion.div>
            </motion.div>

            {/* Right Accent Line */}
            <motion.div 
              variants={accentLineVariants}
              className="hidden lg:block absolute top-5 right-[-12px] w-2 bg-amber-400 rounded-full"
            ></motion.div>

            {/* Bottom-left Accent Circle */}
            <motion.div 
              variants={accentCircleVariants}
              className="absolute bottom-[-20px] left-[-20px] w-28 h-28 bg-amber-400 rounded-full"
            ></motion.div>
           <div className="flex justify-end mt-6">
             <Link
                href={introductionData.button.href}
                className="inline-flex items-center space-x-2 bg-amber-400 hover:bg-amber-500 transition-all duration-300 text-white px-7 py-3 font-bold text-sm rounded-md shadow-md"
              >
                <motion.span 
                  className="flex items-center space-x-2"
                  variants={buttonHoverVariants}
                >
                  <span>{introductionData.button.label}</span>
                  <ArrowRightIcon className="h-5 w-5" />
                </motion.span>
              </Link>
           </div>
          </motion.div>
          

          
        </div>
      </div>
    </motion.section>
  );
};

export default Solutions2;
