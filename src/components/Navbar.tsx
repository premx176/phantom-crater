"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(5, 5, 5, 0)", "rgba(5, 5, 5, 0.9)"]
  );
  
  const navBorder = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.1)"]
  );

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "E-BIKES", href: "/e-bikes" },
    { name: "ABOUT US", href: "/about" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <>
      <motion.nav
        style={{ backgroundColor: navBackground, borderColor: navBorder }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-colors duration-300",
          "backdrop-blur-md border-b-[1px] text-white py-4 px-6 md:px-12 flex justify-between items-center"
        )}
      >
        <div className="text-xl font-bold tracking-tight z-[110]">
          <Link href="/" onClick={() => setIsOpen(false)}>MG Wheels</Link>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 text-sm font-bold tracking-widest text-white/80">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/contact" className="hidden md:block bg-transparent hover:bg-white/5 border border-white/40 shadow-neon-white hover:shadow-neon-white-hover transition-all duration-300 text-white px-6 py-2.5 rounded-full text-sm font-bold tracking-widest uppercase">
            Enquire Now
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white z-[110] p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[90] flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-black text-white hover:text-evBlue transition-colors tracking-tighter"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="pt-8"
            >
              <Link 
                href="/contact" 
                onClick={() => setIsOpen(false)}
                className="bg-white text-black px-10 py-4 rounded-full font-bold tracking-widest shadow-neon-white"
              >
                ENQUIRE NOW
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
