import type React from "react"
import Image from "next/image"

interface CategoryCardProps {
  name: string
  itemCount: number
  image: string
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, itemCount, image }) => {
  return (
    <div className="bg-white rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex flex-col">
        <h3 className="font-medium text-gray-900 text-sm">{name}</h3>
        <p className="text-gray-500 text-xs mt-1">{itemCount} items</p>
      </div>
      <div className="w-12 h-12 flex-shrink-0">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={48}
          height={48}
          className="w-full h-full object-cover rounded"
        />
      </div>
    </div>
  )
}

const PopularCategories: React.FC = () => {
  const categories = [
    { name: "iPhone (iOS)", itemCount: 74, image: "/assets/productpopularcategoriesImg/modern-smartphone.png" },
    { name: "Android", itemCount: 35, image: "/assets/productpopularcategoriesImg/android-phone.png" },
    { name: "5G Support", itemCount: 12, image: "/assets/productpopularcategoriesImg/5g-smartphone.png" },
    { name: "Apple Tablets", itemCount: 22, image: "/assets/productpopularcategoriesImg/ipad-tablet.png" },
    { name: "Smartphone Chargers", itemCount: 33, image: "/assets/productpopularcategoriesImg/phone-charger.png" },
    { name: "Gaming", itemCount: 9, image: "/assets/productpopularcategoriesImg/gaming-phone.png" },
    { name: "Xiaomi", itemCount: 52, image: "/assets/productpopularcategoriesImg/xiaomi-phone.png" },
    { name: "Accessories", itemCount: 29, image: "/assets/productpopularcategoriesImg/variety-phone-accessories.png" },
    { name: "Samsung Tablets", itemCount: 26, image: "/assets/productpopularcategoriesImg/samsung-tablet.png" },
    { name: "eReader", itemCount: 5, image: "/assets/productpopularcategoriesImg/ereader-device.png" },
  ]

  return (
    <div className="bg-gray-50 p-6 w-full max-w-[1360px] mx-auto overflow-hidden">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">POPULAR CATEGORIES</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 min-h-[200px]">
        {categories.map((category, index) => (
          <CategoryCard key={index} name={category.name} itemCount={category.itemCount} image={category.image} />
        ))}
      </div>
    </div>
  )
}

export default PopularCategories
