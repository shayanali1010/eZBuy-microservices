
import Image from "next/image";
import { TiTick } from "react-icons/ti";
 interface Props {
  cartData: {
    id: number;
    isNew: boolean;
    image: string;
    title: string;
    price: number;
    quantity: number;
    shipping: number;
    stock: string;
  };
}

export default function CartComp({ cartData  }: Props) {
  const {  image, title, price, shipping } = cartData;
  return (
    <div className="relative w-full rounded-xl  border-gray-100 bg-[#FAFAFA] shadow-sm">
      {/* NEW badge */}
      <span className="absolute z-50 left-3 top-3 sm:left-7 sm:top-6 inline-flex items-center rounded-[4px] bg-[#0F172A] px-1.5 py-0.5 text-[8px] sm:text-[9px] font-semibold uppercase tracking-wider text-white">
        NEW
      </span>

      <div className="flex flex-col sm:flex-row items-center sm:items-start p-3 sm:p-5 gap-4">
        {/* Image */}
        <div className="relative bg-white p-3 py-6 sm:py-8 border shrink-0 overflow-hidden rounded-lg w-28 h-28 sm:w-auto sm:h-auto">
          <Image
            src={image}
            alt="aPod Pro Tablet"
            width={100}
            height={100}
            className="h-full w-full object-contain"
            priority
          />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1 text-center sm:text-left">
          {/* Title */}
          <h3 className="text-sm sm:text-base font-medium text-black">
            {title}
          </h3>

          {/* Price */}
          <div className="mt-1 text-lg sm:text-xl font-bold text-[#E11D48]">${price}</div>

          {/* Quantity + shipping */}
          <div className="mt-2 flex flex-col w-full   items-center md:items-start   md:w-full gap-2">
            {/* Quantity stepper */}
            <div className="inline-flex items-center w-fit    rounded-lg border px-2 sm:px-3 shadow-sm">
              <button
                type="button"
                className="grid min-w-[1.25rem] place-items-center px-1 sm:px-2 text-[#000000] text-xl sm:text-2xl font-extrabold"
              >
                -
              </button>
              <span className="min-w-[1.25rem] select-none px-1 sm:px-2 text-sm sm:text-md text-[#000000] font-extrabold">
                1
              </span>
              <button
                type="button"
                className="grid min-w-[1.25rem] place-items-center px-1 sm:px-2 text-[#000000] text-lg sm:text-xl font-extrabold"
              >
                +
              </button>
            </div>

            {/* Shipping chip */}
            <span className="rounded-md w-fit bg-gray-100 px-2 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wide text-black">
              ${shipping} Shipping
            </span>
          </div>

          {/* Stock row */}
          <div className="my-2 flex justify-center sm:justify-start items-center gap-1.5">
            <span className="flex items-center justify-center rounded-full bg-[#E11D48] text-white text-xs sm:text-sm p-[2px]">
              <TiTick />
            </span>
            <span className="text-[10px] sm:text-xs font-bold">In stock</span>
          </div>
        </div>
      </div>
    </div>
  );
}
