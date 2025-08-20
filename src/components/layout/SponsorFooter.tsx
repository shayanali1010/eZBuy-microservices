"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Dummy images (tum apne sahi paths laga dena)
import paypalImg from "../../../public/assets/sponsorFooterImg/paypal.png";
import mastercardImg from "../../../public/assets/sponsorFooterImg/mastercard.png";
import visaImg from "../../../public/assets/sponsorFooterImg/visa.png";
import stripeImg from "../../../public/assets/sponsorFooterImg/stripe.png";
import klarnaImg from "../../../public/assets/sponsorFooterImg/klarna.png";

const SponsorFooter = () => {
  const sponsors = [
    { name: "PayPal", img: paypalImg, url: "https://paypal.com" },
    { name: "MasterCard", img: mastercardImg, url: "https://mastercard.com" },
    { name: "VISA", img: visaImg, url: "https://visa.com" },
    { name: "Stripe", img: stripeImg, url: "https://stripe.com" },
    { name: "Klarna", img: klarnaImg, url: "https://www.klarna.com" },
  ];

  return (
    <footer className="bg-[#232F3E] text-white">
      {/* Payment / Sponsor Logos */}
      <div className="flex flex-wrap justify-center items-center gap-4 py-6 px-4">
        {sponsors.map((sponsor, idx) => (
          <Link
            key={idx}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <Image
              src={sponsor.img}
              alt={sponsor.name}
              width={40}
              height={20}
              className="object-contain"
            />
          </Link>
        ))}
      </div>

      {/* Copyrights */}
      <div className="border-t border-gray-600 text-center py-4 px-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} eZBuy. All Rights Reserved.
      </div>
    </footer>
  );
};

export default SponsorFooter;
