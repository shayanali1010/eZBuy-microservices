"use client";
import Link from "next/link";
import React, { useState } from "react";

type ItemsLayoutProps = {
  children?: React.ReactNode;
  className?: string;
  categories: string[];
  route?: string;
};

const ItemsLayout = ({ children, className, categories, route }: ItemsLayoutProps) => {
  const [selectedItem, setSelectedItem] = useState<string>(categories[0]);

  return (
    <div className={`rounded-lg p-4 bg-white ${className ? className : ""}`}>
      {/* Top Heading */}
      <div className="flex justify-between m-5 text-black">
        <div className="gap-2 md:gap-3 flex font-[700] text-[11px] md:text-[16px] lg:text-[18px]  leading-[21.6px] align-middle uppercase">
          {categories?.map((item, index) => (
            <p
              key={index}
              onClick={() => setSelectedItem(item)}
              className={`cursor-pointer transition-colors duration-200 ${
                selectedItem === item ? "text-black" : "text-[#666666]"
              }`}
            >
              {item}
            </p>
          ))}
        </div>
        <Link href={route?route: ""} className="font-[400] text-[10px] md:text-[13px] leading-[19.5px] align-middle text-[#666666] cursor-pointer">
          View All
        </Link>
      </div>

      <main className="">{children}</main>
    </div>
  );
};

export default ItemsLayout;
