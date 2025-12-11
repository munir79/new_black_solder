

// import React from 'react';
// import Link from 'next/link';

// // ==========================================
// // 1. Internal SVG Icon Components
// // ==========================================

// const ArrowRightIcon = ({ className }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 20 20"
//     fill="currentColor"
//     className={className}
//   >
//     <path
//       fillRule="evenodd"
//       d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
//       clipRule="evenodd"
//     />
//   </svg>
// );

// const PlayIcon = ({ className }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     className={className}
//   >
//     <path
//       fillRule="evenodd"
//       d="M4.5 5.653c0-1.427 1.529-2.348 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 20.322c-1.25.705-2.779-.218-2.779-1.643V5.653z"
//       clipRule="evenodd"
//     />
//   </svg>
// );

// // ==========================================
// // 2. Data
// // ==========================================

// const heroData = {
//   tagline: 'Leading The Way In Sustainable Farming',
//   headline: 'Transform Today’s Challenges Into Tomorrow’s Opportunities',
//   description:
//     'At Black Soldier International, we are committed to building a cleaner, safer, and more sustainable planet..',
//   buttonPrimary: { label: 'Discover Our Services', href: '/services' },
//   buttonSecondary: { label: 'Watch Video', href: '#video' },
// };

// // ==========================================
// // 3. Hero Component
// // ==========================================

// const Hero = () => {
//   const backgroundStyle = {
//     backgroundImage: `url('/assets/hero/pexels-quang-nguyen-vinh-222549-2132107.jpg')`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//   };

//   return (
//     <div
//       className="relative min-h-screen flex items-center overflow-hidden"
//       style={backgroundStyle}
//     >
//       {/* Gradient Overlay Left (darker) → Right (clear) */}
//       <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/50 to-slate-900/0"></div>

//       {/* Content */}
//       <div className="relative w-full container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 text-white py-20">
//         <div className="max-w-4xl">
//           {/* Tagline */}
//           <p className="text-[1px] sm:text-[10px] font-medium text-amber-400 uppercase tracking-widest mb-4">
//             {heroData.tagline}
//           </p>

//           {/* Headline */}
//           <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
//             Transform Today’s Challenges Into <br className="hidden sm:block" />
//             Tomorrow’s Opportunities
//           </h1>

//           {/* Description */}
//           <p className="text-base sm:text-lg text-gray-300 mb-10 max-w-2xl">
//             {heroData.description}
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
//             {/* Primary Button */}
//             <Link
//               href={heroData.buttonPrimary.href}
//               className="flex items-center space-x-2 bg-amber-400 hover:bg-amber-500 text-slate-900 text-base font-bold px-8 py-4 rounded-sm transition duration-300 shadow-lg"
//             >
//               <span>{heroData.buttonPrimary.label}</span>
//               <ArrowRightIcon className="h-5 w-5" />
//             </Link>

//             {/* Secondary Button */}
//             <Link
//               href={heroData.buttonSecondary.href}
//               className="flex items-center space-x-3 border-2 border-amber-400 hover:bg-amber-400 hover:text-slate-900 transition duration-300 px-6 py-4 rounded-sm font-semibold"
//             >
//               <div className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-400 text-slate-900">
//                 <PlayIcon className="h-5 w-5 ml-0.5" />
//               </div>
//               <span className="text-base">{heroData.buttonSecondary.label}</span>
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Fade */}
//       <div className="absolute bottom-0 left-0 w-full h-16 bg-linear-to-t from-slate-900 to-transparent"></div>
//     </div>
//   );
// };

// export default Hero;

"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// ==========================================
// 1. Internal SVG Icon Components
// ==========================================

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

const PlayIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M4.5 5.653c0-1.427 1.529-2.348 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 20.322c-1.25.705-2.779-.218-2.779-1.643V5.653z"
      clipRule="evenodd"
    />
  </svg>
);

// ==========================================
// 2. Data
// ==========================================

const heroData = {
  tagline: 'Leading The Way In Sustainable Farming',
  headline: 'Transform Today’s Challenges Into Tomorrow’s Opportunities',
  description:
    'At Black Soldier International, we are committed to building a cleaner, safer, and more sustainable planet..',
  buttonPrimary: { label: 'Discover Our Services', href: '/services' },
  buttonSecondary: { label: 'Watch Video', href: '#video' },
};

// ==========================================
// 3. Animation Variants
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
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const buttonHoverVariants = {
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  tap: {
    scale: 0.98
  }
};

// ==========================================
// 3. Hero Component
// ==========================================

const Hero = () => {
  const backgroundStyle = {
    backgroundImage: `url('/assets/hero/pexels-quang-nguyen-vinh-222549-2132107.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={backgroundStyle}
    >
      {/* Gradient Overlay Left (darker) → Right (clear) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/50 to-slate-900/0"
      />

      {/* Content */}
      <div className="relative w-full container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 text-white py-20">
        <motion.div 
          variants={containerVariants}
          className="max-w-4xl"
        >
          {/* Tagline */}
          <motion.p 
            variants={fadeUpVariants}
            className="text-[1px] sm:text-[10px] font-medium text-amber-400 uppercase tracking-widest mb-4"
          >
            {heroData.tagline}
          </motion.p>

          {/* Headline */}
          <motion.h1 
            variants={fadeUpVariants}
            className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
          >
            Transform Today’s Challenges Into <br className="hidden sm:block" />
            Tomorrow’s Opportunities
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={fadeUpVariants}
            className="text-base sm:text-lg text-gray-300 mb-10 max-w-2xl"
          >
            {heroData.description}
          </motion.p>

          {/* Buttons */}
          <motion.div 
            variants={scaleInVariants}
            className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0"
          >
            {/* Primary Button */}
            <motion.div
              variants={fadeInVariants}
              whileHover="hover"
              whileTap="tap"
            >
            <div className='mt-3'>
                <Link
                href={heroData.buttonPrimary.href}
                className="flex items-center space-x-2 bg-amber-400 hover:bg-amber-500 text-slate-900 text-base font-bold px-8 py-4 rounded-sm transition-colors duration-300 shadow-lg"
              >
                <motion.span
                  variants={buttonHoverVariants}
                  className="flex items-center space-x-2"
                >
                  <span>{heroData.buttonPrimary.label}</span>
                  <ArrowRightIcon className="h-5 w-5" />
                </motion.span>
              </Link>
            </div>
            </motion.div>

            {/* Secondary Button */}
            <motion.div
              variants={fadeInVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                href={heroData.buttonSecondary.href}
                className="flex items-center space-x-3 mt-[7px] border-2 border-amber-400 hover:bg-amber-400 hover:text-slate-900 transition-colors duration-300 px-8 py-2 rounded-sm font-semibold"
              >
                <motion.div 
                  className="flex items-center space-x-3"
                  variants={buttonHoverVariants}
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-400 text-slate-900">
                    <PlayIcon className="h-5 w-5 ml-0.5" />
                  </div>
                  <span className="text-base">{heroData.buttonSecondary.label}</span>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="absolute bottom-0 left-0 w-full h-16 bg-linear-to-t from-slate-900 to-transparent"
      />
    </motion.div>
  );
};

export default Hero;