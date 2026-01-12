"use client";

import React from "react";
import ItemsLayout from "../common/ItemsLayout";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import marqueimg1 from "../../../public/assets/homeImg/marqueimg1.png"
import marqueimg2 from "../../../public/assets/homeImg/marqueimg2.png"
import marqueimg3 from "../../../public/assets/homeImg/marqueimg3.png"
import marqueimg4 from "../../../public/assets/homeImg/marqueimg4.png"
import marqueimg5 from "../../../public/assets/homeImg/marqueimg5.png"
import marqueimg6 from "../../../public/assets/homeImg/marqueimg6.png"
import marqueimg7 from "../../../public/assets/homeImg/marqueimg7.png"
import marqueimg8 from "../../../public/assets/homeImg/marqueimg8.png"
import marqueimg9 from "../../../public/assets/homeImg/marqueimg9.png"
import marqueimg10 from "../../../public/assets/homeImg/marqueimg10.png"

const FeaturedBrands = () => {
  // Dummy brands array
  const brands = [
    { id: 1, img: marqueimg1, alt: "Loading..." },
    { id: 2, img: marqueimg2, alt: "Loading..." },
    { id: 3, img: marqueimg3, alt: "Loading..." },
    { id: 4, img: marqueimg4, alt: "Loading..." },
    { id: 5, img: marqueimg5, alt: "Loading..." },
    { id: 5, img: marqueimg6, alt: "Loading..." },
    { id: 5, img: marqueimg7, alt: "Loading..." },
    { id: 5, img: marqueimg8, alt: "Loading..." },
    { id: 5, img: marqueimg9, alt: "Loading..." },
    { id: 5, img:  marqueimg10, alt: "Loading..." },
  ];

  return (
    <ItemsLayout categories={["Featured Brands"]} route="/brands" className="px-6">
      {/* Upper Marquee → right side */}
      <Marquee
        direction="right"
        gradient={false}
        className="py-4 md:mt-5 lg:mt-0"
        pauseOnHover={true}
        speed={50}
      >
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="mx-6 flex items-center justify-center"
          >
            <Image
              src={brand.img}
              alt={brand.alt}
              width={72}
              height={33}
              className="object-contain"
            />
          </div>
        ))}
      </Marquee>

      {/* Lower Marquee → left side */}
      <Marquee
        direction="left"
        gradient={false}
        className="py-4 mt-6 md:mb-[22px] lg:mb-0"
        pauseOnHover={true}
        speed={50}
      >
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="mx-6 flex items-center justify-center"
          >
            <Image
              src={brand.img}
              alt={brand.alt}
              width={72}
              height={33}
              className="object-contain"
            />
          </div>
        ))}
      </Marquee>
    </ItemsLayout>
  );
};

export default FeaturedBrands;

