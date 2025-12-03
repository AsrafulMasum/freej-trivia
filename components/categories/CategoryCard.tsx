"use client"

import { cn } from "@/lib/utils"

interface CategoryCardProps {
  name: string
  icon: string
}

export default function CategoryCard({ name, icon }: CategoryCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col items-center justify-center",
        "rounded-3xl",
        "p-8 md:p-12 h-48 cursor-pointer",
        "transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-white/20 backdrop-blur-md",
        "active:scale-95",
      )}
    >
      {/* Icon */}
      <div className="text-6xl md:text-8xl -mt-20 mb-4 transition-transform duration-300 group-hover:scale-110 z-20">{icon}</div>

      {/* Category Name */}
      <span className="text-white font-semibold mt-4 text-base md:text-lg text-center">{name}</span>

      {/* Shine effect on hover */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 bg-white transition-opacity duration-300" />
    </div>
  )
}
