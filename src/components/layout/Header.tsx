"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/assets/headerImg/eZBuy_logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import LanguageSelector from "../common/LanguageSelector";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-[#131921FC] text-white font-[700] text-[14px] md:text-[15px] flex justify-between items-center p-3 md:p-5 px-6 md:px-12">
        {/* Left: Hamburger (mobile only) + Logo */}
        <div className="flex items-center gap-3">
          <div
            className="md:hidden text-2xl cursor-pointer"
            onClick={toggleMenu}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </div>
          <Link href="/" passHref>
            <Image
              src={logo}
              alt="logo"
              width={120}
              height={60}
              className="w-[90px] md:w-[120px] h-auto cursor-pointer"
            />
          </Link>
        </div>

        {/* ✅ Right: Language Selector Component */}
        <LanguageSelector position="bottom" />
      </div>

      {/* Mobile Sliding Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#131921FC] text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        {/* Drawer Header (Logo / Close) */}
        <div className="flex justify-between items-center p-4 border-b border-gray-600">
          <Link href="/" passHref>
            <Image
              src={logo}
              alt="logo"
              width={120}
              height={60}
              className="w-[90px] md:w-[120px] h-auto cursor-pointer"
            />
          </Link>
          <FiX
            className="text-2xl cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        {/* Drawer Menu */}
        <ul className="flex flex-col gap-3 p-4">
          <li>
            <Link href="/" className="hover:text-yellow-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-yellow-400">
              About
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-yellow-400">
              Products
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-400">
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex flex-col gap-3 p-4 border-t border-gray-600">
          <Link href="/login" className="hover:text-yellow-400">
            Log In
          </Link>
          <Link href="/signup" className="hover:text-yellow-400">
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
