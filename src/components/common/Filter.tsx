"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Filter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const categories = [
    "All Categories",
    "Electronics",
    "Fashion",
    "Home & Kitchen",
    "Sports",
    "Toys & Games",
    "Health & Beauty",
    "Automotive",
  ];

  const handleSelect = (cat: string) => {
    setSelectedCategory(cat);
    setIsOpen(false);
  };

  return (
    <div className="bg-[#232F3E] text-white w-full">
      <div className="flex flex-col lg:flex-row items-center justify-between px-3 sm:px-6 md:px-8 lg:px-12 py-3 gap-3 sm:gap-4">
        
        {/* Search Bar */}
        <div className="flex items-center w-[95%] xs:w-full lg:w-1/2 bg-white rounded-full relative shadow-md">
          {/* Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 text-[11px] sm:text-sm rounded-l-full text-black font-medium bg-gray-100 hover:bg-gray-200"
            >
                <span className="w-[70px] sm:w-full overflow-hidden text-ellipsis whitespace-nowrap">{selectedCategory}</span>
              <IoIosArrowDown className="text-xs sm:text-sm" />
            </button>

            {/* Dropdown List */}
            {isOpen && (
              <ul className="absolute left-0 top-full mt-1 w-40 sm:w-52 bg-white text-black shadow-lg rounded-md z-50">
                {categories.map((cat, idx) => (
                  <li
                    key={idx}
                    onClick={() => handleSelect(cat)}
                    className="px-3 sm:px-4 py-2 text-xs sm:text-sm hover:bg-gray-100 cursor-pointer"
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Input */}
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow px-0 md:px-2 py-2 outline-none text-black text-[11px] sm:text-sm"
          />

          {/* Search Icon Button */}
          <button className="bg-yellow-400 px-3 sm:px-4 py-2 flex items-center justify-center rounded-r-full hover:bg-yellow-500 transition">
            <FaSearch className="text-black text-xs sm:text-base" />
          </button>
        </div>

        {/* Right Side Info */}
        <div className="flex justify-center lg:justify-end gap-1 sm:gap-3 md:gap-6 text-[10px] sm:text-xs md:text-sm font-semibold text-gray-200 text-center">
          <span>FREE SHIPPING OVER $199</span>
          <span>30 DAYS MONEY BACK</span>
          <span>100% SECURE PAYMENT</span>
        </div>
      </div>
    </div>
  );
};

export default Filter;
