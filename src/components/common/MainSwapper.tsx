"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay  } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

type MainSwapperProps = {
  wrapperClass?: string;
};

// Slide data
const slides = [
  {
    id: 1,
    title: "Noise Cancelling",
    subtitle: "Headphone",
    description: `Boso Over-Ear Headphone 
Wifi, Voice Assistant 
Low latency game mode`,
    img: "/assets/commonImg/swaperImg.png",
  },
  {
    id: 2,
    title: "Wireless",
    subtitle: "Earbuds",
    description: `High Quality Sound 
Bluetooth 5.2 
24h Battery Backup`,
    img: "/assets/commonImg/swaperImg.png",
  },
  {
    id: 3,
    title: "Smart",
    subtitle: "Speakers",
    description: `Voice Control 
360° Surround Sound 
Compact Design`,
    img: "/assets/commonImg/swaperImg.png",
  },
];

export default function MainSwapper({ wrapperClass }: MainSwapperProps) {
  return (
    <>
    <div className={`relative w-full rounded-lg overflow-hidden ${
        wrapperClass ? wrapperClass : ""
      }`}>
      <Swiper
        pagination={{
          el: ".custom-pagination",
          type: "fraction",
        }}
        modules={[Pagination, Autoplay ]}
        autoplay={{
          delay: 2000, 
          disableOnInteraction: false, 
        }}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-60 md:h-80 lg:h-96">
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                className="object-cover"
                priority
              />
              <div className="z-[9] absolute text-white top-[16%] left-[10%]">
                <h1 className="font-bold text-[24px] md:text-[30px] lg:text-[36px] leading-tight">
                  {slide.title}
                </h1>
                <p className="font-light text-[20px] md:text-[28px] lg:text-[32px]">
                  {slide.subtitle}
                </p>
                <p className="mt-2 ml-7 font-normal text-[12px] md:text-[14px] leading-5 whitespace-pre-line">
                  {slide.description}
                </p>
                <button className="mt-4 md:mt-10 px-4 py-2 bg-white text-black text-[14px] font-medium rounded-xl shadow hover:bg-gray-100 transition">
                  BUY NOW
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* custom pagination - fixed bottom right, responsive */}
      <div className="absolute z-10 bottom-4 right-4 md:bottom-6 md:right-10 bg-white px-4 py-1 w-fit min-w-[90px] text-center rounded-3xl text-sm font-medium text-black">
        <span className="custom-pagination"></span>
      </div>
    </div>
    </>
  );
}
