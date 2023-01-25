import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { RecoilRoot } from "recoil";
import MobileMenu from "./MobileMenu";
import FullGallery from "./FullGallery";
interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <RecoilRoot>
      <div className="relative flex flex-col">
        <Header />
        <main>
          {children}
          <FullGallery />
        </main>
        <Footer />
        <MobileMenu />
      </div>
    </RecoilRoot>
  );
};

export default Layout;
