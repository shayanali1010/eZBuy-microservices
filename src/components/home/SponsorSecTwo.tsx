"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

// images
import sponsor3 from "../../../public/assets/homeImg/sponsor3.png";
import sponsor4 from "../../../public/assets/homeImg/sponsor4.png";

type SponsorCard = {
  id: number;
  brand?: string;
  title: string;
  subtitle?: string;
  price?: string;
  buttonText?: string | null;
  image: StaticImageData;
  link: string;
  align: "left" | "right";
  theme: "light" | "dark";
  comment: string;
};

const dummySponsor: SponsorCard[] = [
  {
    id: 1,
    brand: "",
    title: "Sono Playgo 5",
    subtitle: "",
    price: "from $569",
    buttonText: "SHOP NOW",
    image: sponsor3,
    link: "/products/watch",
    align: "left",
    theme: "light",
    comment: "",
  },
  {
    id: 2,
    brand: "",
    title: "Logitek Bluetooth",
    subtitle: "Keyboard",
    price: "",
    buttonText: null,
    image: sponsor4,
    link: "/products/hero-11-black",
    align: "left",
    theme: "dark",
    comment: "Best for all device",
  },
];

// 🔥 duplicate data (2 → 4)
const sponsors = [...dummySponsor, ...dummySponsor];

const SponsorSecTwo = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      slidesPerView={2}
      spaceBetween={12}
      loop={true}
      className="my-1 md:m-3"
    >
      {sponsors.map((item) => (
        <SwiperSlide key={item.id + Math.random()}>
          <div className="relative w-full min-h-[90px] sm:min-h-[115px] lg:min-h-[120px] rounded-xl overflow-hidden">
            {/* Background image */}
            <Link href={item.link} className="w-full h-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-fill"
                priority
              />
            </Link>

            {/* Text overlay */}
            <div className="absolute inset-0">
              <div
                className={`h-full w-full p-3 sm:p-5 lg:p-8 flex items-center ${
                  item.align === "right" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`${
                    item.align === "right" ? "text-right" : "text-left"
                  } ${item.theme === "dark" ? "text-white" : "text-gray-900"}
                   w-full max-w-[260px]`}
                >
                  {item.brand && (
                    <p className="font-medium text-[10px] sm:text-[11px] uppercase">
                      {item.brand}
                    </p>
                  )}

                  <h3 className="font-semibold text-[14px] sm:text-[16px] lg:text-[20px] leading-snug">
                    {item.title}
                  </h3>

                  {item.subtitle && (
                    <p className="text-[11px] sm:text-[12px] lg:text-[13px] mt-0.5 opacity-90 text-[#FFC107]">
                      {item.subtitle}
                    </p>
                  )}

                  {item.price && (
                    <p className="font-medium text-[14px] sm:text-[16px] lg:text-[20px] text-[#1ABA1A] mt-1">
                      {item.price}
                    </p>
                  )}

                  {item.buttonText ? (
                    <Link
                      href={item.link}
                      className={`inline-block mt-2 sm:mt-3 rounded-full py-1.5 sm:py-2 px-3 sm:px-4 text-[11px] sm:text-[12px] font-medium ${
                        item.theme === "light" ? "text-black" : "text-white"
                      } transition hover:text-green-500 underline`}
                    >
                      {item.buttonText}
                    </Link>
                  ) : item.comment ? (
                    <p
                      className={`inline-block mt-2 sm:mt-3 rounded-full py-1.5 sm:py-2 px-3 sm:px-4 text-[11px] sm:text-[12px] font-medium ${
                        item.theme === "light" ? "text-black" : "text-white"
                      } transition`}
                    >
                      {item.comment}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
      </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SponsorSecTwo;
