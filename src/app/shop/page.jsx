"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Shop() {
    const [shopItems, setShopItems] = useState([]);

    useEffect(() => {
        const fetchShopItems = async () => {
            try {
                const res = await fetch("/api/shop");
                const data = await res.json();
                setShopItems(data);
            } catch (error) {
                console.error("Failed to fetch shop items:", error);
            }
        };

        fetchShopItems();
    }, []);

    return (
        <div className="container mx-auto pt-16 px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {shopItems.length > 0 ? (
                    shopItems.map((item) => (
                        <div 
                            key={item.id} 
                            className="flex bg-white border border-black rounded-lg shadow-sm overflow-hidden"
                        >
                            <div className="w-1/3">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={200}
                                    height={150}
                                    className="object-cover w-full h-full"
                                />
                            </div>

                            <div className="w-2/3 p-4 flex flex-col justify-between">
                                <div>
                                    <p className="text-2xl font-semibold text-black">{item.title}</p>
                                    <p className="text-xl font-normal text-black">{item.size}, {item.medium}</p>
                                    <p className="text-gray-700 text-xl py-1">£{item.price}</p>
                                </div>
                                <a 
                                    href="#" 
                                    className="bg-green-700 text-white font-medium rounded-lg text-sm px-4 py-2 text-center"
                                >
                                    Buy
                                </a>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-lg font-medium col-span-3">No gallery pieces on sale.</p>
                )}
            </div>
        </div>
    );
}