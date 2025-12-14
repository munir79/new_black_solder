"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Leaf, Feather } from "lucide-react";

// ==============================
// Animation Variants
// ==============================
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1, duration: 0.6 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

// ==============================
// Component
// ==============================
const Information = () => {

  return (
    <motion.article 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      // *** MODIFICATION: Changed dark mode background to a light green/natural tone ***
      className="py-24 md:py-36 bg-white dark:bg-green-50 overflow-hidden" 
    >
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE: Image Section (Col-span 5) */}
          <motion.div variants={itemVariants} className="lg:col-span-5 relative">
            {/* Main Image Card */}
            <div className="relative w-full h-full min-h-[350px] md:min-h-[480px] lg:min-h-[600px] rounded-3xl overflow-hidden ">
              <Image
                src="/assets/vision/Gemini_Generated_Image_dlsmehdlsmehdlsm.png" 
                alt="Sustainable agriculture and organic waste conversion"
                fill
                // *** MODIFICATION: Removed dark:grayscale-0 to ensure color image in "light-dark" mode ***
                className="object-cover transition-transform duration-1000 hover:scale-[1.03] grayscale"
              />
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              
              {/* Featured Label */}
              <div className="absolute top-6 left-6 flex items-center bg-amber-400 text-slate-900 px-4 py-2 rounded-full font-semibold text-xs uppercase tracking-wider">
                <Leaf className="w-4 h-4 mr-2" />
                Organic Focus
              </div>
            </div>

            {/* Decorative Corner Element (Bottom Right) */}
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-amber-400 rounded-full opacity-80 mix-blend-multiply blur-xl pointer-events-none z-0"></div>
          </motion.div>
          
          {/* RIGHT SIDE: Text Content (Col-span 7) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-7 flex flex-col space-y-8 relative lg:pl-10"
          >
            {/* Title/Header Area */}
            <motion.div variants={itemVariants}>
                <p 
                  // *** MODIFICATION: Adjusted dark mode text color for contrast on light green bg ***
                  className="text-sm font-bold text-amber-500 dark:text-amber-700 tracking-widest uppercase mb-4 flex items-center gap-2">
                    <Leaf className="w-5 h-5"/>
                    Our Sustainable Mission
                </p>
                <h2 
                  // *** MODIFICATION: Adjusted dark mode text color for contrast on light green bg ***
                  className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-800 leading-tight">
                    Engineering a <span className="text-amber-500 dark:text-amber-700">Cleaner, Healthier</span> World.
                </h2>
            </motion.div>
            
            {/* Quote Block - Stylized */}
            <motion.div variants={itemVariants} className="relative z-10 p-6 rounded-xl border-l-4 border-amber-400 bg-white dark:bg-green-100 shadow-lg">
                <blockquote 
                  // *** MODIFICATION: Adjusted dark mode text color for contrast on light green bg ***
                  className="text-xl italic font-medium leading-relaxed text-slate-700 dark:text-slate-700">
                    <span className="absolute -left-5 top-1 text-5xl text-amber-400 opacity-70 font-serif leading-none select-none">“</span>
                    As a pioneer in sustainable solutions, we specialize in cutting-edge
                    technologies like **Black Soldier Fly larvae production** for organic
                    waste conversion and Faecal Sludge Treatment Plants (FSTP) for safe
                    sanitation.
                </blockquote>
            </motion.div>
            

            {/* Paragraph 1 */}
            <motion.p 
              // *** MODIFICATION: Adjusted dark mode text color for contrast on light green bg ***
              variants={itemVariants} className="text-slate-700 dark:text-slate-700 text-lg leading-relaxed">
                But technology is only half the solution. Our core belief is in **empowerment**. We equip waste workers, engineers, and local communities
                with the innovative resources and <span className="font-bold text-amber-600 dark:text-amber-700">green skills</span> needed to become the
                heroes of this transformation. We don't just build systems; we build
                capacity, fostering a circular economy that values every resource.
            </motion.p>
            
            {/* Paragraph 2 */}
            <motion.p 
              // *** MODIFICATION: Adjusted dark mode text color for contrast on light green bg ***
              variants={itemVariants} className="text-slate-700 dark:text-slate-700 text-lg leading-relaxed">
                From consultation to production, Black Soldier International is your
                partner in engineering a cleaner, healthier, and more sustainable
                world.
            </motion.p>

            {/* Call to Action Button */}
            <motion.div variants={itemVariants}>
              <a
                href="/solutions"
                className="group inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-500 transition-all duration-300 text-slate-900 font-bold px-8 py-3.5 rounded-full shadow-lg shadow-amber-500/30 hover:shadow-xl"
              >
                <span>Discover Our Solutions</span>
                <Feather className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </motion.article>
  );
};

export default Information;