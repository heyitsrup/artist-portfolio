"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Allura } from "next/font/google";
import { useSearchParams } from "next/navigation";

import CheckoutPage from "../../components/CheckoutPage"
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const allura = Allura({ subsets: ["latin"], weight: "400" });

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
    throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

function convertToSubcurrency(amount, factor = 100) {
    return Math.round(amount * factor)
}

export default function Checkout() {
    const searchParams = useSearchParams();
    const title = searchParams.get("title");
    const [shopItem, setShopItem] = useState(null);

    useEffect(() => {
        const fetchShopItem = async () => {
            if (!title) return;

            try {
                const res = await fetch(`/api/checkout?title=${encodeURIComponent(title)}`);
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

    const amount = shopItem.price.toFixed(2)

    return (
        <div className="flex items-center justify-center">
            <div className="flex w-full max-w-5xl shadow-lg rounded-lg overflow-hidden">
                {/* LEFT SIDE - Product Info */}
                <div className="w-1/2 bg-gray-900 text-white px-8 flex flex-col justify-center">
                    <h1 className={`text-2xl font-bold pt-8 ${allura.className}`}>{shopItem.title}</h1>
                    <p className="text-3xl font-bold pb-4">£{ amount }</p>
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
                    <Elements 
                        stripe={stripePromise}
                        options={{
                            mode: "payment",
                            amount: convertToSubcurrency(amount),
                            currency: "gbp"
                        }}
                    >
                        <CheckoutPage amount={shopItem.price.toFixed(2)} />
                    </Elements>
                </div>
            </div>
        </div>
    );
}