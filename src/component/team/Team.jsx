


// "use client";
// import { useGetTeamMembersQuery } from '@/redux/feature/teamApi';
// import { baseUriBackend } from '@/utils/url';
// import React from 'react';
// import { motion } from 'framer-motion'; // 1. Import Framer Motion

// // Animation Variants
// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2 // Elements appear one after another
//     }
//   }
// };

// export default function Team() {
//   const { data: getTeamMembers, isLoading, isError } = useGetTeamMembersQuery({
//     page: 1,
//     limit: 10,
//     search: '',
//     designation: '',
//   });

//   const features = [
//     { id: 1, title: "Forest Planting", icon: "🔔", description: "It is a long established fact that a reader will be distracted by the readable content of a page." },
//     { id: 2, title: "Forest Planting", icon: "💧", description: "It is a long established fact that a reader will be distracted by the readable content of a page." },
//     { id: 3, title: "Sustainable Water", icon: "🍃", description: "It is a long established fact that a reader will be distracted by the readable content of a page." },
//     { id: 4, title: "Organic Farming", icon: "🌱", description: "It is a long established fact that a reader will be distracted by the readable content of a page." }
//   ];

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center">
//         <motion.div 
//           animate={{ scale: [1, 1.1, 1] }} 
//           transition={{ repeat: Infinity, duration: 1.5 }}
//           className="text-xl text-[#E6B94E] font-medium"
//         >
//           Loading team members...
//         </motion.div>
//       </div>
//     );
//   }

//   if (isError || !getTeamMembers?.data) {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center">
//         <div className="text-xl text-red-500">Error loading team members</div>
//       </div>
//     );
//   }

//   const teamMembers = getTeamMembers.data || [];

//   return (
//     <div className="min-h-screen bg-white font-sans text-gray-800 overflow-hidden">
      
//       {/* --- Farmers Section --- */}
//       <section className="py-16 px-4 bg-[#FFFDF5]">
//         <motion.div 
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           className="max-w-6xl mx-auto text-center"
//         >
//           <motion.span variants={fadeInUp} className="text-[#D4A017] font-bold tracking-widest text-xs uppercase block mb-2">
//             ● OUR MASTERS
//           </motion.span>
//           <motion.h2 variants={fadeInUp} className="text-4xl font-serif font-bold mb-12">
//             Meet Our <span className="text-[#E6B94E]">Teams</span>
//           </motion.h2>

//           <motion.div 
//             variants={staggerContainer}
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
//           >
//             {teamMembers.map((member) => (
//               <motion.div 
//                 key={member._id} 
//                 variants={fadeInUp}
//                 whileHover={{ y: -10 }} // Smooth lift on hover
//                 className="flex flex-col items-center"
//               >
//                 <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4 transform transition-transform hover:scale-105 duration-300">
//                   <img 
//                     src={`${baseUriBackend}${member.image}`} 
//                     alt={member.personName} 
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <h3 className="text-xl font-bold">{member.personName}</h3>
//                 <p className="text-gray-500 text-sm mb-4">{member.designation}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* --- Features Section --- */}
//       <section className="py-20 px-4">
//         <motion.div 
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           className="max-w-6xl mx-auto text-center"
//         >
//           <motion.span variants={fadeInUp} className="text-[#D4A017] font-bold tracking-widest text-xs uppercase block mb-2">
//             ● OUR FEATURE
//           </motion.span>
//           <motion.h2 variants={fadeInUp} className="text-4xl font-serif font-bold mb-12">
//             Let's Check Our <br />
//             <span className="text-[#E6B94E]">Feature</span>
//           </motion.h2>

//           <motion.div 
//             variants={staggerContainer}
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
//           >
//             {features.map((feature) => (
//               <motion.div 
//                 key={feature.id} 
//                 variants={fadeInUp}
//                 whileHover={{ 
//                   scale: 1.03,
//                   boxShadow: "0px 10px 30px rgba(0,0,0,0.05)"
//                 }}
//                 className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center transition-all border-b-4 border-b-[#E6B94E]"
//               >
//                 <motion.div 
//                   initial={{ rotate: 0 }}
//                   whileHover={{ rotate: 15 }}
//                   className="w-16 h-16 bg-[#FFF9E6] rounded-full flex items-center justify-center text-3xl mb-6 text-[#E6B94E]"
//                 >
//                   {feature.icon}
//                 </motion.div>
//                 <h4 className="text-lg font-bold mb-3">{feature.title}</h4>
//                 <p className="text-gray-400 text-sm leading-relaxed">
//                   {feature.description}
//                 </p>
//                 <div className="mt-6">
//                   <svg className="w-12 h-4 text-[#E6B94E] opacity-30" viewBox="0 0 100 20">
//                     <path d="M0 10 Q25 0 50 10 T100 10" fill="none" stroke="currentColor" strokeWidth="2" />
//                   </svg>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }


"use client";
import { useGetTeamMembersQuery } from '@/redux/feature/teamApi';
import { baseUriBackend } from '@/utils/url';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Team() {
  // 1. Force a re-render after mount to ensure Framer Motion sees the DOM
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const { data: getTeamMembers, isLoading, isError } = useGetTeamMembersQuery({
    page: 1,
    limit: 10,
    search: '',
    designation: '',
  });

  const features = [
    { id: 1, title: "Forest Planting", icon: "🔔", description: "It is a long established fact that a reader will be distracted." },
    { id: 2, title: "Water Conservation", icon: "💧", description: "It is a long established fact that a reader will be distracted." },
    { id: 3, title: "Sustainable Water", icon: "🍃", description: "It is a long established fact that a reader will be distracted." },
    { id: 4, title: "Organic Farming", icon: "🌱", description: "It is a long established fact that a reader will be distracted." }
  ];

  // 2. Loading State (Simplified to prevent layout shifts)
  if (isLoading || !mounted) {
    return <div className="min-h-screen bg-white" />;
  }

  if (isError) {
    return <div className="min-h-screen flex items-center justify-center">Error loading data.</div>;
  }

  const teamMembers = getTeamMembers?.data || [];

  return (
    <div className="min-h-screen bg-white">
      {/* TEAM SECTION */}
      <section className="py-16 px-4 bg-[#FFFDF5]">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          // 3. amount: 0 ensures it triggers as soon as 1px is visible
          viewport={{ once: true, amount: 0 }} 
          variants={staggerContainer}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl text-gray-400 font-serif font-bold mb-12">
            Meet Our <span className="text-[#E6B94E]">Teams</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <motion.div key={member._id} variants={fadeInUp} className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                  <img 
                    src={`${baseUriBackend}${member.image}`} 
                    alt={member.personName} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl text-gray-400 font-bold">{member.personName}</h3>
                <p className="text-gray-500 text-sm">{member.designation}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl text-gray-400 font-serif font-bold mb-12">
            Our <span className="text-[#E6B94E]">Features</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <motion.div 
                key={feature.id} 
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-md border-b-4 border-b-[#E6B94E]"
              >
                <div className="w-16 h-16 bg-[#FFF9E6] rounded-full flex items-center justify-center text-3xl mb-6 mx-auto">
                  {feature.icon}
                </div>
                <h4 className="text-lg text-gray-400 font-bold mb-3">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}