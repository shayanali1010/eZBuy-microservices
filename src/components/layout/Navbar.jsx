"use client"
import Link from "next/link";
// import Image from "next/image";
import { FaRegHeart, FaUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';

const Navbar = () => {

  return (
    <>
      {/* Navbar */}
      <div className="bg-[#131921FC] text-white font-[700] text-[14px] md:text-[15px] flex items-center justify-between p-3 px-6 md:px-12">

        {/* Left: Hotline (swapped from Header) */}
        <div className="text-sm md:text-base flex gap-2">
          <FiPhoneCall className='text-green-500'/>
          <span>+92 3115411128</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex list-none gap-6 flex-1 justify-center">
          <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link href="/about" className="hover:text-yellow-400">About</Link></li>
          <li><Link href="/proucts" className="hover:text-yellow-400">Products</Link></li>
          <li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-3">
            <Link href="/login" className="hover:text-yellow-400">Log In</Link>
            <Link href="/signup" className="hover:text-yellow-400">Sign Up</Link>
          </div>
          <div className="flex gap-2">
            <div className="rounded-full p-[0.4rem] bg-white cursor-pointer">
              <FaRegHeart className="text-black text-xl hover:text-red-600" />
            </div>
            <div className="rounded-full p-[0.4rem] bg-white cursor-pointer">
              <MdOutlineShoppingCart className="text-black text-xl hover:text-yellow-500" />
            </div>
            <div className="rounded-full p-[0.4rem] bg-white cursor-pointer">
              <FaUser className="text-black text-xl hover:text-green-600" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
