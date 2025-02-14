"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Homemade_Apple } from "next/font/google";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const homemadeApple = Homemade_Apple({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="relative flex items-center justify-between bg-transparent w-[95%] m-auto p-6 z-50">
      {/* Left-aligned Logo */}
      <div className="flex flex-col leading-tight">
        <span className={`text-2xl text-green-700 font-bold tracking-wide ${homemadeApple.className}`}>
          l a w a n y a
        </span>
        <span className="text-sm text-gray-600 uppercase tracking-widest text-center">
          ART SHOP
        </span>
      </div>

      {/* Right-aligned Links (Visible on Medium and Larger Screens) */}
      <ul className="hidden md:flex space-x-6 text-gray-600">
        <li className="md:px-4 md:py-4 hover:text-green-700 hover:scale-110 transition">
          <Link href="/" title="Gallery">gallery</Link>
        </li>
        <li className="md:px-4 md:py-4 hover:text-green-700 hover:scale-110 transition">
          <Link href="/shop" title="Shop">shop</Link>
        </li>
        <li className="md:px-4 md:py-4 hover:text-green-700 hover:scale-110 transition">
          <Link href="/about" title="About">about</Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <motion.button
        className="md:hidden text-gray-700 focus:outline-none"
        onClick={toggleMobileMenu}
        initial={{ rotate: 0 }}
        animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </motion.button>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#EBE8DE] flex flex-col items-center justify-center space-y-6 text-3xl text-gray-700 z-50"
          >
            <div className="flex flex-col leading-tight absolute top-6 left-8">
              <span className={`text-2xl text-green-700 font-bold tracking-wide ${homemadeApple.className}`}>
                l a w a n y a
              </span>
              <span className="text-sm text-gray-600 uppercase tracking-widest text-center">
                ART SHOP
              </span>
            </div>

            <button className="absolute top-2 right-8 text-gray-700" onClick={toggleMobileMenu}> <X size={32} /> </button>

            <Link href="/" onClick={toggleMobileMenu} className="hover:text-green-700 transition">
              gallery
            </Link>
            <Link href="/shop" onClick={toggleMobileMenu} className="hover:text-green-700 transition">
              shop
            </Link>
            <Link href="/about" onClick={toggleMobileMenu} className="hover:text-green-700 transition">
              about
            </Link>

            <a href="https://www.instagram.com/lava.paints/" target="_blank" rel="noopener noreferrer" className="absolute bottom-6 flex items-center space-x-2">
              <img className="h-10 w-10" src="/instagram.svg" alt="IG" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}