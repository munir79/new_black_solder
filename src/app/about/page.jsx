
"use client";
import ContactForm from '@/component/common/ContactForm';
import Information from '@/component/common/Information';
import PublicLayOut from '@/component/publicLayOut/PublicLayOut';
import { motion } from "framer-motion";

import React from 'react';

const page = () => {
      const headerImageUrl = '/assets/NEW/Greenhouse-agriculture_0.jpg';

    return (
        <div>
           <PublicLayOut>
            <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full h-[300px] relative bg-gray-900 overflow-hidden font-sans"
        style={{ 
          backgroundImage: `url(${headerImageUrl})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center p-4">
          <div className="text-center max-w-4xl mx-auto">
            {/* Header Text - Now animated within the hero section */}
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-sm font-bold text-amber-300 tracking-widest uppercase mb-3"
            >
              # OUR TWO-FOLD VISION
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4"
            >
              From <span className="text-amber-400">Waste World</span> to a World Without Waste
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-gray-200 text-lg max-w-3xl mx-auto hidden sm:block"
            >
              Our strategy is to lead the transition from a resource-wasting linear economy to a circular, sustainable model where efficiency, value, and purpose are prioritized.
            </motion.p>

          </div>
        </div>
      </motion.div>
            <Information/>
                <ContactForm  backgroundImage={'/assets/vision/sunny_day.jpg'} />
           </PublicLayOut>
        </div>
    );
};

export default page;