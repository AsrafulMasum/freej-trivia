"use client";

import { useRef } from "react";
import type { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CustomButton from "@/components/shared/CustomButton";

interface LiveRoom {
  id: number;
  title: string;
  category: string;
  participants: number;
  capacity: number;
}

const LIVE_ROOMS: LiveRoom[] = [
  {
    id: 1,
    title: "Family Night",
    category: "Movies/Music",
    participants: 5,
    capacity: 6,
  },
  {
    id: 2,
    title: "Family Night",
    category: "Movies/Music",
    participants: 4,
    capacity: 4,
  },
  {
    id: 3,
    title: "Family Night",
    category: "Movies/Music",
    participants: 1,
    capacity: 1,
  },
  {
    id: 4,
    title: "Family Night",
    category: "Movies/Music",
    participants: 3,
    capacity: 5,
  },
  {
    id: 5,
    title: "Family Night",
    category: "Movies/Music",
    participants: 2,
    capacity: 5,
  },
  {
    id: 6,
    title: "Family Night",
    category: "Movies/Music",
    participants: 4,
    capacity: 6,
  },
];

export function JoinLiveRoom() {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <section className="py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-balance">
            Join Live Room
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          <Swiper
            ref={(el: any) => {
              // Swiper React may pass an object with a `.swiper` property (SwiperRef) or the Swiper instance itself;
              // normalize to store the SwiperClass instance in swiperRef.current
              swiperRef.current = el ? ("swiper" in el ? el.swiper : el) : null;
            }}
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
              1536: { slidesPerView: 4, spaceBetween: 24 },
            }}
            pagination={{
              el: ".swiper-pagination-custom",
              clickable: true,
              renderBullet: (index, className) => {
                return `<button class="${className} custom-bullet" aria-label="Go to slide ${
                  index + 1
                }"></button>`;
              },
            }}
            className="pb-12"
          >
            {LIVE_ROOMS.map((room) => (
              <SwiperSlide key={room.id}>
                <LiveRoomCard room={room} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 sm:-translate-x-14 z-10 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors opacity-0 group-hover:opacity-100"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 sm:translate-x-14 z-10 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors opacity-0 group-hover:opacity-100"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button> */}

          <div className="swiper-pagination-custom flex justify-center gap-2 mt-6 static!" />
        </div>
      </div>

      <style jsx>{`
        :global(.custom-bullet) {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.5);
          transition: all 0.3s ease;
          padding: 0;
          border: none;
          cursor: pointer;
        }

        :global(.custom-bullet.swiper-pagination-bullet-active) {
          background-color: white;
          width: 32px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}

interface LiveRoomCardProps {
  room: LiveRoom;
}

function LiveRoomCard({ room }: LiveRoomCardProps) {
  return (
    <div className="bg-white/20 backdrop-blur-md rounded-3xl p-5 flex flex-col justify-between h-72 border border-white/30 hover:bg-white/25 transition-colors">
      {/* Header */}
      <div>
        <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
          {room.title}
        </h3>
        <p className="text-xs sm:text-sm text-white/80 mt-1">{room.category}</p>
      </div>

      {/* Participant Overlapping Circles */}
      <div className="flex items-center justify-center my-8">
        <div className="flex -space-x-4">
          {/* Participant avatar images */}
          {Array.from({ length: room.participants }).map((_, idx) => (
            <img
              key={`avatar-${idx}`}
              src={`https://i.pravatar.cc/150?img=${idx + 1}`}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white object-cover"
              alt="participant"
            />
          ))}

          {/* Final Circle: participants/capacity */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#C4C4C4] flex items-center justify-center text-white font-semibold border-2 border-white">
            {room.participants}/{room.capacity}
          </div>
        </div>
      </div>

      {/* Join Button */}
      <CustomButton
        style="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 sm:py-3 rounded-full text-sm sm:text-base transition-colors"
        rightIcon={<ArrowRight size={16} className="ml-1" />}
        text="Join Room"
      />
    </div>
  );
}
