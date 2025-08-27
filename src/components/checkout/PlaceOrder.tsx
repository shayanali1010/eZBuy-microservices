import Image from "next/image"
export default function PlaceOrder(){
    return(
         <div className="flex-1 bg-gray-100 border border-gray-200 rounded-md p-5">
                    <h2 className="text-lg font-semibold text-black mb-4">Your Order</h2>  
                    
                
                    <div className="border-b  border-gray-300 mb-4">
                     <div className="flex justify-between text-sm font-medium text-gray-600 py-2 border-b border-gray-300">
                        <span>PRODUCT</span>
                        <span>SUB TOTAL</span>
                      </div>
                      <div className="py-2 px-3">
                        <div className="flex items-start mb-2">
                          <Image 
                            src="/assets/cartImages/mobile.jpg" 
                            alt="Pinnapple MacBook Pro 2022"
                            width={60}
                            height={48}
                            className=" mr-3 object-cover bg-white py-2     rounded" 
                          />
                          <div>
                            <span className="block text-sm font-medium text-black">Pinnapple MacBook Pro 2022</span>
                            <span className="block text-sm text-black">M1 / 512GB</span>
                            <span className="block text-sm text-gray-500">x 3</span>
                          </div>
                        </div>
                        <div className="flex justify-between text-sm text-black mt-2">
                          <span>Worldwide Standard Shipping Free</span>
                          <span className="text-[#F1352B]">+ $9.50</span>
                        </div>
                      </div>
                    </div>
        
                    {/* Order Total */}
                    <div className="flex justify-between text-sm font-semibold text-black py-2 border-b border-gray-300 mb-4">
                      <span>Order Total</span>
                      <span className="text-[#F1352B]">$1,746.50</span>
                    </div>
        
                    {/* Payment Options */}
                    <div className="space-y-4 mb-4">
                      {/* Direct Bank Transfer */}
                      <div className="bg-gray-100  rounded-md text-sm text-gray-700">
                        <div className="flex   items-center mb-1">
                          <input
                            type="checkbox" // Using radio for payment selection (exclusive); image shows checkbox but radios make sense for payments
                            id="bank-transfer"
                            defaultChecked // Checked as per image
                            className="    accent-[#F1352B]"
                          />
                          <label htmlFor="bank-transfer" className="font-medium ml-2 text-black">Direct Bank Transfer</label>
                        </div>
                        <p className="p-3">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                      </div>
        
                      {/* Cash on Delivery */}
                      <div className="flex items-center text-sm text-gray-700">
                        <input
                          type="checkbox"
                          id="cash-on-delivery"
                          className="mr-2 accent-[#F1352B]"
                        />
                        <label htmlFor="cash-on-delivery" className="font-medium text-black">Cash on Delivery</label>
                      </div>
        
                      {/* PayPal */}
                      <div className="flex items-center text-sm text-gray-700">
                        <input
                          type="checkbox"
                          id="paypal"
                          className="mr-2 accent-[#F1352B] rounded  "
                        />
                        <label htmlFor="paypal" className="font-medium text-black">PayPal</label>
                        <span className="ml-2 text-blue-600 cursor-pointer">What is PayPal?</span>
                        <Image
                          src="/assets/CheckoutImages/paypal.png"
                          alt="PayPal"
                          width={60}
                          height={20}
                          className="ml-auto h-5 w-auto"
                        />
                      </div>
                    </div>
        
                    {/* Place Order Button */}
                    <button type="submit" className="w-full bg-gray-900 text-white text-sm font-medium py-3 rounded-md uppercase">
                      Place Order
                    </button>
                  </div>
    )
}