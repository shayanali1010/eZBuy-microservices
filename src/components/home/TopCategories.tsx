"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import ItemsLayout from "../common/ItemsLayout";
import category1 from "../../../public/assets/homeImg/category1.png";
import category2 from "../../../public/assets/homeImg/category2.png";
import category3 from "../../../public/assets/homeImg/category3.png";
import category4 from "../../../public/assets/homeImg/category4.png";
import Image from "next/image";

const TopCategories = () => {
  const categories = [
    { id: 1, img: category1, title: "Laptops", alt: "Loading..." },
    { id: 2, img: category2, title: "PC Gaming", alt: "Loading..." },
    { id: 3, img: category3, title: "Headphones", alt: "Loading..." },
    { id: 4, img: category4, title: "Monitors", alt: "Loading..." },
  ];

  // for repeat the content of array of object categories
  const repeatedCategories = [...categories, ...categories, ...categories];

  return (
    <ItemsLayout categories={["Top Categories"]} route="/categories" className="py-[21px]">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={4} 
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 3, spaceBetween: 10 }, // mobile
          375: { slidesPerView: 4, spaceBetween: 10 }, // mobile
          640: { slidesPerView: 4, spaceBetween: 15 }, // tablet
          1024: { slidesPerView: 4, spaceBetween: 20 }, // desktop
        }}
        className="w-full"
      >
        {repeatedCategories.map((categorie, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center">
              <div className="min-h-28 flex justify-center items-center">
                <Image
                  src={categorie.img}
                  alt={categorie.alt}
                  width={68}
                  height={28}
                  className="object-contain"
                />
              </div>
              <div className="mt-2 text-center">{categorie.title}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </ItemsLayout>
  );
};

export default TopCategories;
