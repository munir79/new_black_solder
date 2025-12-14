"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";

// ==============================
// Animation Variants
// ==============================
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1, duration: 0.6 }
  }
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

const slideInFromLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

// ==============================
// Component
// ==============================
const ContactForm = ({ backgroundImage }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You would typically handle form submission logic (e.g., API call) here.
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Use the prop for the background image, falling back to the original placeholder
  const backgroundImageUrl = backgroundImage || '/assets/vision/sunny_day.jpg';

  return (
    <section className="relative py-24 lg:py-32 font-sans overflow-hidden">
      
      {/* 1. Background Image with Parallax-like feel */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat z-0"
        style={{ 
          // CRITICAL FIX: Ensure the value is a CSS string 'url(...)'
          backgroundImage: `url('${backgroundImageUrl}')` 
        }}
      /> 
      {/* The background div is a self-closing element with no children, but using a closing </div> is also valid. 
          In this context, using a standard closing tag is safer if you were worried about linting rules. */}

      {/* 2. Dark Overlay for readability */}
      <div className="absolute inset-0 bg-slate-900/60 z-0"></div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE: Text Content */}
          <motion.div variants={slideInFromLeft} className="text-white">
            <motion.div variants={fadeUpVariants} className="flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-amber-400 rounded-full"></div>
              <span className="text-sm font-bold text-amber-400 tracking-widest uppercase">
                Get In Touch
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeUpVariants} 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
            >
              Growing a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-lime-300">
                Better Future
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeUpVariants} 
              className="text-slate-200 text-lg leading-relaxed mb-10 max-w-lg"
            >
              We are dedicated to organic farming and sustainable feed solutions. Have a question or want to partner with us? Reach out today.
            </motion.p>

            {/* Contact Details with transparent backgrounds */}
            <div className="space-y-6 mb-10">
              {/* Address */}
              <motion.div variants={fadeUpVariants} className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-900 transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Location</h4>
                  <p className="text-slate-300">Mirpur, Dhaka-1216</p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div variants={fadeUpVariants} className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-900 transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Phone</h4>
                  <a href="tel:+8801711950066" className="text-slate-300 hover:text-amber-400 transition-colors">
                    +880 1711 950066
                  </a>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div variants={fadeUpVariants} className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-900 transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Email</h4>
                  <a href="mailto:info@blacksoldierint.com" className="text-slate-300 hover:text-amber-400 transition-colors">
                    info@blacksoldierint.com
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Glass Card Form */}
          <motion.div variants={slideInFromRight}>
            <div className="relative">
               {/* Decorative glow behind the glass */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-amber-500/20 blur-[100px] rounded-full -z-10 pointer-events-none"></div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-10 rounded-2xl shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-2">Send Message</h3>
                <p className="text-slate-300 mb-8 text-sm">Fill out the form below and we will get back to you shortly.</p>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-semibold text-amber-400 uppercase tracking-wider ml-1">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl bg-slate-900/50 border border-white/10 text-white placeholder:text-slate-500 focus:border-amber-400 focus:bg-slate-900/80 focus:ring-1 focus:ring-amber-400 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-semibold text-amber-400 uppercase tracking-wider ml-1">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl bg-slate-900/50 border border-white/10 text-white placeholder:text-slate-500 focus:border-amber-400 focus:bg-slate-900/80 focus:ring-1 focus:ring-amber-400 outline-none transition-all"
                      placeholder="email@company.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-semibold text-amber-400 uppercase tracking-wider ml-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      required
                      className="w-full px-5 py-4 rounded-xl bg-slate-900/50 border border-white/10 text-white placeholder:text-slate-500 focus:border-amber-400 focus:bg-slate-900/80 focus:ring-1 focus:ring-amber-400 outline-none transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all duration-300 flex items-center justify-center gap-2 mt-4"
                  >
                    <span>Submit Request</span>
                    <Send className="w-4 h-4" />
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
};

export default ContactForm;