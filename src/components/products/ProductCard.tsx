"use client"

import { Star, ShoppingCart, Heart } from "lucide-react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  isOnSale?: boolean;
  discount?: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="flex flex-col w-full border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative bg-gray-50 p-3 h-48">
        {product.isOnSale && (
          <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-sm font-medium z-10">
            SALE
          </div>
        )}
        {product.discount && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-sm font-medium z-10">
            -{product.discount}
          </div>
        )}
        <div className="absolute top-2 right-2">
          <Heart className="w-4 h-4 text-gray-300 hover:text-red-500 cursor-pointer transition-colors" />
        </div>
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={180}
          height={180}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
        />
      </div>
      <div className="p-3 space-y-2">
        <h3 className="text-sm font-normal text-gray-800 line-clamp-2 leading-tight">{product.name}</h3>
        <div className="flex items-center gap-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-gray-200 text-gray-200"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-400">({product.reviews})</span>
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-base font-semibold text-red-600">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 px-3 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm font-medium">
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;