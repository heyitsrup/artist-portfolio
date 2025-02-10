"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function BuyPage() {
    const searchParams = useSearchParams();
    const title = searchParams.get("title");
    const [shopItem, setShopItem] = useState(null);

    useEffect(() => {
        const fetchShopItem = async () => {
            if (!title) return;

            try {
                const res = await fetch(`/api/buyPage?title=${encodeURIComponent(title)}`);
                const data = await res.json();
                setShopItem(data);
            } catch (error) {
                console.error("Failed to fetch shop item:", error);
            }
        };

        fetchShopItem();
    }, [title]);

    if (!shopItem) {
        return <p>Loading...</p>;
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex w-full max-w-5xl shadow-lg rounded-lg overflow-hidden">
                {/* LEFT SIDE - Product Info */}
                <div className="w-1/2 bg-gray-900 text-white px-8 flex flex-col justify-center">
                    <h1 className="text-xl font-bold pt-8">{shopItem.title}</h1>
                    <p className="text-3xl font-bold pb-4">£{shopItem.price.toFixed(2)}</p>
                    <div className="w-full flex justify-center pb-8">
                        <Image
                            src={shopItem.image}
                            alt={shopItem.title}
                            width={500}
                            height={500}
                            className="rounded-lg"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE - Payment Info */}
                <div className="w-1/2 bg-white p-8">
                    <button className="w-full bg-black text-white py-3 rounded-lg font-semibold mb-4">
                        🛒 Apple Pay
                    </button>
                    <p className="text-center text-gray-500 mb-4">----------------------Or pay another way-----------------------</p>

                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input type="email" className="w-full border p-2 rounded-lg" placeholder="Enter your email" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Shipping Address</label>
                            <input type="text" className="w-full border p-2 rounded-lg" placeholder="Enter your address" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Payment Method</label>
                            <div className="border p-3 rounded-lg">
                                <label className="flex items-center space-x-2">
                                    <input type="radio" name="payment" className="form-radio" />
                                    <span>💳 Card</span>
                                </label>
                                <label className="flex items-center space-x-2 mt-2">
                                    <input type="radio" name="payment" className="form-radio" />
                                    <span>🏦 Bank Transfer</span>
                                </label>
                                <label className="flex items-center space-x-2 mt-2">
                                    <input type="radio" name="payment" className="form-radio" />
                                    <span>🛍 Klarna</span>
                                </label>
                            </div>
                        </div>

                        <button className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold">
                            Pay
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}