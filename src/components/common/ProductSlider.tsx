"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image, { StaticImageData } from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { Autoplay } from "swiper/modules";

// ---------------- Types ----------------
type ProductItem = {
  id: number;
  quantity?: string;
  title: string;
  price?: string;
  realPrice?: string;
  image: string | StaticImageData;
};

type BrandItem = {
  id: number;
  title: string;
  image: string | StaticImageData;
  message?: string;
  quantity?: string;
};

// Props type: products can be ProductItem[] or BrandItem[]
interface ItemsSliderProps {
  products: (ProductItem | BrandItem)[];
  className?: string;
  noOfCards?: number;
  delayAutoPlayValue?: number;
}

// ---------------- Component ----------------
const ProductSlider = ({ products, className, noOfCards, delayAutoPlayValue } : ItemsSliderProps) => {
  return (
    <div className={`w-full ${className || ""}`}>
      <Swiper
        spaceBetween={13}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 }, // xs
          375: { slidesPerView: 2 }, 
          768: { slidesPerView: 3 }, // md
          1024: { slidesPerView: 4 }, // lg
          1280: { slidesPerView: noOfCards? noOfCards: 5 }, // xl+
        }}
        modules={[Autoplay]}
        autoplay={{
          delay: delayAutoPlayValue? delayAutoPlayValue : 5000,
          disableOnInteraction: false,
        }}
        className="my-8"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className={`bg-white shadow-md rounded-xl p-3 sm:p-4 hover:shadow-lg transition flex flex-col h-full`}>
              {/* Image */}
              <div className="w-full h-28 sm:h-40 relative">
                <Image
                  src={product.image}
                  alt="Product Image"
                  fill
                  className={`rounded-md ${!product.quantity? "object-fill" : "object-contain"}`}
                />
              </div>

              {/* Quantity (only if exists) */}
              {"quantity" in product && (
                <p className="text-xs sm:text-[13px] font-[400] leading-[16px] sm:leading-[19.5px] text-[#666666] text-center">
                  ({product.quantity})
                </p>
              )}

              <div className={`${product.quantity? " min-h-[67px] sm:min-h-[80px] md:min-h-[107px] lg:min-h-[109px]" : "min-h-[110px] sm:min-h-[160px] md:min-h-[145px] xlg:min-h-[124px]"}`}>
              {/* Title */}
                  {product.title && (
                <h3 className={`mt-2 sm:mt-3 text-sm sm:text-lg font-semibold line-clamp-3`}>
                  {product.title}
                </h3>
              )}

              {/* Message (only for BrandItem) */}
              {"message" in product && (
                <h3 className="mt-2 sm:mt-3 text-xs sm:text-[13px] leading-[18px] sm:leading-[22.1px] text-[#666666] font-[400]">
                  {product.message}
                </h3>
              )}
              </div>

              {/* Price section (only for ProductItem) */}
              {"price" in product && (
                <div className="flex gap-1 items-center">
                  <h3
                    className={`mt-2 sm:mt-3 text-sm sm:text-[18px] leading-[18px] sm:leading-[21.6px] font-[600] ${
                      product.realPrice ? "text-[#F1352B]" : "text-[#1ABA1A]"
                    }`}
                  >
                    {product.price}
                  </h3>
                  {product.realPrice && (
                    <h3 className="mt-2 sm:mt-3 text-xs sm:text-[14px] leading-[14px] sm:leading-[16.8px] line-through font-[600] text-[#666666]">
                      {product.realPrice}
                    </h3>
                  )}
                </div>
              )}

              {/* Stock status / Button */}
              {Number(product.quantity) > 0 ? (
                  <div className="flex gap-1 mt-4 sm:mt-6 items-center">
                    <FaCheckCircle className="fill-green-500 text-xs sm:text-base" />
                    <p className="text-xs sm:text-[12px] font-[400] leading-[16px] sm:leading-[20.4px]">
                      In stock
                    </p>
                  </div>
                ) : Number(product.quantity) === 0 ? (
                  <div className="flex gap-1 mt-4 sm:mt-6 items-center">
                    <RxCrossCircled className="text-red-500 text-xs sm:text-base" />
                    <p className="text-xs sm:text-[12px] font-[400] leading-[16px] sm:leading-[20.4px]">
                      Out of stock
                    </p>
                  </div>
                ) : (
                    <button className="text-[10px] sm:text-[11px] mt-4 sm:mt-5 font-[500] uppercase w-[100px] sm:w-[130px] border rounded-lg hover:bg-[#1aba1a31] border-[#1ABA1A] p-1.5 sm:p-2 text-[#1ABA1A]">
                    Shop Now
                  </button>
                )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
