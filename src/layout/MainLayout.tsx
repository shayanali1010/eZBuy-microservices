import Filter from "@/components/common/Filter";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import SponsorFooter from "@/components/layout/SponsorFooter";
import React, { ReactNode } from "react";


type MainLayoutProps = {
  children: ReactNode;
  className?: string; // optional: if any page wants extra class
};

const MainLayout = ({ children, className }:MainLayoutProps) => {
  return (
    <div className={`flex min-h-screen flex-col bg-white ${className ?? ""}`}>
      {/* Top / Header */}
      <Header />
      <Navbar />
      <Filter />

      {/* Page content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <Footer />
      <SponsorFooter />
    </div>
  );
};

export default MainLayout;
