import { FaShoppingCart } from "react-icons/fa";

export const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6">
      <FaShoppingCart className="text-gray-400 text-6xl mb-4" />
      <h2 className="text-2xl font-bold text-gray-800">Your Cart is Empty</h2>
      <p className="mt-2 text-gray-500 max-w-xs">
        Looks like you haven’t added anything yet. Let’s change that!
      </p>
    
    </div>
  );
};
