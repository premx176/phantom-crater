"use client";

import { motion, Variants } from "framer-motion";
import { DarkFightCatPromo } from "./DarkFightCatPromo";

export function StorySections() {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const galleryImages = [
    "https://perfectpowersolutions.com/Images/Uploaded_Images/23/1.jpg",
    "https://perfectpowersolutions.com/Images/Uploaded_Images/21/1.jpg",
    "https://perfectpowersolutions.com/Images/Uploaded_Images/24/1.jpg"
  ];

  return (
    <div className="relative z-10 w-full pb-[10vh]">
      
      {/* 1. HERO */}
      <section className="min-h-[100vh] flex flex-col justify-center items-center px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-10%" }}
          variants={sectionVariants}
          className="max-w-4xl py-[20vh]"
        >
          <motion.h2 className="text-xs md:text-sm font-medium tracking-[0.3em] text-white uppercase mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,1)]">
            MG Wheels
          </motion.h2>
          <motion.h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
            Pure Electric.<br/>Pure Power.
          </motion.h1>
          <motion.p className="text-xl text-white/80 font-light max-w-2xl mx-auto drop-shadow-md">
            The future of low-cost, durable mobility in India.
          </motion.p>
        </motion.div>
      </section>

      {/* --- HIGHLIGHTS --- */}
      <section className="min-h-[100vh] flex flex-col justify-center items-center px-6 text-center py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-10%" }}
          variants={sectionVariants}
          className="max-w-5xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] mb-12">
            Leading the Charge.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/50 backdrop-blur-3xl p-8 rounded-3xl border border-white/10 shadow-neon-white transition-all hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold text-2xl mb-4 shadow-neon-white mx-auto">1</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Low-Cost Mobility</h3>
              <p className="text-white/60 font-light text-sm">Engineered to drive expenses down, running at approximately ₹5 for every 100km.</p>
            </div>
            <div className="bg-black/50 backdrop-blur-3xl p-8 rounded-3xl border border-white/10 shadow-neon-white transition-all hover:scale-105 md:translate-y-8">
              <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold text-2xl mb-4 shadow-neon-white mx-auto">2</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Durable EV</h3>
              <p className="text-white/60 font-light text-sm">Built with high carbon steel bodies and hydraulic discs engineered to withstand 200kg+ loads.</p>
            </div>
            <div className="bg-black/50 backdrop-blur-3xl p-8 rounded-3xl border border-white/10 shadow-neon-white transition-all hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold text-2xl mb-4 shadow-neon-white mx-auto">3</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Eco-Friendly</h3>
              <p className="text-white/60 font-light text-sm">Silent, fast-charging 60V setups minimizing environmental footprint.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- DARK FIGHT CAT PROMO --- */}
      <DarkFightCatPromo />

      {/* --- GALLERY SECTION --- */}
      <section className="min-h-[100vh] flex flex-col justify-center items-center px-6 md:px-16 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-10%" }}
          variants={sectionVariants}
          className="w-full max-w-7xl"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] mb-3">Gallery</h2>
            <p className="text-lg text-white/50 tracking-widest uppercase">The Full Fleet</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((src, idx) => (
              <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden group shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-500 cursor-pointer">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10" />
                <img src={src} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 blur-[1px] group-hover:blur-0" alt="Fleet Gallery" />
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* --- HAPPY CUSTOMER SHOWCASE --- */}
      <section className="relative w-full h-[60vh] md:h-[80vh] flex flex-col justify-center items-center overflow-hidden">
        
        {/* Background Image with Zoom Effect */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, margin: "-10%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhC9sHH0D1xEXZiUdrBhV2azOaBRCt4NUJMvT3NfEtcxx8Y5pRr367v5mYUhP6mlx6R0byZC50wZEZPi8JCkr66yEqubexhJicRocR3ZqH8Lv0NvKyq4yR-6sui1ootahB4UI46mnWLKuHXr-vTiJNXQbvyUqMhOuwO05F6F5Q3JbTHTIBYqo9KLNl0s8_n/s1600/gandr-collage.jpg.jpeg" 
            className="w-full h-full object-cover object-center" 
            alt="Happy Customers Collage" 
          />
          {/* Dark Overlay for Premium Look */}
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>

        {/* Text Content Overlay */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, margin: "-10%" }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="relative z-10 text-center px-6"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] tracking-tight">
            Happy Customers<br className="md:hidden" /> Across India 🚀
          </h2>
          <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto drop-shadow-md">
            Trusted by riders for performance, savings, and reliability
          </p>
        </motion.div>
      </section>

    </div>
  );
}
