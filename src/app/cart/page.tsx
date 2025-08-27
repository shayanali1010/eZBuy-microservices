
import { EmptyCart } from "@/components/cart/EmptyCart";
import OrderSummary from "@/components/cart/OrderSummary";

import CartComp from "@/components/cart/CartComp";


 
export default function Cart() {
  const cartProducts = [
  {
    id: 1,
    isNew: true,
    image: "/assets/cartImages/Carttab.webp",
    title: "aPod Pro Tablet 2023 LTE + WiFi, GPS Cellular 12.9 Inch, 512GB",
    price: 979.0,
    quantity: 1,
    shipping: 2.98,
    stock: "In stock",
  },
  {
    id: 2,
    isNew: false,
    image: "/assets/cartImages/Carttab.webp",
    title: "Wireless Earbuds Bluetooth 5.3 with Charging Case",
    price: 59.99,
    quantity: 2,
    shipping: 1.5,
    stock: "In stock",
  },
  {
    id: 3,
    isNew: true,
    image: "/assets/cartImages/Carttab.webp",
    title: "Gaming Mouse RGB Wired 16000 DPI",
    price: 39.99,
    quantity: 1,
    shipping: 1.99,
    stock: "In stock",
  },
  {
    id: 4,
    isNew: false,
    image: "/assets/cartImages/Carttab.webp",
    title: "Mechanical Keyboard with Blue Switches",
    price: 89.99,
    quantity: 1,
    shipping: 2.5,
    stock: "In stock",
  },
  {
    id: 5,
    isNew: true,
    image: "/assets/cartImages/Carttab.webp",
    title: "Smartwatch with Heart Rate Monitor",
    price: 129.99,
    quantity: 1,
    shipping: 2.99,
    stock: "In stock",
  },
]
const isEmpty = cartProducts.length === 0;


  return (
  
 
    
    <div className="flex w-full md:flex-row flex-col   ">
    
      <div style={{
    scrollbarWidth: "none", 
    msOverflowStyle: "none" 
  }} className="md:w-2/3 w-full md:px-14 px-1 space-y-3 pt-20 overflow-x-scroll h-screen ">
    {isEmpty ? (
      <EmptyCart/>
    ):(
      cartProducts.map((product) => (
        <CartComp key={product.id} cartData={product} />
      ))
    )}
    
        </div>
        <div className="md:w-1/3   flex py-2 px-1 md:px-3 w-full h-screen   items-end">
        <OrderSummary />
        </div>
    </div>
    
    
  );
}
