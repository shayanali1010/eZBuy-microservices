import React from 'react'
import ItemsLayout from '../common/ItemsLayout'
import item1 from "../../../public/assets/homeImg/item1.png";
import item2 from "../../../public/assets/homeImg/item2.png";
import item3 from "../../../public/assets/homeImg/item3.png";
import item4 from "../../../public/assets/homeImg/item4.png";
import item5 from "../../../public/assets/homeImg/item5.png";
import ProductSlider from '../common/ProductSlider';

const products = [
  {
    id: 1,
    quantity: "123",
    title:
      "Opplo Watch Series 8 GPS + Cellular Stainless Steel Case with Milanese Loop",
    price: "$120",
    realPrice: "$134.5",
    image: item1,
  },
  {
    id: 2,
    quantity: "0",
    title: "uLosk Mini case 2.0, Xenon i10 / 32GB / SSD 512GB / VGA 8GB",
    price: "$90",
    image: item2,
  },
  {
    id: 3,
    quantity: "123",
    title: "BOSO 2 Wireless On Ear Headphone",
    price: "$50",
    realPrice: "$143.88",
    image: item3,
  },
  {
    id: 4,
    quantity: "123",
    title: "OPod Pro 12.9 Inch M1 2023 64GB + Wifi, GPS",
    price: "$140",
    image: item4,
  },
  {
    id: 5,
    quantity: "9",
    title: "iSmart 24V Charger",
    price: "$140",
    image: item5,
  },
  {
    id: 6,
    quantity: "9",
    title: "iSmart 24V Charger",
    price: "$140",
    image: item5,
  },
];

const BestSeller = () => {
  return (
    <ItemsLayout categories={["Best Seller", "New In", "Popular"]} route='/bestseller' className='mt-3'>
      <ProductSlider products={products} className={"p-8"}/>
    </ItemsLayout>
  )
}

export default BestSeller
