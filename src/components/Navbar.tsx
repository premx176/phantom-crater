"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useScroll, useTransform, motion } from "framer-motion";

export function Navbar() {
  const { scrollY } = useScroll();
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(5, 5, 5, 0)", "rgba(5, 5, 5, 0.7)"]
  );
  
  const navBorder = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.05)"]
  );

  return (
    <motion.nav
      style={{ backgroundColor: navBackground, borderColor: navBorder }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        "backdrop-blur-md border-b-[1px] text-white py-4 px-6 md:px-12 flex justify-between items-center"
      )}
    >
      <div className="text-xl font-bold tracking-tight">
        <Link href="/">MG Wheels</Link>
      </div>
      
      <div className="hidden md:flex space-x-10 text-sm font-bold tracking-widest text-white/80">
        <Link href="/" className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all">HOME</Link>
        <Link href="/e-bikes" className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all">E-BIKES</Link>
        <Link href="/about" className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all">ABOUT US</Link>
        <Link href="/contact" className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all">CONTACT US</Link>
      </div>

      <div>
        <Link href="/contact" className="bg-transparent hover:bg-white/5 border border-white/40 shadow-neon-white hover:shadow-neon-white-hover transition-all duration-300 text-white px-6 py-2.5 rounded-full text-sm font-bold tracking-widest uppercase">
          Enquire Now
        </Link>
      </div>
    </motion.nav>
  );
}
