// "use client";
// import React from 'react';
// import Link from 'next/link';
// import { motion } from 'framer-motion';

// // ==========================================
// // 1. Internal SVG Icon Components
// // ==========================================

// const LeafIcon = ({ className }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     className={className}
//   >
//     <path d="M16.5 6a3 3 0 00-3.75-2.9c-1.8.4-4.25 2.3-5.25 4.9C6.4 8.65 4.6 9.4 3 9.4c-1.6 0-2.4 1.2-1.5 2.5 1.5 2.1 4.5 3.6 7 4.1-1.5 2.5-1.5 4.5-1.5 5 0 1.2 1.3 1.2 2 1.2.7 0 3.5-1.2 5.5-5.5 1.7-3.7 2.3-8.6 2-10.7z" />
//   </svg>
// );

// const WavyBottom = () => (
//   <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
//     <svg
//       className="relative block w-[calc(100%+1.3px)] h-[60px] sm:h-[100px]"
//       data-name="Layer 1"
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 1200 120"
//       preserveAspectRatio="none"
//     >
//         <path
//             d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
//             className="fill-white"
//             transform="rotate(180 600 60)"
//         ></path>
//     </svg>
//   </div>
// );

// // ==========================================
// // 2. Data
// // ==========================================

// const heroData = {
//   tagline: 'WELCOME TO TRUBUS',
//   headline: 'Nurturing Nature, Feeding the World',
//   description:
//     'Through organic agriculture, we create balance between productivity and preservation.',
//   buttonPrimary: { label: 'Discover more', href: '/services' },
// };

// // ==========================================
// // 3. Animation Variants
// // ==========================================

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.2, delayChildren: 0.1, duration: 0.6 }
//   }
// };

// const fadeUpVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
//   }
// };

// const buttonHoverVariants = {
//   hover: { scale: 1.05 },
//   tap: { scale: 0.95 }
// };

// // ==========================================
// // 4. Hero Component
// // ==========================================

// const ServicesHero = () => {
//   const backgroundStyle = {
//     // Replace this URL with your actual image path
//     backgroundImage: `url('/assets/navserivice/Gemini_Generated_Image_ixoyq2ixoyq2ixoy.png')`,

//     // CHANGE HERE: '100% 100%' forces the image to stretch to the container width and height
//     backgroundSize: '100% 100%',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//   };

//   return (
//     <div className="relative min-h-[85vh] flex items-center overflow-hidden" style={backgroundStyle}>

//       {/* Dark Overlay for text readability */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

//       {/* Content Container */}
//       <div className="relative w-full container mx-auto px-6 md:px-12 lg:px-20 text-white z-10 pt-10 pb-24">
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//           className="max-w-xl"
//         >
//           {/* Tagline */}
//           <motion.div
//             variants={fadeUpVariants}
//             className="flex items-center space-x-2 mb-4"
//           >
//             <LeafIcon className="w-5 h-5 text-white/90" />
//             <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-white/90">
//               {heroData.tagline}
//             </span>
//           </motion.div>

//           {/* Headline */}
//           <motion.h1
//             variants={fadeUpVariants}
//             className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] mb-6 drop-shadow-lg"
//           >
//             {heroData.headline}
//           </motion.h1>

//           {/* Description */}
//           <motion.p
//             variants={fadeUpVariants}
//             className="text-base sm:text-lg font-medium text-white/90 mb-10 max-w-lg leading-relaxed drop-shadow-md"
//           >
//             {heroData.description}
//           </motion.p>

//           {/* Button */}
//           <motion.div variants={fadeUpVariants}>
//             <Link href={heroData.buttonPrimary.href}>
//               <motion.button
//                 variants={buttonHoverVariants}
//                 whileHover="hover"
//                 whileTap="tap"
//                 className="bg-[#FFC107] hover:bg-[#FFD54F] text-slate-900 text-sm sm:text-base font-bold px-8 py-3 rounded-sm shadow-lg transition-colors duration-300"
//               >
//                 {heroData.buttonPrimary.label}
//               </motion.button>
//             </Link>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Wavy Bottom */}
//       <WavyBottom />

//     </div>
//   );
// };

// export default ServicesHero;

'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// ==========================================
// 1. Internal SVG Icon Components
// ==========================================

const LeafIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M16.5 6a3 3 0 00-3.75-2.9c-1.8.4-4.25 2.3-5.25 4.9C6.4 8.65 4.6 9.4 3 9.4c-1.6 0-2.4 1.2-1.5 2.5 1.5 2.1 4.5 3.6 7 4.1-1.5 2.5-1.5 4.5-1.5 5 0 1.2 1.3 1.2 2 1.2.7 0 3.5-1.2 5.5-5.5 1.7-3.7 2.3-8.6 2-10.7z" />
  </svg>
);

const WavyBottom = () => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
    <svg
      className="relative block w-[calc(100%+1.3px)] h-[60px] sm:h-[100px]"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        className="fill-white"
        transform="rotate(180 600 60)"
      ></path>
    </svg>
  </div>
);

// ==========================================
// 2. Animation Variants
// ==========================================

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1, duration: 0.6 },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const buttonHoverVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

// ==========================================
// 3. Hero Component with Props
// ==========================================

const ServicesHero = ({ backgroundImageUrl, description, headline, tagline, href }) => {
  const backgroundStyle = {
    backgroundImage: `url('${backgroundImageUrl}')`,
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div
      className="relative min-h-[85vh] flex items-center overflow-hidden"
      style={backgroundStyle}
    >
      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

      {/* Content Container */}
      <div className="relative w-full container mx-auto px-6 md:px-12 lg:px-20 text-white z-10 pt-10 pb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-xl"
        >
          {/* Tagline */}
          <motion.div variants={fadeUpVariants} className="flex items-center space-x-2 mb-4">
            <LeafIcon className="w-5 h-5 text-white/90" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-white/90">
              {tagline}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUpVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] mb-6 drop-shadow-lg"
          >
            {headline}
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUpVariants}
            className="text-base sm:text-lg font-medium text-white/90 mb-10 max-w-lg leading-relaxed drop-shadow-md"
          >
            {description}
          </motion.p>

          {/* Button */}
          <motion.div variants={fadeUpVariants}>
            <Link href={href}>
              <motion.button
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
                className="bg-[#FFC107] hover:bg-[#FFD54F] text-slate-900 text-sm sm:text-base font-bold px-8 py-3 rounded-sm shadow-lg transition-colors duration-300"
              >
                Discover more
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Wavy Bottom */}
      <WavyBottom />
    </div>
  );
};

export default ServicesHero;
