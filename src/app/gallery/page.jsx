"use client";

import React, { useEffect, useState } from "react";
import Image from 'next/image';
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Install required Swiper modules
SwiperCore.use([Navigation, Pagination]);

export default function Gallery() {
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
    <div className="container mx-auto pt-32">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {galleryPieces.length > 0 ? (
          galleryPieces.map((piece) => (
            <SwiperSlide key={piece.id}>
              <Image
                src={piece.image}
                alt={piece.title}
                className="h-auto w-full rounded-xl object-cover border-4 border-stone-400"
                height={1000}
                width={1000}
              />
              <div className="text-start mt-4 pl-4">
                <span className="text-xl">
                  {piece.title} - {piece.size} {piece.medium}
                </span>
                <br />
                <span>Price - £{piece.price.toFixed(2)}</span>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <p>No gallery pieces available at the moment.</p>
        )}
      </Swiper>

      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};