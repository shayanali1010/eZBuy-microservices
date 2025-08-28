// import TopCell from "@/components/products/TopCell"
// import Header from "@/components/layout/Header"
// import Footer from "@/components/layout/Footer"
// import Navbar from "@/components/layout/Navbar"
// import PopularCategories from "@/components/products/PopularCategories"

// export default function ProductsPage() {
//    return (
//     <div className="min-h-screen bg-[#e2e4eb]">
//       <Header />
//       <Navbar />
//       <main className="container mx-auto px-4 py-8">
//         <TopCell />
//         <div className="mt-4">
//           <PopularCategories />
//         </div>

//         </div>
//       </main>
//       <Footer />
//     </div>
//   )
// }

import TopCell from "@/components/products/TopCell";
import PopularCategories from "@/components/products/PopularCategories";
import ProductSidebar from "@/components/products/ProductSidebar";
import BestSellers from "@/components/products/BestSellers";
import ProductsGrid from "@/components/products/ProductsGrid";
import MainLayout from "@/layout/MainLayout";

export default function ProductListingPage() {
  return (
    <div className="min-h-screen bg-[#e2e4eb]">
      <MainLayout>
        <main className="container mx-auto px-4 py-8">
          <TopCell />
          <div className="mt-4">
            <PopularCategories />
          </div>

          <div className="flex mt-4 gap-6">
            {/* Sidebar */}
            <div className="flex-shrink-0">
              <ProductSidebar />
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Best Sellers Section */}
              <BestSellers />

              {/* Products Grid */}
              <ProductsGrid />
            </div>
          </div>
        </main>
      </MainLayout>
    </div>
  );
}
