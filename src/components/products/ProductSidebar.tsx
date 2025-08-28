"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, Star } from "lucide-react"

interface Category {
  name: string
  count?: number
  subcategories?: Category[]
}

const categories: Category[] = [
  { name: "All Categories" },
  { name: "Accessories", count: 15 },
  { name: "Audio", count: 8 },
  { name: "Bags", count: 12 },
  { name: "Camera", count: 6 },
  { name: "Car", count: 4 },
  { name: "Chargers", count: 18 },
  { name: "Computer", count: 22 },
  { name: "Drone", count: 3 },
  { name: "Gaming", count: 14 },
  { name: "Headphone", count: 25 },
  { name: "Health & Beauty", count: 9 },
  { name: "Home Appliances", count: 16 },
  { name: "Laptop", count: 11 },
  { name: "Life Style", count: 7 },
  { name: "Mobile", count: 45 },
  { name: "Office", count: 13 },
  { name: "Security", count: 8 },
  { name: "Smart Home", count: 19 },
  { name: "Sports", count: 12 },
  { name: "Tablet", count: 9 },
  { name: "Toys", count: 21 },
  { name: "TV", count: 6 },
  { name: "Wearable", count: 17 },
]

const brands = ["Apple", "Samsung", "Xiaomi", "Huawei", "OnePlus", "Google", "Sony", "LG", "Motorola", "Nokia"]

const colors = [
  "#000000",
  "#FFFFFF",
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
  "#00FFFF",
  "#FFA500",
  "#800080",
  "#FFC0CB",
  "#A52A2A",
]

export default function ProductSidebar() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["CATEGORIES"])
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [priceRange, setPriceRange] = useState([0, 1000])

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full overflow-y-auto">
      {/* Categories Section */}
      <div className="p-4">
        <div
          className="flex items-center justify-between cursor-pointer mb-3"
          onClick={() => toggleCategory("CATEGORIES")}
        >
          <h3 className="font-semibold text-gray-900 text-sm">CATEGORIES</h3>
          {expandedCategories.includes("CATEGORIES") ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </div>

        {expandedCategories.includes("CATEGORIES") && (
          <div className="space-y-1">
            {categories.map((category) => (
              <div
                key={category.name}
                className={`flex items-center justify-between py-1 px-2 rounded cursor-pointer text-sm ${
                  selectedCategory === category.name ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setSelectedCategory(category.name)}
              >
                <span>{category.name}</span>
                {category.count && <span className="text-xs text-gray-500">({category.count})</span>}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Price Range */}
      <div className="px-4 pb-4">
        <div className="flex items-center justify-between cursor-pointer mb-3" onClick={() => toggleCategory("PRICE")}>
          <h3 className="font-semibold text-gray-900 text-sm">PRICE</h3>
          <ChevronDown className="w-4 h-4" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <input
              type="number"
              placeholder="Min"
              className="w-20 px-2 py-1 border border-gray-300 rounded text-xs"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([Number.parseInt(e.target.value) || 0, priceRange[1]])}
            />
            <span className="text-gray-500">-</span>
            <input
              type="number"
              placeholder="Max"
              className="w-20 px-2 py-1 border border-gray-300 rounded text-xs"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value) || 1000])}
            />
          </div>
        </div>
      </div>

      {/* Brand Filter */}
      <div className="px-4 pb-4">
        <div className="flex items-center justify-between cursor-pointer mb-3" onClick={() => toggleCategory("BRAND")}>
          <h3 className="font-semibold text-gray-900 text-sm">BRAND</h3>
          <ChevronDown className="w-4 h-4" />
        </div>
        <div className="space-y-1 max-h-32 overflow-y-auto">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="w-3 h-3" />
              <span className="text-gray-700">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Rating Filter */}
      <div className="px-4 pb-4">
        <div className="flex items-center justify-between cursor-pointer mb-3" onClick={() => toggleCategory("RATING")}>
          <h3 className="font-semibold text-gray-900 text-sm">RATING</h3>
          <ChevronDown className="w-4 h-4" />
        </div>
        <div className="space-y-1">
          {[5, 4, 3, 2, 1].map((rating) => (
            <label key={rating} className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="w-3 h-3" />
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
                <span className="ml-1 text-gray-600">& Up</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div className="px-4 pb-4">
        <div className="flex items-center justify-between cursor-pointer mb-3" onClick={() => toggleCategory("COLOR")}>
          <h3 className="font-semibold text-gray-900 text-sm">COLOR</h3>
          <ChevronDown className="w-4 h-4" />
        </div>
        <div className="grid grid-cols-6 gap-2">
          {colors.map((color, index) => (
            <div
              key={index}
              className="w-6 h-6 rounded border border-gray-300 cursor-pointer hover:scale-110 transition-transform"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
