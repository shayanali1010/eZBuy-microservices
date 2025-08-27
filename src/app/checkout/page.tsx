 "use client";

import CheckoutForm from "@/components/checkout/CheckoutForm";
import CheckoutTop from "@/components/checkout/CheckoutTop";
import PlaceOrder from "@/components/checkout/PlaceOrder";



const Checkout = () => {
  return (
    <div className="min-h-screen  py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-2xl font-bold text-black uppercase mb-4">Checkout</h1>
        
       
        <CheckoutTop/>

        {/* Main Content: Two Columns */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column: Billing Details */}
          <CheckoutForm/>
        
       

          <div className="flex-1    ">
             
            <div className="flex   h-full items-end " >
              
           
            <PlaceOrder/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;