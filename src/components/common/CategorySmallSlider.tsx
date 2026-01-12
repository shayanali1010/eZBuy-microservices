"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { Grid } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type categoryData = {
  id: number;
  title: string;
  quantity: string;
  image: string | StaticImageData;
};

interface Props {
  smallSliderData: categoryData[];
  className?: string;
  noOfSlidesView?: number;
}

const CategorySmallSlider = ({
  smallSliderData,
  className,
  noOfSlidesView,
}: Props) => {
  const sliderData = [
    ...smallSliderData,
    ...smallSliderData,
    ...smallSliderData,
  ];

  return (
    <div className="w-full ">
      <Swiper
        breakpoints={{
          // Mobile (0px se start)
          0: {
            slidesPerView: 2,
          },
          // Tablet (>=640px)
          640: {
            slidesPerView: noOfSlidesView ? noOfSlidesView : 5,
          },
        }}
        grid={{
          rows: 2,
          fill: "row",
        }}
        loop={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid]}
        className="mySwiper"
        // style={{ height: "300px" }}
      >
        <>
          {sliderData.map((item) => (
            <SwiperSlide className="" key={item.id}>
              <Link href={"/product-detail"}>
                <div
                  className={`flex items-center cursor-pointer ${
                    className ? className : ""
                  }`}
                >
                  <div className="w-[143px]">
                    <p className="font-[700] text-[14px] leading-[16.8px] align-middle">
                      {item.title}
                    </p>
                    <p className="font-[400] text-[12px] leading-[18px] align-middle">
                      {item.quantity} items
                    </p>
                  </div>
                  <div className="relative w-[30px] h-[50px]">
                    <Image
                      src={item.image}
                      alt="Loading..."
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </>
      </Swiper>
    </div>
  );
};

export default CategorySmallSlider;
