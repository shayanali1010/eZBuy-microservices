import MainSwapper from "@/components/common/MainSwapper";
import Categories from "@/components/home/Categories";
import SponsorSection from "@/components/home/SponsorSection";
import SponsorSecTwo from "@/components/home/SponsorSecTwo";
import MainLayout from "@/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="grid grid-cols-12 gap-1 md:gap-3 bg-[#e2e4eb]">
        {/* Categories (hidden on small, visible on md+) */}
        <div className="col-span-3 hidden md:block">
          <Categories />
        </div>

        {/* MainSwapper → full width on small, col-span-6 on md+ */}
        <div className="col-span-12 md:col-span-6 order-1 md:order-none">
          <MainSwapper wrapperClass="lg:max-h-[340px] md:max-h-[294px]"/>
          <SponsorSecTwo/>
        </div>

        {/* SponsorSection → full width on small, col-span-3 on md+ */}
        <div className="col-span-12 md:col-span-3 order-2 md:order-none">
          <SponsorSection />
        </div>
      </div>
    </MainLayout>
  );
}
