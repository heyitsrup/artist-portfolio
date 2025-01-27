import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="flex items-center justify-end bg-transparent w-[95%] m-auto rounded-2xl fixed top-5 left-1/2 transform -translate-x-1/2 p-3 z-50">
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