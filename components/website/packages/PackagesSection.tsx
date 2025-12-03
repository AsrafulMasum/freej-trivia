"use client";

import CustomButton from "@/components/shared/CustomButton";
import { ArrowLeft, Check } from "lucide-react";
import { useState } from "react";

interface Package {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
}

const packages: Package[] = [
  {
    name: "Free",
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      "Condition of this package",
      "Condition of this package",
      "Condition of this package",
    ],
  },
  {
    name: "Standard",
    monthlyPrice: 5,
    annualPrice: 8,
    features: [
      "Condition of this package",
      "Condition of this package",
      "Condition of this package",
    ],
  },
  {
    name: "Premium",
    monthlyPrice: 20,
    annualPrice: 25,
    features: [
      "Condition of this package",
      "Condition of this package",
      "Condition of this package",
    ],
  },
];

// Decorative dots positioned absolutely
const DecorativeDots = () => (
  <>
    <div className="absolute top-8 right-12 w-2 h-2 rounded-full bg-white opacity-60" />
    <div className="absolute top-32 left-8 w-2 h-2 rounded-full bg-white opacity-60" />
    <div className="absolute bottom-20 right-20 w-2 h-2 rounded-full bg-white opacity-60" />
    <div className="absolute bottom-40 left-16 w-2 h-2 rounded-full bg-white opacity-60" />
  </>
);

export default function PackagesSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "monthly"
  );
  return (
    <section className="relative w-full overflow-hidden px-4 py-16 md:px-8 md:py-24">
      <DecorativeDots />

      {/* Back Button */}
      {/* <button className="absolute top-6 left-6 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
        <ArrowLeft className="w-5 h-5 text-white" />
      </button> */}

      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Our Packages
        </h1>
        <p className="text-base md:text-lg text-white opacity-90 uppercase tracking-wide mb-8">
          70+ categories, power-ups, and live rooms for friends & family
        </p>

        {/* Special Offer */}
        <div className="text-2xl md:text-3xl font-bold text-yellow-300 mb-8">
          You have 5 days to monthly free package .
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {/* <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              billingCycle === "monthly"
                ? "bg-gray-800 text-white"
                : "bg-gray-600 text-white hover:bg-gray-700"
            }`}
          >
            Monthly Package
          </button>
          <button
            onClick={() => setBillingCycle("annual")}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              billingCycle === "annual"
                ? "bg-gray-800 text-white"
                : "bg-gray-600 text-white hover:bg-gray-700"
            }`}
          >
            Annual Package
          </button> */}
          <CustomButton
            style="bg-[linear-gradient(124deg,#333_16.52%,#5C5C5C_89.27%)] rounded-full w-[220px] h-14 text-lg font-medium cursor-pointer shadow-[0_2px_4px_0_rgba(0,0,0,0.16)]"
            text="Annual Package"
          />
          <CustomButton
            style="bg-[linear-gradient(124deg,#333_16.52%,#5C5C5C_89.27%)] opacity-50 rounded-full w-[220px] h-14 text-lg font-medium cursor-pointer shadow-[0_2px_4px_0_rgba(0,0,0,0.16)]"
            text="Monthly Package"
          />
        </div>
      </div>

      {/* Packages Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="rounded-3xl bg-[#D9D9D959] backdrop-blur-md p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#EBEBEB36] bg-opacity-30 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="23"
                viewBox="0 0 9 23"
                fill="none"
              >
                <path
                  d="M4.02632 4.55459C5.25964 4.55459 6.26316 5.83112 6.26316 7.40121C6.26316 8.03058 6.66378 8.53986 7.15789 8.53986C7.65201 8.53986 8.05263 8.03058 8.05263 7.40121C8.05263 4.96831 6.71053 2.93543 4.92105 2.4149V1.13865C4.92105 0.509283 4.52043 0 4.02632 0C3.5322 0 3.13158 0.509283 3.13158 1.13865V2.4149C1.34211 2.93543 0 4.96831 0 7.40121C0 10.2267 1.80607 12.5251 4.02632 12.5251C5.25964 12.5251 6.26316 13.8017 6.26316 15.3717C6.26316 16.9418 5.25964 18.2184 4.02632 18.2184C2.79299 18.2184 1.78947 16.9418 1.78947 15.3717C1.78947 14.7424 1.38886 14.2331 0.894737 14.2331C0.400618 14.2331 0 14.7424 0 15.3717C0 17.8046 1.34211 19.8375 3.13158 20.3581V21.6343C3.13158 22.2637 3.5322 22.773 4.02632 22.773C4.52043 22.773 4.92105 22.2637 4.92105 21.6343V20.3581C6.71053 19.8375 8.05263 17.8046 8.05263 15.3717C8.05263 12.5462 6.24656 10.2478 4.02632 10.2478C2.79299 10.2478 1.78947 8.9713 1.78947 7.40121C1.78947 5.83112 2.79299 4.55459 4.02632 4.55459Z"
                  fill="#FDFDFD"
                />
              </svg>
            </div>

            {/* Package Name */}
            <h3 className="text-2xl font-bold text-white mb-4">{pkg.name}</h3>

            {/* Price */}
            <div className="mb-6">
              <div className="text-5xl font-bold text-white">
                $
                {billingCycle === "monthly"
                  ? pkg.monthlyPrice
                  : pkg.annualPrice}
                {pkg.name !== "Free" && (
                  <span className="text-sm font-semibold opacity-70">
                    {billingCycle === "monthly" ? "/month" : "/year"}
                  </span>
                )}
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-8">
              {pkg.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span className="text-white font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <CustomButton
              style="bg-[linear-gradient(191deg,#0080FF_1.79%,#04A3FF_95.03%)] rounded-full w-[310px] h-16 text-xl font-medium cursor-pointer shadow-[0_7px_4px_0_rgba(0,0,0,0.12)]"
              text="Get Package"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
