"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Homemade_Apple } from "next/font/google";
const homemadeApple = Homemade_Apple({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between bg-transparent w-[95%] m-auto rounded-2xl top-5 left-1/2 transform p-6 z-50">
      {/* Left-aligned Logo */}
      <div className="flex flex-col leading-tight">
        <span className={`text-2xl text-green-700 font-bold tracking-wide ${homemadeApple.className}`}>
          l a w a n y a
        </span>
        <span className="text-sm text-gray-600 uppercase tracking-widest text-center">
          ART SHOP
        </span>
      </div>

      {/* Hamburger Icon for small screens */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-gray-600 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

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

      {/* Mobile Menu (Visible on Small Screens) */}
      <div
        className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} transition-all duration-300 ease-in-out absolute top-16 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg w-full z-10`}
      >
        <ul className="flex flex-col space-y-4 text-gray-600">
          <li className="hover:text-green-700 hover:scale-110 transition">
            <Link href="/" title="Gallery" onClick={() => setIsMobileMenuOpen(false)}>gallery</Link>
          </li>
          <li className="hover:text-green-700 hover:scale-110 transition">
            <Link href="/shop" title="Shop" onClick={() => setIsMobileMenuOpen(false)}>shop</Link>
          </li>
          <li className="hover:text-green-700 hover:scale-110 transition">
            <Link href="/about" title="About" onClick={() => setIsMobileMenuOpen(false)}>about</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}