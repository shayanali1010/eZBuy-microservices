import BestSellerCard from "./BestSellerCard";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  inStock: boolean;
  saveAmount?: number;
}

const bestSellers: Product[] = [
  {
    id: 1,
    name: "uLosk Mini (e) 2.0, Xenon I/O / 32GB / SSD 512GB / VGA 8GB",
    image: "/assets/bestsellerproduct/prod2.png",
    price: 172.29,
    originalPrice: 214.00,
    inStock: false,
    saveAmount: 53.00,
  },
  {
    id: 2,
    name: "Oppolo Watch Series 8 GPS + Cellular Stainless Steel Case with Milanese Loop",
    image: "/assets/bestsellerproduct/prod3.png",
    price: 979.00,
    originalPrice: 1259.00,
    inStock: true,
    saveAmount: 3.00,
  },
  {
    id: 3,
    name: "iSmart 24V Charger",
    image: "/assets/bestsellerproduct/prod4.png",
    price: 9.00,
    originalPrice: 12.00,
    inStock: true,
    saveAmount: 3.00,
  },
  {
    id: 4,
    name: "OPod Pro 12.9 Inch M1 2023, 64GB + WiFi, GPS",
    image: "/assets/bestsellerproduct/prod1.png",
    price: 569.00,
    originalPrice: 758.00,
    inStock: true,
    saveAmount: 19.00,
  },
];

function BestSellers() {
  return (
    <div className="bg-white p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">BEST SELLER IN THIS CATEGORY</h2>
      <div className="flex justify-between items-start gap-6">
        {bestSellers.map((product) => (
          <BestSellerCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default BestSellers;
