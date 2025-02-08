"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [galleryPieces, setGalleryPieces] = useState([]);

  useEffect(() => {
    const fetchGalleryPieces = async () => {
      try {
        const res = await fetch("/api/gallery"); // API route to fetch gallery data
        const data = await res.json();
        setGalleryPieces(data);
      } catch (error) {
        console.error("Failed to fetch gallery pieces:", error);
      }
    };

    fetchGalleryPieces();
  }, []);

  return (
    <div className="container mx-auto pt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {galleryPieces.length > 0 ? (
          galleryPieces.map((piece) => {
            const isLandscape = piece.orientation === "landscape";
            const width = isLandscape ? 2000 : 1000;
            const height = isLandscape ? 1000 : 2000;

            return (
              <div
                key={piece.id}
                className={`relative group flex flex-col ${isLandscape ? 'col-span-2' : 'col-span-1'} min-h-full`}
              >
                <div className="relative w-full flex items-center justify-center min-h-full">
                  <div className="w-full" style={{ height: isLandscape ? 'auto' : '100%' }}>
                    <Image
                      src={piece.image}
                      alt={piece.title}
                      className="object-cover w-full h-full rounded-xl"
                      width={width}
                      height={height}
                    />
                  </div>

                  <div className="absolute inset-0 flex rounded-xl items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-start p-4">
                      <span className="text-xl">{piece.title}</span>
                      <br />
                      <span>{piece.size}, {piece.medium.replace(/_/g, " ")}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}
