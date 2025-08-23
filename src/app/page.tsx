import MainSwapper from "@/components/common/MainSwapper";
import BestSeller from "@/components/home/BestSeller";
import BrandForYou from "@/components/home/BrandForYou";
import Categories from "@/components/home/Categories";
import FeaturedBrands from "@/components/home/FeaturedBrands";
import SponsorSection from "@/components/home/SponsorSection";
import SponsorSecTwo from "@/components/home/SponsorSecTwo";
import TopCategories from "@/components/home/TopCategories";
import MainLayout from "@/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="bg-[#e2e4eb]">
        <div className="grid grid-cols-12 gap-1 md:gap-3">
          {/* Categories (hidden on small, visible on md+) */}
          <div className="col-span-3 hidden md:block">
            <Categories />
          </div>

          {/* MainSwapper → full width on small, col-span-6 on md+ */}
          <div className="col-span-12 md:col-span-6 order-1 md:order-none">
            <MainSwapper wrapperClass="lg:max-h-[340px] md:max-h-[294px]" />
            <SponsorSecTwo />
          </div>

          {/* SponsorSection → full width on small, col-span-3 on md+ */}
          <div className="col-span-12 md:col-span-3 order-2 md:order-none">
            <SponsorSection />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 md:col-span-6">
            <FeaturedBrands />
          </div>
          <div className="col-span-12 md:col-span-6">
            <TopCategories />
          </div>
        </div>
        <BestSeller />
        <BrandForYou/>
      </div>
    </MainLayout>
  );
}
