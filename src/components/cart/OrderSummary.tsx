import PrimaryBtn from "../common/PrimaryBtn";

const OrderSummary = () => {
  return (
    <div className="border border-[#232F3E] rounded-md p-4 w-full bg-white  mx-auto">
      <h2 className="text-base font-semibold text-black mb-4">Order Summary</h2>
      
      <div className="flex justify-between items-center border-b border-gray-200 py-3">
        <span className="text-sm text-gray-600">Sub Total:</span>
        <span className="text-sm font-medium text-black">$1,000.00</span>
      </div>
      
      <div className="flex justify-between items-center border-b border-gray-200 py-3">
        <span className="text-sm text-gray-600">Shipping estimate:</span>
        <span className="text-sm font-medium text-black">$600.00</span>
      </div>
      
      <div className="flex justify-between items-center border-b border-gray-200 py-3">
        <span className="text-sm text-gray-600">Tax estimate:</span>
        <span className="text-sm font-medium text-black">$137.00</span>
      </div>
      
      <div className="flex justify-between items-center py-3 font-bold text-black text-sm">
        <span>ORDER TOTAL:</span>
        <span>$1,737.00</span>
      </div>
      <div className=" flex items-center justify-center">
          <PrimaryBtn  text = "Checkout" />
      </div>
      
    
    </div>
  );
};

export default OrderSummary;