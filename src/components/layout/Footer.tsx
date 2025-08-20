"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import LanguageSelector from "../common/LanguageSelector";
import logo from "../../../public/assets/headerImg/eZBuy_logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#232F3E] text-white py-10 px-5 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        
        {/* Logo & Contact */}
        <div className="flex flex-col space-y-3">
          <Link href="/" passHref>
            <Image
              src={logo}
              alt="logo"
              width={120}
              height={60}
              className="w-[90px] md:w-[120px] h-auto cursor-pointer"
            />
          </Link>
          <p className="text-sm">HOTLINE 24/7</p>
          <p className="text-green-500 font-bold text-lg">(+92) 3115411128</p>
          <p className="text-sm">ezbuy@gmail.com</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <Link href="#" className="hover:text-gray-400">
              <FaFacebook size={18} />
            </Link>
            <Link href="#" className="hover:text-gray-400">
              <FaTwitter size={18} />
            </Link>
            <Link href="#" className="hover:text-gray-400">
              <FaInstagram size={18} />
            </Link>
            <Link href="#" className="hover:text-gray-400">
              <FaYoutube size={18} />
            </Link>
          </div>
        </div>

        {/* Top Categories */}
        <div>
          <h3 className="font-bold mb-3">TOP CATEGORIES</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">Laptops</Link></li>
            <li><Link href="#">PC & Computers</Link></li>
            <li><Link href="#">Cell Phones</Link></li>
            <li><Link href="#">Tablets</Link></li>
            <li><Link href="#">Gaming & VR</Link></li>
            <li><Link href="#">Networks</Link></li>
            <li><Link href="#">Cameras</Link></li>
            <li><Link href="#">Sounds</Link></li>
            <li><Link href="#">Office</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold mb-3">COMPANY</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">About Swoo</Link></li>
            <li><Link href="#">Contact</Link></li>
            <li><Link href="#">Career</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Sitemap</Link></li>
            <li><Link href="#">Store Locations</Link></li>
          </ul>
        </div>

        {/* Help Center */}
        <div>
          <h3 className="font-bold mb-3">HELP CENTER</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">Customer Service</Link></li>
            <li><Link href="#">Policy</Link></li>
            <li><Link href="#">Terms & Conditions</Link></li>
            <li><Link href="#">Track Order</Link></li>
            <li><Link href="#">FAQs</Link></li>
            <li><Link href="#">My Account</Link></li>
            <li><Link href="#">Product Support</Link></li>
          </ul>
        </div>

        {/* Partner */}
        <div>
          <h3 className="font-bold mb-3">PARTNER</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">Become Seller</Link></li>
            <li><Link href="#">Affiliate</Link></li>
            <li><Link href="#">Advertise</Link></li>
            <li><Link href="#">Partnership</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom - Currency/Language */}
      <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex gap-2">
          <select className="bg-[#232F3E] border border-gray-500 px-2 py-1 text-sm">
            <option>Eng</option>
            <option>Urdu</option>
          </select>
          <div className="bg-[#232F3E] border border-gray-500 px-2 py-1 text-sm">
            <LanguageSelector position="top" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
