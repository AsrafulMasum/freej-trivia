"use client";

import { useRef } from "react";
import type { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Feedback {
  id: number;
  name: string;
  location: string;
  avatar: string;
  text: string;
}

const FEEDBACKS: Feedback[] = [
  {
    id: 1,
    name: "Wilson Herry",
    location: "Dubai, UAE",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Wilson",
    text: "Gravida elementum tincidunt volutpat in Quisque urna ullamcorper sed at, consectetur quis Donec turpis dui. Morbi vitae urna, maximus venenatis nisl, vitae ac.",
  },
  {
    id: 2,
    name: "Wilson Herry",
    location: "Dubai, UAE",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Wilson2",
    text: "Gravida elementum tincidunt volutpat in Quisque urna ullamcorper sed at, consectetur quis Donec turpis dui. Morbi vitae urna, maximus venenatis nisl, vitae ac.",
  },
  {
    id: 3,
    name: "Wilson Herry",
    location: "Dubai, UAE",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Wilson3",
    text: "Gravida elementum tincidunt volutpat in Quisque urna ullamcorper sed at, consectetur quis Donec turpis dui. Morbi vitae urna, maximus venenatis nisl, vitae ac.",
  },
  {
    id: 4,
    name: "Wilson Herry",
    location: "Dubai, UAE",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Wilson4",
    text: "Gravida elementum tincidunt volutpat in Quisque urna ullamcorper sed at, consectetur quis Donec turpis dui. Morbi vitae urna, maximus venenatis nisl, vitae ac.",
  },
  {
    id: 5,
    name: "Wilson Herry",
    location: "Dubai, UAE",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Wilson5",
    text: "Gravida elementum tincidunt volutpat in Quisque urna ullamcorper sed at, consectetur quis Donec turpis dui. Morbi vitae urna, maximus venenatis nisl, vitae ac.",
  },
];

export function PlayersFeedback() {
  const swiperInstance = useRef<SwiperClass | null>(null);

  return (
    <section className="py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-balance">
            Players Feedback
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 2, spaceBetween: 20 },
              1536: { slidesPerView: 2, spaceBetween: 24 },
            }}
            pagination={{
              el: ".swiper-pagination-feedback",
              clickable: true,
              renderBullet: (index, className) => {
                return `<button class="${className} custom-bullet-feedback" aria-label="Go to slide ${
                  index + 1
                }"></button>`;
              },
            }}
            className="pb-12"
            onSwiper={(swiper) => {
              swiperInstance.current = swiper;
            }}
          >
            {FEEDBACKS.map((feedback) => (
              <SwiperSlide key={feedback.id}>
                <FeedbackCard feedback={feedback} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-pagination-feedback flex justify-center gap-2 mt-6 static!" />
        </div>
      </div>

      <style jsx>{`
        :global(.custom-bullet-feedback) {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.5);
          transition: all 0.3s ease;
          padding: 0;
          border: none;
          cursor: pointer;
        }

        :global(.custom-bullet-feedback.swiper-pagination-bullet-active) {
          background-color: white;
          width: 32px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}

interface FeedbackCardProps {
  feedback: Feedback;
}

function FeedbackCard({ feedback }: FeedbackCardProps) {
  return (
    <div className="bg-[#FDFDFD59] backdrop-blur-md rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-56 border border-white/30 hover:bg-white/25 transition-colors">
      {/* User Info */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src={feedback.avatar || "/placeholder.svg"}
          alt={feedback.name}
          className="w-12 h-12 rounded-full border-2 border-white/50"
        />
        <div>
          <h3 className="text-sm sm:text-base font-bold text-black">
            {feedback.name}
          </h3>
          <p className="text-xs sm:text-sm text-[#114684]">
            {feedback.location}
          </p>
        </div>
      </div>

      {/* Feedback Text */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex gap-2">
          <span className="text-2xl sm:text-3xl text-black leading-none">
            “
          </span>
          <p className="text-xs sm:text-sm text-black leading-relaxed">
            {feedback.text}
          </p>
        </div>
      </div>
    </div>
  );
}
