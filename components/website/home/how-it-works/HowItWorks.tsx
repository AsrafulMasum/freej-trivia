"use client";

import type React from "react";
import { User, Grid3x3, Share2 } from "lucide-react";
import { FaList, FaShare, FaUserAlt } from "react-icons/fa";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
}

const STEPS: Step[] = [
  {
    id: 1,
    title: "CHOOSE AVATAR",
    description:
      "HELP YOUR FRIENDS SAVE AND GET REWARDED TOGETHER! BEGIN YOUR LINK WITH FRIENDS. ONCE THEY JOIN AND MAKE A PURCHASE, YOU'LL BOTH RECEIVE REWARDS LIKE BONUS DATA OR STORE CREDIT AUTOMATICALLY.",
    icon: <FaUserAlt size={24} />,
    iconBg: "bg-[linear-gradient(191deg,#0080FF_1.79%,#04A3FF_95.03%)]",
  },
  {
    id: 2,
    title: "PICK CATEGORIES",
    description:
      "HELP YOUR FRIENDS SAVE AND GET REWARDED TOGETHER! BEGIN YOUR LINK WITH FRIENDS. ONCE THEY JOIN AND MAKE A PURCHASE, YOU'LL BOTH RECEIVE REWARDS LIKE BONUS DATA OR STORE CREDIT AUTOMATICALLY.",
    icon: <FaList size={24} />,
    iconBg: "bg-[linear-gradient(123deg,#FF3636_16.52%,#FF6262_86.4%)]",
  },
  {
    id: 3,
    title: "SHARE & PLAY",
    description:
      "HELP YOUR FRIENDS SAVE AND GET REWARDED TOGETHER! BEGIN YOUR LINK WITH FRIENDS. ONCE THEY JOIN AND MAKE A PURCHASE, YOU'LL BOTH RECEIVE REWARDS LIKE BONUS DATA OR STORE CREDIT AUTOMATICALLY.",
    icon: <FaShare size={24} />,
    iconBg: "bg-[linear-gradient(124deg,#9E5FE7_16.52%,#C47BFD_89.27%)]",
  },
];

export function HowItWorks() {
  return (
    <section className="py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center text-balance">
            HOW IT WORKS
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {STEPS.map((step) => (
            <HowItWorksCard key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface HowItWorksCardProps {
  step: Step;
}

function HowItWorksCard({ step }: HowItWorksCardProps) {
  return (
    <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-sm hover:bg-white/25 transition-colors h-full flex flex-col gap-6">
      {/* Icon */}
      <div
        className={`${step.iconBg} w-16 h-16 rounded-full flex items-center justify-center text-white`}
      >
        {step.icon}
      </div>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-bold text-white">{step.title}</h3>

      {/* Description */}
      <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
        {step.description}
      </p>
    </div>
  );
}
