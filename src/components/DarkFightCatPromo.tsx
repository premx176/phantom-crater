"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

export function DarkFightCatPromo() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.1 
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 1.05, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      scale: 1, 
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section className="min-h-[80vh] w-full flex items-center justify-center px-6 md:px-16 lg:px-32 relative overflow-hidden bg-transparent z-10 py-20">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-10%" }}
        className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        
        {/* Left Side: Smaller Image with Glow */}
        <motion.div variants={imageVariants} className="relative order-1 max-w-md mx-auto lg:mx-0">
          {/* Subtle Backglow */}
          <div className="absolute inset-0 bg-white/10 blur-[60px] rounded-[3rem] animate-pulse" />
          
          <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-neon-white border border-white/10 group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            <img 
              src="https://perfectpowersolutions.com/Images/Uploaded_Images/23/1.jpg" 
              alt="Dark Fight CAT Electric Bike" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            />
          </div>
        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div className="order-2 text-left space-y-6 flex flex-col justify-center">
          
          {/* Title & Price */}
          <motion.div variants={textVariants}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] mb-2 tracking-tight">
              DARK FIGHT CAT
            </h2>
            <p className="text-2xl lg:text-3xl font-light text-white/90 tracking-wide">
              ₹90,000 INR
            </p>
          </motion.div>

          {/* Description */}
          <motion.div variants={textVariants}>
            <p className="text-lg text-white/70 font-light leading-relaxed max-w-lg">
              A smart, affordable electric bike designed for daily commuting and practical use with strong performance and reliability.
            </p>
          </motion.div>

          {/* Highlights Box */}
          <motion.div variants={textVariants} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            <h3 className="text-base font-bold uppercase tracking-widest mb-4 border-b border-white/20 pb-3 text-white/90">
              Key Highlights
            </h3>
            <ul className="text-white/80 space-y-3 text-base font-light">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white shadow-neon-white" />
                250W BLDC Motor
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white shadow-neon-white" />
                Range: 70–90 km per charge
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white shadow-neon-white" />
                Lithium Battery (LiFePO4)
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white shadow-neon-white" />
                Anti-theft alarm with center locking
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white shadow-neon-white" />
                E-ABS braking system
              </li>
            </ul>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={textVariants} className="pt-4">
            <Link 
              href="/e-bikes" 
              className="inline-block px-8 py-3 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:shadow-[0_0_35px_rgba(255,255,255,0.8)] transition-all duration-300 hover:scale-105"
            >
              Explore More
            </Link>
          </motion.div>

        </motion.div>

      </motion.div>
    </section>
  );
}
