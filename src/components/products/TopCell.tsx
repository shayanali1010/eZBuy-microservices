"use client"

import MainSwapper from "../common/MainSwapper"
import ProductsBanner from "../products/ProductsBanner"

const TopCell = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 bg-white ">
      {/* Header */}
      <h1 className="text-xl font-bold text-black mb-1 text-left">TOP CELL PHONES & TABLETS</h1>

      {/* Main Content - Two Components Side by Side */}
      <div className="relative">
        {/* Left Side - MainSwapper */}
        <div
          className="overflow-hidden rounded-lg"
          style={{
            width: "770px", // reduced width from 864px to 764px
            height: "310px",
            position: "absolute",
            top: "20px",
            left: "0px",
          }}
        >
          <MainSwapper />
        </div>
        {/* Right Side - RedmiBanner */}
        <div
          className="overflow-hidden rounded-lg"
          style={{
            width: "420px",
            height: "310px",
            position: "absolute",
            top: "20px",
            left: "784px",
            right: "0px", // moved closer from 874px to 784px to reduce gap
          }}
        >
          <ProductsBanner />
        </div>
        <div style={{ height: "350px" }}></div>{" "}
        {/* Reduced height from 421.59px to 350px to eliminate excessive white space */}
      </div>
    </div>
  )
}

export default TopCell
