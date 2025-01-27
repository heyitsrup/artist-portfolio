import React from 'react';
import Link from 'next/link';
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between bg-transparent w-[95%] m-auto rounded-2xl fixed top-5 left-1/2 transform -translate-x-1/2 p-3 z-50">
        {/* Left-aligned Logo */}
        <div className="flex items-center">
          <Image
            src="/Lawanya Art Shop.png"
            alt="Logo"
            width={70}
            height={70}
            className="mr-4"
          />
        </div>
  
        {/* Right-aligned Links */}
        <ul className="flex space-x-6">
          <li className="md:px-4 md:py-2 hover:text-green-700 hover:scale-110 transition">
            <Link href="/gallery" title="Gallery">gallery</Link>
          </li>
          <li className="md:px-4 md:py-2 hover:text-green-700 hover:scale-110 transition">
            <Link href="#" title="Shop">shop</Link>
          </li>
          <li className="md:px-4 md:py-2 hover:text-green-700 hover:scale-110 transition">
            <Link href="/about" title="About">about</Link>
          </li>
        </ul>
      </nav>
    )
}