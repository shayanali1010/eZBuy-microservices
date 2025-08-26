"use client";

import React from "react";
import ItemsLayout from "../common/ItemsLayout";
import TopProductBanner from "./TopProductBanner";
import CategorySmallSlider from "../common/CategorySmallSlider";
import ProductSlider from "../common/ProductSlider";

// ---- Images ----
import item6 from "../../../public/assets/homeImg/item6.png";
import item7 from "../../../public/assets/homeImg/item7.png";
import item8 from "../../../public/assets/homeImg/item8.png";
import item9 from "../../../public/assets/homeImg/item9.png";
import item10 from "../../../public/assets/homeImg/item10.png";
import item11 from "../../../public/assets/homeImg/item11.png";
import item12 from "../../../public/assets/homeImg/item12.png";
import item13 from "../../../public/assets/homeImg/item13.png";
import item14 from "../../../public/assets/homeImg/item14.png";
import item15 from "../../../public/assets/homeImg/item15.png";

import image1 from "../../../public/assets/commonImg/topProductBanner1.png";
import image2 from "../../../public/assets/commonImg/topProductBanner2.png";

import categorySmallSlider1 from "../../../public/assets/commonImg/categorySmallSlider1.png";
import categorySmallSlider2 from "../../../public/assets/commonImg/categorySmallSlider2.png";
import categorySmallSlider3 from "../../../public/assets/commonImg/categorySmallSlider3.png";
import categorySmallSlider4 from "../../../public/assets/commonImg/categorySmallSlider4.png";
import categorySmallSlider5 from "../../../public/assets/commonImg/categorySmallSlider5.png";
import categorySmallSlider6 from "../../../public/assets/commonImg/categorySmallSlider6.png";
import categorySmallSlider7 from "../../../public/assets/commonImg/categorySmallSlider7.png";
import categorySmallSlider8 from "../../../public/assets/commonImg/categorySmallSlider8.png";
import categorySmallSlider9 from "../../../public/assets/commonImg/categorySmallSlider9.png";
import categorySmallSlider10 from "../../../public/assets/commonImg/categorySmallSlider10.png";
import categorySmallSlider11 from "../../../public/assets/commonImg/categorySmallSlider11.png";
import categorySmallSlider12 from "../../../public/assets/commonImg/categorySmallSlider12.png";
import categorySmallSlider13 from "../../../public/assets/commonImg/categorySmallSlider13.png";
import categorySmallSlider14 from "../../../public/assets/commonImg/categorySmallSlider14.png";
import categorySmallSlider15 from "../../../public/assets/commonImg/categorySmallSlider15.png";
import categorySmallSlider16 from "../../../public/assets/commonImg/categorySmallSlider16.png";
import { StaticImageData } from "next/image";

// ---- Types ----
type Product = {
  id: number;
  quantity: string;
  title: string;
  price: string;
  realPrice?: string;
  image: string | StaticImageData;
};

type BannerItem = {
  id: number;
  image: string | StaticImageData;
  title: string;
  text: string;
  price: string;
  textColor: "black" | "white";
  align: "left" | "right" | "top" | "bottom";
};

type SmallSliderItem = {
  id: number;
  title: string;
  quantity: string;
  image: string | StaticImageData;
};

type CategoryData = {
  id: number;
  categoryName: string;
  route: string;
  bannerData: BannerItem[];
  smallSliderData: SmallSliderItem[];
  products: Product[];
};

// ---- Dummy Data ----
const categoriesData: CategoryData[] = [
  {
    id: 1,
    categoryName: "Top Cellphones & Tablets",
    route: "/cellphones",
    bannerData: [
      {
        id: 1,
        image: image1,
        title: "redmi note 12 Pro+ 5g",
        text: "Rise to the challenge",
        price: "$1,199",
        textColor: "black",
        align: "bottom",
      },
      {
        id: 2,
        image: image2,
        title: "Samsung Galaxy Z Fold",
        text: "Unfold the future",
        price: "$1,499",
        textColor: "white",
        align: "top",
      },
    ],
    smallSliderData: [
      { id: 1, title: "iPhone (iOS)", quantity: "35", image: categorySmallSlider1 },
      { id: 2, title: "Android", quantity: "35", image: categorySmallSlider2 },
      { id: 3, title: "5G Support", quantity: "35", image: categorySmallSlider3 },
      { id: 4, title: "Apple Tablets", quantity: "35", image: categorySmallSlider4 },
      { id: 5, title: "Smartphone Chargers", quantity: "35", image: categorySmallSlider5 },
      { id: 6, title: "Gaming", quantity: "35", image: categorySmallSlider6 },
      { id: 7, title: "Xiaomi", quantity: "35", image: categorySmallSlider7 },
      { id: 8, title: "Accessories", quantity: "35", image: categorySmallSlider8 },
      { id: 9, title: "Samsung Tablets", quantity: "35", image: categorySmallSlider9 },
      { id: 10, title: "eReader", quantity: "35", image: categorySmallSlider10 },
    ],
    products: [
      {
        id: 1,
        quantity: "123",
        title:
          "SROK Smart Phone 128GB Oled Retina",
        price: "$120",
        realPrice: "$134.5",
        image: item6,
      },
      {
        id: 2,
        quantity: "0",
        title: "aPod Pro Tablet 2023 LTE + Wifi GPS Cellular 12.9 Inch 512GB",
        price: "$90",
        image: item7,
      },
      {
        id: 3,
        quantity: "123",
        title: "OPod Pro 12.9 Inch M1 2023 64GB + Wifi GPS",
        price: "$50",
        realPrice: "$143.88",
        image: item8,
      },
      {
        id: 4,
        quantity: "123",
        title: "Xiamoi Redmi Note 5, 64GB",
        price: "$140",
        image: item9,
      },
      {
        id: 5,
        quantity: "9",
        title: "Microsute Alpha Ultra S5 Surface 128GB 2022 Sliver",
        price: "$140",
        image: item10,
      },
    ],
  },
  {
    id: 2,
    categoryName: "Laptops & Accessories",
    route: "/laptops",
    bannerData: [
      {
        id: 1,
        image: image1,
        title: "Best Laptops",
        text: "High performance for work",
        price: "$1,499",
        textColor: "black",
        align: "left",
      },
      {
        id: 1,
        image: image2,
        title: "Best Laptops",
        text: "High performance for work",
        price: "$1,499",
        textColor: "white",
        align: "top",
      },
    ],
    smallSliderData: [
      { id: 1, title: "MacBook", quantity: "12", image: categorySmallSlider11 },
      { id: 2, title: "Gaming PC", quantity: "20", image: categorySmallSlider12 },
      { id: 2, title: "Laptop Office", quantity: "21", image: categorySmallSlider13 },
      { id: 2, title: "Laptop 15’’", quantity: "11", image: categorySmallSlider14 },
      { id: 2, title: "M1 2023", quantity: "220", image: categorySmallSlider15 },
      { id: 2, title: "Secondhand", quantity: "14", image: categorySmallSlider16 },
    ],
    products: [
      {
        id: 1,
        quantity: "20",
        title: "Pineapple Macbook Pro 2022 M1 / 512 GB",
        price: "$2399",
        image: item11,
      },
      {
        id: 2,
        quantity: "0",
        title: "C&O Bluetooth Speaker",
        price: "$1699",
        realPrice: "$143.88",
        image: item12,
      },
      {
        id: 3,
        quantity: "15",
        title: "Gigaby Custome Case i7/16GB / SSD 256GB",
        price: "$1699",
        image: item13,
      },
      {
        id: 4,
        quantity: "0",
        title: "BEOS PC Gaming Case",
        price: "$1699",
        realPrice: "$143.88",
        image: item14,
      },
      {
        id: 5,
        quantity: "15",
        title: "aMoc All-in-one Computer M1",
        price: "$1699",
        image: item15,
      },
    ],
  },
];

// ---- Component ----
const TopCategoryProducts = () => {
  return (
    <div>
      {categoriesData.map((category) => (
        <ItemsLayout
          key={category.id}
          categories={[category.categoryName]}
          route={category.route}
          className="mt-3"
        >
          <div className="grid grid-cols-12 gap-y-8 md:gap-8 items-center">
            <div className="col-span-12 md:col-span-6">
              <TopProductBanner bannerData={category.bannerData} />
            </div>
            <div className="col-span-12 md:col-span-6">
              <CategorySmallSlider
                smallSliderData={category.smallSliderData}
                noOfSlidesView={3}
              />
            </div>
          </div>
          <ProductSlider products={category.products} className={"p-8"} />
        </ItemsLayout>
      ))}
    </div>
  );
};

export default TopCategoryProducts;
