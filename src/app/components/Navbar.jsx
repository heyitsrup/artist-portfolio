import React from 'react';
import Link from 'next/link';
import { Homemade_Apple } from "next/font/google";
const homemadeApple = Homemade_Apple({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
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

      {/* Right-aligned Links */}
      <ul className="flex space-x-6 text-gray-600">
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
    </nav>
  )
}