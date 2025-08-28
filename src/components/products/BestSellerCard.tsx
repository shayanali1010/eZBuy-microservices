import Image from "next/image";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  inStock: boolean;
  saveAmount?: number;
}

const BestSellerCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative mb-2">
        {product.saveAmount && (
          <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">SAVE ${product.saveAmount}</div>
        )}
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={120}
          height={120}
          className="w-24 h-24 object-contain"
        />
      </div>
      <h3 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">{product.name}</h3>
      <div className="flex flex-col space-y-1">
        <div className="flex items-center justify-center space-x-2">
          <span className="text-lg font-bold text-red-600">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
        <div className="text-xs text-gray-500">
          {product.inStock ? "In stock" : "Out of stock"}
        </div>
      </div>
    </div>
  );
};

export default BestSellerCard;