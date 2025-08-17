// app/page.tsx

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a1f44] to-[#081a36] text-white flex flex-col items-center justify-center">
      {/* Navbar */}
      <header className="w-full flex justify-between items-center px-10 py-6 bg-[#0d254d]/60 backdrop-blur-lg shadow-md fixed top-0 z-50">
        <h1 className="text-3xl font-extrabold tracking-wide text-white">
          e<span className="text-blue-400">Z</span>Buy
        </h1>
        <nav className="flex space-x-8 text-lg font-medium">
          {["Home", "Products", "Cart", "Profile"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative group hover:text-blue-400 transition"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left mt-28 px-10">
        {/* Left Content */}
        <div className="max-w-xl space-y-6">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Unlock Shopping with <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text drop-shadow-lg">
              Microservices Power
            </span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            <span className="text-blue-300 font-semibold">eZBuy</span> is a
            next-gen e-commerce platform designed with{" "}
            <span className="text-blue-300">Microservices Architecture</span>, offering blazing fast performance, rock-solid security, and a seamless shopping experience.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl text-lg font-semibold hover:opacity-90 transition shadow-xl">
              Shop Now
            </button>
            <button className="px-6 py-3 border-2 border-blue-400 rounded-2xl text-lg font-semibold hover:bg-blue-400 hover:text-[#0a1f44] transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Content (Illustration) */}
        <div className="mt-12 md:mt-0 md:ml-16 relative">
          <div className="w-80 h-80 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-full shadow-[0_0_50px_15px_rgba(0,153,255,0.4)] flex items-center justify-center relative overflow-hidden">
            <span className="text-3xl font-extrabold text-[#0a1f44] tracking-wider">
              eZBuy
            </span>
            {/* Floating accents */}
            <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-blue-300 blur-lg opacity-70"></div>
            <div className="absolute bottom-10 right-8 w-6 h-6 rounded-full bg-cyan-300 blur-md opacity-70"></div>
            <div className="absolute top-16 right-12 w-12 h-12 rounded-full bg-blue-500/40 blur-xl"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid sm:grid-cols-3 gap-8 mt-24 px-10 max-w-6xl">
        {[
          {
            title: "Scalable",
            desc: "Built with microservices to handle millions of transactions seamlessly.",
          },
          {
            title: "Secure",
            desc: "End-to-end encryption and modern security practices for safe shopping.",
          },
          {
            title: "Future-Ready",
            desc: "Optimized with cutting-edge technologies for tomorrow’s commerce.",
          },
        ].map((feature) => (
          <div
            key={feature.title}
            className="bg-[#0d254d]/50 p-8 rounded-2xl shadow-lg hover:scale-105 transition transform border border-blue-500/20"
          >
            <h3 className="text-2xl font-bold text-cyan-300 mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-300">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="mt-20 py-6 w-full text-center text-gray-400 border-t border-gray-700">
        © {new Date().getFullYear()}{" "}
        <span className="text-blue-400 font-semibold">eZBuy</span>. All rights reserved.
      </footer>
    </main>
  );
}
