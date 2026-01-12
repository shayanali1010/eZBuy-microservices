import React from "react";
import ItemsLayout from "../common/ItemsLayout";
import brand1 from "../../../public/assets/homeImg/brand1.jpg";
import brand2 from "../../../public/assets/homeImg/brand2.jpg";
import brand3 from "../../../public/assets/homeImg/brand3.jpg";
import brand4 from "../../../public/assets/homeImg/brand4.jpg";
import ProductSlider from "../common/ProductSlider";

const brands = [
  {
    id: 1,
    title: "Zumac Steel Computer Case",
    message: "And an option to upgrade every three years",
    image: brand1,
  },
  {
    id: 2,
    title: "Summer Sale with Sale up to 50% OFF for Foam Gaming Chair.",
    message: "Limited time offer. Hurry up",
    image: brand2,
  },
  {
    id: 3,
    title: "Summer Sale with Sale up to 50% OFF for Foam Gaming Chair.",
    message: "Limited time offer. Hurry up",
    image: brand3,
  },
  {
    id: 4,
    title: "iPed Pro Mini 6 - Powerful l in hand",
    message: "From $19.99/month for 36 months. $280.35 final payment due in month 37",
    image: brand4,
  },
];

const repeatedBrands = [...brands, ...brands, ...brands];

const BrandForYou = () => {
  return (
    <ItemsLayout
      categories={["Brans For You"]}
      className="mt-3"
      route="/brandsforyou"
    >
      <ProductSlider products={repeatedBrands} noOfCards={4} delayAutoPlayValue={7000} />
    </ItemsLayout>
  );
};

export default BrandForYou;
