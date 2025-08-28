"use client"

import { useState } from "react";
import ProductCard from "./ProductCard";

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

const products: Product[] = [
  {
    id: 1,
    name: "Samsung Galaxy S23 Ultra 256GB",
    image: "/assets/productsgrid/prod1.png",
    price: 899.99,
    originalPrice: 1199.99,
    rating: 4.7,
    reviews: 234,
    isOnSale: true,
    discount: "25%",
  },
  {
    id: 2,
    name: "MacBook Pro 14-inch M2 Chip",
    image: "/assets/productsgrid/prod2.png",
    price: 1999.99,
    originalPrice: 2399.99,
    rating: 4.9,
    reviews: 156,
    isOnSale: true,
    discount: "17%",
  },
  {
    id: 3,
    name: "Sony WH-1000XM5 Headphones",
    image: "/assets/productsgrid/prod3.png",
    price: 349.99,
    originalPrice: 399.99,
    rating: 4.8,
    reviews: 445,
    isOnSale: true,
    discount: "13%",
  },
  {
    id: 4,
    name: "iPad Air 5th Generation",
    image: "/assets/productsgrid/prod4.png",
    price: 599.99,
    originalPrice: 699.99,
    rating: 4.6,
    reviews: 189,
    isOnSale: true,
    discount: "14%",
  },
  {
    id: 5,
    name: "iPhone 15 Pro Max 512GB",
    image: "/assets/productsgrid/prodd5.png",
    price: 1299.99,
    originalPrice: 1399.99,
    rating: 4.8,
    reviews: 567,
    isOnSale: true,
    discount: "7%",
  },
  {
    id: 6,
    name: "Dell XPS 13 Laptop",
    image: "/assets/productsgrid/prod6.png",
    price: 1099.99,
    originalPrice: 1299.99,
    rating: 4.5,
    reviews: 123,
    isOnSale: true,
    discount: "15%",
  },
  {
    id: 7,
    name: "AirPods Pro 2nd Generation",
    image: "/assets/productsgrid/prod7.png",
    price: 229.99,
    originalPrice: 249.99,
    rating: 4.7,
    reviews: 789,
    isOnSale: true,
    discount: "8%",
  },
  {
    id: 8,
    name: 'Samsung 55" QLED 4K TV',
    image: "/assets/productsgrid/prod8.png",
    price: 799.99,
    originalPrice: 999.99,
    rating: 4.6,
    reviews: 234,
    isOnSale: true,
    discount: "20%",
  },
  {
    id: 9,
    name: "Nintendo Switch OLED",
    image: "/assets/productsgrid/prod9.png",
    price: 349.99,
    rating: 4.8,
    reviews: 456,
  },
  {
    id: 10,
    name: "Google Pixel 8 Pro",
    image: "/assets/productsgrid/prod10.png",
    price: 899.99,
    originalPrice: 999.99,
    rating: 4.5,
    reviews: 167,
    isOnSale: true,
    discount: "10%",
  },
  {
    id: 11,
    name: "Microsoft Surface Pro 9",
    image: "/assets/productsgrid/prod11.png",
    price: 1099.99,
    originalPrice: 1299.99,
    rating: 4.4,
    reviews: 89,
    isOnSale: true,
    discount: "15%",
  },
  {
    id: 12,
    name: "Canon EOS R6 Mark II",
    image: "/assets/productsgrid/prod12.png",
    price: 2499.99,
    rating: 4.9,
    reviews: 78,
  },
  {
    id: 13,
    name: "Apple Watch Series 9",
    image: "/assets/productsgrid/prod4.png",
    price: 399.99,
    originalPrice: 429.99,
    rating: 4.7,
    reviews: 345,
    isOnSale: true,
    discount: "7%",
  },
  {
    id: 14,
    name: "Sony PlayStation 5",
    image: "/assets/productsgrid/prod9.png",
    price: 499.99,
    rating: 4.9,
    reviews: 1234,
  },
  {
    id: 15,
    name: "Bose QuietComfort Earbuds",
    image: "/assets/productsgrid/prod7.png",
    price: 279.99,
    originalPrice: 329.99,
    rating: 4.6,
    reviews: 567,
    isOnSale: true,
    discount: "15%",
  },
  {
    id: 16,
    name: "Microsoft Xbox Series X",
    image: "/assets/productsgrid/prod11.png",
    price: 499.99,
    rating: 4.8,
    reviews: 890,
  },
];

const PRODUCTS_PER_PAGE = 12;

export default function ProductsGrid() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  return (
    <div className="bg-white">
      <div className="grid grid-cols-4 gap-6 p-6">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex items-center justify-center py-6 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ← Previous
          </button>
          {[...Array(totalPages)].map((_, i) => {
            const page = i + 1;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 text-sm rounded-md transition-colors ${
                  currentPage === page ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            );
          })}
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}