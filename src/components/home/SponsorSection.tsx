"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// images
import sponsor1 from "../../../public/assets/homeImg/sponsor1.png";
import sponsor2 from "../../../public/assets/homeImg/sponsor2.png";

/**
 * NOTE: yahi structure baad me API se as-is aayega
 * (sirf is array ko API response se replace kar dena).
 */
type SponsorCard = {
  id: number;
  brand?: string;
  title: string;
  subtitle?: string;
  price?: string;
  buttonText?: string | null;
  image: StaticImageData;
  link: string;
  /** text kahan dikhana hai */
  align: "left" | "right";
  /** text color theme (image ki roshni ke hisab se) */
  theme: "light" | "dark";
};

const dummySponsor: SponsorCard[] = [
  {
    id: 1,
    brand: "XDMIA",
    title: "Sport Water Resistance Watch",
    subtitle: "",
    price: "",
    buttonText: "SHOP NOW",
    image: sponsor1,
    link: "/products/watch",
    align: "right",
    theme: "light",
  },
  {
    id: 2,
    brand: "OKODO",
    title: "HERO 11+ BLACK",
    subtitle: "",
    price: "FROM $169",
    buttonText: null,
    image: sponsor2,
    link: "/products/hero-11-black",
    align: "left",
    theme: "dark",
  },
];

export default function SponsorSection() {
  const data = dummySponsor;

  return (
    <div className="flex flex-col gap-1 md:gap-3">
      {data.map((item) => (
        <div
          key={item.id}
          className="relative w-full h-[180px] sm:h-[205px] lg:h-[230px] rounded-xl overflow-hidden"
        >
          {/* Background image (pure bg, text is on top of image) */}
          <Link href={item.link} className="block w-full h-full">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-fill"
              priority={true}
            />
          </Link>

          {/* Text overlay (exactly on image) */}
          <div className="absolute inset-0">
            <div
              className={`h-full w-full p-5 lg:p-6 xl:p-10 flex items-center ${
                item.align === "right" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`${
                  item.align === "right" ? "text-right" : "text-left"
                } ${item.theme === "dark" ? "text-white" : "text-gray-900"}
                   w-[55%] sm:w-[65%] lg:w-[78%] xl:w-[44%] max-w-[260px]`}
              >
                {item.brand && (
                  <p className="font-[400] md:text-[8px] text-[10px] leading-[15px] align-middle uppercase">
                    {item.brand}
                  </p>
                )}

                <h3 className="font-[600] leading-[17px] lg:leading-[22.8px] align-middle text-[12px] lg:text-[19px]">
                  {item.title}
                </h3>

                {item.subtitle && (
                  <p className="text-[11px] lg:text-[13px] mt-0.5 opacity-90">
                    {item.subtitle}
                  </p>
                )}

                {item.price && (
                  <p className="font-[400] leading-[28.8px] align-middle text-[12px] sm:text-[14px] text-[#1ABA1A]">
                    {item.price}
                  </p>
                )}

                {item.buttonText && (
                  <Link
                    href={item.link}
                    className={`inline-block mt-3 rounded-full px-4 py-2 text-[10px] lg:text-[12px] font-medium ${
                      // upar wali image mein black pill button hai
                      item.theme === "light"
                        ? "bg-black text-white hover:bg-gray-800"
                        : "bg-white text-black hover:bg-gray-100"
                    } transition`}
                  >
                    {item.buttonText}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
