"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import { Autoplay } from "swiper/modules";

type bannerItems = {
  id: number;
  image: string | StaticImageData;
  title: string;
  text: string;
  price: string;
  textColor: "black" | "white";
  align: "left" | "right" | "top" | "bottom";
}

interface Props  {
  bannerData: bannerItems[]
}

const TopProductBanner = ({bannerData}: Props) => {

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      modules={[Autoplay]}
      direction="vertical"
      className="w-full h-[200px] rounded-xl overflow-hidden"
    >
      {bannerData.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="relative w-full h-[200px] rounded-xl overflow-hidden">
            <Link href="/product-detail" className="block w-full h-full">
              <Image
                src={item.image}
                alt="Loading..."
                fill
                priority
                className="object-fill"
              />
            </Link>
            <div
              className={`absolute py-6 pl-6 lg:pl-10 pr-8 lg:pr-14 inset-0 flex ${
                item.align === "right"
                  ? " items-end flex-col"
                  : item.align == "left"
                  ? "items-start flex-col"
                  : item.align == "top"
                  ? "flex-row justify-between"
                  : "flex-row justify-between items-end"
              }`}
            >
              <div
                className={`${
                  item.textColor == "white" ? "text-white" : "text-black"
                } ${
                  (item.align == "top" || item.align == "bottom")
                    ? "max-w-[160px] xl:max-w-full"
                    : "max-w-[180px]"
                }`}
              >
                {item.title && (
                  <p className="font-[500] text-[16px] sm:text-[18px] lg:text-[24px] uppercase leading-6 md:leading-[28.8px] align-middle">
                    {item.title}
                  </p>
                )}
                {item.text && (
                  <p
                    className={`font-[400] text-[11px] sm:text-[12px] leading-[18px] md:leading-[20.4px] ${
                      item.textColor == "white"
                        ? "text-white"
                        : "text-[#666666]"
                    } align-middle`}
                  >
                    {item.text}
                  </p>
                )}
                {item.price && (
                  <p
                    className={`font-[400] text-[11px] sm:text-[13px] mb-3 leading-[20px] md:leading-[22.1px] ${
                      item.textColor == "white"
                        ? "text-white"
                        : "text-[#666666]"
                    } align-middle`}
                  >
                    Starting from{" "}
                    <span className="text-[#1ABA1A] font-bold">
                      {item.price}
                    </span>
                  </p>
                )}
              </div>

              <button
                className={`uppercase py-[0.3rem] sm:py-2 px-[0.4rem] sm:px-2 lg:px-3 text-[8px] sm:text-[10px] lg:text-[15px] rounded-md sm:rounded-lg w-fit h-fit ${
                  item.textColor == "white"
                    ? "text-black bg-white hover:bg-slate-200"
                    : "text-[white] bg-[#222222] hover:bg-[#333333]"
                }`}
              >
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TopProductBanner;
