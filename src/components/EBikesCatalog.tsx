"use client";

import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";

export function EBikesCatalog() {
  const [currentRsSlide, setCurrentRsSlide] = useState(0);

  const rsSportImages = [
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgT6wx_gT7cBfPMoDcv1cJxW7N2WQ8MEpuimKbigqHnIx-8RLvHQlmYd0tFF46YjuBN9baP0fQVmgpPg-_nj9YqimXIdVcmdouaJWz-4ll8dlIO4iDKlKSfob9LjT_ZoM7KX3Z6qz-YUmKIlhZe60InB-6s-m5Rw8Ohya7lZttE00pDAsyWDyfBFGYNjUuZ/s320/DSC_0795.JPG",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0pAkFj_LUAARrIw0zeo02RFE3Jjmhu70VmE9KL6E9uqCtwVCAclq8NmuhUvouo3q1gHYMHCN-yjHCe8HHxYuvgN0-mEXgcRNWsP2mOqSjX2I3hYdrW7mHFmN96CMRIU2_-m615VU568_V1n5HwMwbhd5BB5gF3iCgD16PB3-vv0RgVKrOgTbPDm485XHF/s320/DSC_0796.JPG",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8el1NP9SyxliP78aHqs_atQpO2udYCm8TtZI1c4YzgCI_r4biMB9FjbdXM5tvaG8S4IRd8jZQgsLYufs9iuTtPVu1gIttMK7uXu9z6O8Geui42PEYhIS_b9x5ASP4OseseFASCG-y-gLb678j3fGHQz-gmPReiFLblBh-2TvSED83Z2oLsdPMVnlEQHdf/s320/DSC_0797.JPG"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRsSlide((prev) => (prev + 1) % rsSportImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [rsSportImages.length]);

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, filter: "blur(20px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: "easeOut" }
    }
  };

  return (
    <div className="pt-32 pb-48 space-y-[20vh] relative z-10 w-full min-h-screen text-white bg-evBlack">
        
      {/* DARK FIGHT CAT - Image Left, Text Right */}
      <section className="min-h-screen flex items-center justify-center snap-center px-6 md:px-16 lg:px-32">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-10%" }} variants={imageVariants} className="order-1">
            <div className="relative w-full aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-neon-white">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <img src="https://perfectpowersolutions.com/Images/Uploaded_Images/23/1.jpg" alt="Dark Fight CAT" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-10%" }} variants={sectionVariants} className="order-2 text-left space-y-8">
            <div>
              <h2 className="text-4xl lg:text-7xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] mb-2">Dark Fight CAT</h2>
              <p className="text-3xl lg:text-4xl font-light text-white/90">₹90,000 INR</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md shadow-neon-white">
              <h3 className="text-xl font-bold uppercase tracking-wider mb-4 border-b border-white/20 pb-2">Specifications</h3>
              <ul className="text-white/70 space-y-2 mb-6 text-lg font-light">
                <li><strong className="text-white">Motor:</strong> 250W BLDC</li>
                <li><strong className="text-white">Battery:</strong> 60V 24Ah Lithium</li>
                <li><strong className="text-white">Range:</strong> 70–90 km</li>
                <li><strong className="text-white">Charging:</strong> 4–6 hrs</li>
                <li><strong className="text-white">Load Cap:</strong> 200 kg</li>
              </ul>
              <h3 className="text-xl font-bold uppercase tracking-wider mb-4 border-b border-white/20 pb-2">Features</h3>
              <p className="text-white/70 text-lg font-light leading-relaxed">
                Anti-theft alarm central locking, E-ABS braking system, Digital speedometer, and Heavy-duty tubeless tyres.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PUNE EXPRESS - Text Left, Image Right */}
      <section className="min-h-screen flex items-center justify-center snap-center px-6 md:px-16 lg:px-32">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-10%" }} variants={sectionVariants} className="order-2 md:order-1 text-left space-y-8">
            <div>
              <h2 className="text-4xl lg:text-7xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] mb-2">Pune Express</h2>
              <p className="text-3xl lg:text-4xl font-light text-white/90">₹1,30,000</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md shadow-neon-white">
              <div className="inline-block px-4 py-2 bg-white text-black font-bold text-sm rounded-full mb-6">HIGHLIGHT: Drive 100km at approx ₹5</div>
              <h3 className="text-xl font-bold uppercase tracking-wider mb-4 border-b border-white/20 pb-2">Specifications</h3>
              <ul className="text-white/70 space-y-2 mb-6 text-lg font-light">
                <li><strong className="text-white">Motor:</strong> 240W BLDC</li>
                <li><strong className="text-white">Battery:</strong> 72V 24Ah Lithium</li>
                <li><strong className="text-white">Range:</strong> 100 km</li>
                <li><strong className="text-white">Charging:</strong> 3–4 hrs</li>
                <li><strong className="text-white">Load Cap:</strong> 400+ kg</li>
              </ul>
              <h3 className="text-xl font-bold uppercase tracking-wider mb-4 border-b border-white/20 pb-2">Features</h3>
              <p className="text-white/70 text-lg font-light leading-relaxed">
                Heavy duty body framing, Hydraulic disc brakes, Anti-theft + wheel jam technology. ICAT Approved.
              </p>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-10%" }} variants={imageVariants} className="order-1 md:order-2">
            <div className="relative w-full aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-neon-white">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <img src="https://perfectpowersolutions.com/Images/Uploaded_Images/21/1.jpg" alt="Pune Express" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 filter saturate-[1.2]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* PUNE EXPRESS PLUS - Image Left, Text Right */}
      <section className="min-h-screen flex items-center justify-center snap-center px-6 md:px-16 lg:px-32">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-10%" }} variants={imageVariants} className="order-1">
            <div className="relative w-full aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-neon-white">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <img src="https://perfectpowersolutions.com/Images/Uploaded_Images/24/1.jpg" alt="Pune Express Plus" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-10%" }} variants={sectionVariants} className="order-2 text-left space-y-8">
            <div>
              <h2 className="text-4xl lg:text-7xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] mb-2">Pune Express Plus</h2>
              <p className="text-3xl lg:text-4xl font-light text-white/90">₹1,30,000</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md shadow-neon-white">
              <h3 className="text-xl font-bold uppercase tracking-wider mb-4 border-b border-white/20 pb-2">Specifications</h3>
              <ul className="text-white/70 space-y-2 mb-6 text-lg font-light">
                <li><strong className="text-white">Motor:</strong> 1500W High Performance</li>
                <li><strong className="text-white">Top Speed:</strong> 45 km/hr</li>
                <li><strong className="text-white">Range:</strong> 100 km</li>
                <li><strong className="text-white">Load Cap:</strong> 280 kg</li>
              </ul>
              <h3 className="text-xl font-bold uppercase tracking-wider mb-4 border-b border-white/20 pb-2">Features</h3>
              <p className="text-white/70 text-lg font-light leading-relaxed">
                RTO Registered model. Complete anti-theft system, Hydraulic braking for superior control, built on a High carbon steel body.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RS SPORT MODEL - Text Left, Slider Right */}
      <section className="min-h-screen flex items-center justify-center snap-center px-6 md:px-16 lg:px-32 pb-48">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-10%" }} variants={sectionVariants} className="order-2 md:order-1 text-left space-y-8">
            <div>
              <h2 className="text-4xl lg:text-7xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] mb-2">RS Sport Model</h2>
              <p className="text-lg lg:text-xl font-light text-white/50 uppercase tracking-widest">Premium Sport Edition</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md shadow-neon-white">
              <h3 className="text-xl font-bold uppercase tracking-wider mb-4 border-b border-white/20 pb-2">Specifications</h3>
              <ul className="text-white/70 space-y-2 mb-6 text-lg font-light">
                <li><strong className="text-white">Top Speed:</strong> 60 km/hr</li>
                <li><strong className="text-white">Range:</strong> 70 km</li>
                <li><strong className="text-white">Load Cap:</strong> 200 kg</li>
              </ul>
              <h3 className="text-xl font-bold uppercase tracking-wider mb-4 border-b border-white/20 pb-2">Features</h3>
              <p className="text-white/70 text-lg font-light leading-relaxed">
                Reverse + Parking Mode capabilities. Smart Alarm System, advanced Graphene Battery, and Fast Charging (4–5 hrs).
              </p>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-10%" }} variants={imageVariants} className="order-1 md:order-2">
            <div className="relative w-full aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-neon-white group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              
              {/* Image Slider */}
              {rsSportImages.map((src, index) => (
                <img 
                  key={index}
                  src={src} 
                  alt={`RS Sport Model ${index + 1}`} 
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentRsSlide ? 'opacity-100' : 'opacity-0'}`} 
                />
              ))}
              
              {/* Dots */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
                {rsSportImages.map((_, index) => (
                  <div key={index} className={`w-2 h-2 rounded-full transition-all ${index === currentRsSlide ? 'bg-white scale-125 shadow-neon-white' : 'bg-white/30'}`} />
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
