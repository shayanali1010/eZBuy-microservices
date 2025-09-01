"use client"

import type React from "react"
import { useState, useEffect } from "react"

const AboutUs: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="px-4 py-6 md:px-8 lg:px-12 border-b border-gray-800">
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <span className="hover:text-white transition-colors cursor-pointer">Home</span>
          <span>/</span>
          <span className="hover:text-white transition-colors cursor-pointer">pages</span>
          <span>/</span>
          <span className="text-white font-medium">about</span>
        </div>
      </nav>

      <section className="relative px-4 py-24 md:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
        </div>
        <div
          className={`relative max-w-6xl mx-auto text-center transition-all duration-1500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <div className="mb-8">
            <div className="inline-block border border-white/20 rounded-full px-6 py-2 mb-6">
              <span className="text-xs font-medium text-white/80 uppercase tracking-[0.2em]">Premium Shopping</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-[0.9] tracking-tight">
            eZ<span className="font-thin italic">Buy</span>
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl font-thin">Redefining Commerce</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
            Where luxury meets convenience. We curate exceptional products and deliver extraordinary shopping
            experiences that transcend the ordinary.
          </p>
          <div className="flex items-center justify-center space-x-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
            <span className="text-sm font-light text-white/60 uppercase tracking-[0.3em]">Since 2020</span>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
          </div>
        </div>
      </section>

      <section className="px-4 py-32 md:px-8 lg:px-12 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div
              className={`transition-all duration-1500 delay-300 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
            >
              <div className="mb-8">
                <div className="w-12 h-px bg-white mb-6"></div>
                <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight">
                  Crafting Shopping
                  <br />
                  <span className="italic font-thin">Experiences</span>
                </h2>
              </div>
              <div className="space-y-8 text-gray-300 leading-relaxed text-lg font-light">
                <p>
                  Born from a vision to revolutionize online shopping, eZBuy emerged as the premier destination for
                  discerning customers who demand excellence. We believe shopping should be effortless, elegant, and
                  extraordinary.
                </p>
                <p>
                  Every product in our curated collection tells a story of quality, innovation, and style. We do not just
                  sell products – we deliver dreams, aspirations, and lifestyle transformations.
                </p>
              </div>
            </div>
            <div
              className={`transition-all duration-1500 delay-600 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl transform rotate-2"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center group">
                      <div className="text-4xl font-light text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                        10K+
                      </div>
                      <div className="text-sm text-gray-400 uppercase tracking-wider">Premium Products</div>
                    </div>
                    <div className="text-center group">
                      <div className="text-4xl font-light text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                        50K+
                      </div>
                      <div className="text-sm text-gray-400 uppercase tracking-wider">Happy Customers</div>
                    </div>
                    <div className="text-center group">
                      <div className="text-4xl font-light text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                        99%
                      </div>
                      <div className="text-sm text-gray-400 uppercase tracking-wider">Satisfaction Rate</div>
                    </div>
                    <div className="text-center group">
                      <div className="text-4xl font-light text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                        24/7
                      </div>
                      <div className="text-sm text-gray-400 uppercase tracking-wider">Premium Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-32 md:px-8 lg:px-12 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="mb-6">
              <div className="w-12 h-px bg-white mx-auto mb-6"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
              Our Shopping
              <br />
              <span className="italic font-thin">Philosophy</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div
              className={`group transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: "800ms" }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10 hover:border-white/20 transition-all duration-500 group-hover:-translate-y-2 h-full">
                <div className="text-center">
                  <div className="text-5xl mb-8 group-hover:scale-110 transition-transform duration-500 text-white font-light">
                    ◆
                  </div>
                  <h3 className="text-2xl font-light text-white mb-6 uppercase tracking-wider">Quality</h3>
                  <p className="text-gray-300 leading-relaxed font-light">
                    Every product is meticulously selected and tested to meet our uncompromising standards of
                    excellence.
                  </p>
                </div>
                <div className="mt-8 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>

            <div
              className={`group transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: "1000ms" }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10 hover:border-white/20 transition-all duration-500 group-hover:-translate-y-2 h-full">
                <div className="text-center">
                  <div className="text-5xl mb-8 group-hover:scale-110 transition-transform duration-500 text-white font-light">
                    ◇
                  </div>
                  <h3 className="text-2xl font-light text-white mb-6 uppercase tracking-wider">Convenience</h3>
                  <p className="text-gray-300 leading-relaxed font-light">
                    Seamless shopping experience with lightning-fast delivery and effortless returns.
                  </p>
                </div>
                <div className="mt-8 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>

            <div
              className={`group transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: "1200ms" }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10 hover:border-white/20 transition-all duration-500 group-hover:-translate-y-2 h-full">
                <div className="text-center">
                  <div className="text-5xl mb-8 group-hover:scale-110 transition-transform duration-500 text-white font-light">
                    ◈
                  </div>
                  <h3 className="text-2xl font-light text-white mb-6 uppercase tracking-wider">Trust</h3>
                  <p className="text-gray-300 leading-relaxed font-light">
                    Your satisfaction is our commitment. Secure payments, authentic products, guaranteed.
                  </p>
                </div>
                <div className="mt-8 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-32 md:px-8 lg:px-12 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-black"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1500 delay-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <div className="mb-8">
              <div className="w-12 h-px bg-white mx-auto mb-8"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight">
              Ready to Experience
              <br />
              <span className="italic font-thin">Luxury Shopping</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Discover our curated collection of premium products and join thousands of satisfied customers who trust
              eZBuy for their lifestyle needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-white text-black px-12 py-4 rounded-full font-light transition-all duration-500 hover:bg-gray-100 hover:-translate-y-1 flex items-center space-x-3 uppercase tracking-wider text-sm">
                <span>Start Shopping</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-gray-500 text-sm font-light uppercase tracking-[0.2em]">Premium • Curated • Trusted</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
