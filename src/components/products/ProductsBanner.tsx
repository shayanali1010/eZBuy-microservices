import Image from "next/image"

const ProductsBanner = () => {
  return (
    <div
      className="bg-purple-200 relative overflow-hidden w-full h-full"
      style={{
        borderRadius: "10px",
        padding: "32px",
        maxWidth: "428px",
        maxHeight: "310px",
      }}
    >
      <div className="absolute inset-0 flex justify-center items-end">
        <Image src="/assets/productbanner/banner1.png" alt="Redmi Note 12 pro 5g" width={1280} height={720} /> 
      </div>

      <div className="absolute inset-0 flex justify-between items-start z-20" style={{ padding: "32px" }}>
        <div>
          <h2
            className="text-black mb-2"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "24px",
              lineHeight: "28.8px",
              letterSpacing: "0%",
              display: "flex",
              alignItems: "center",
            }}
          >
            redmi note 12
            <br />
            Pro+ 5g
          </h2>
          <p className="text-gray-600 text-lg">Rise to the challenge</p>
        </div>

        {/* Shop Now Button */}
        <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
          SHOP NOW
        </button>
      </div>
    </div>
  )
}

export default ProductsBanner
