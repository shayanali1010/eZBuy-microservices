export default function CheckoutTop(){
    return(
         <div className="flex flex-col md:flex-row justify-between p gap-4 mb-8">
          <div className="flex-1 p-6 px-10 bg-[#E9E7E8] rounded-md  text-sm text-black">
            Returning customer? <span className="text-[#F1352B] cursor-pointer underline">Click here to login</span>
          </div>
          
          <div className="flex-1 bg-gray-200 rounded-md p-5 px-10 text-sm  text-black">
            Have a coupon? <span className="text-[#F1352B] cursor-pointer underline">Click here to enter your code</span>
          </div>
        </div>
            
        )
    }