import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { RecoilRoot } from "recoil";
import MobileMenu from "./MobileMenu";
interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <RecoilRoot>
      <div className="relative flex flex-col">
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileMenu />
      </div>
    </RecoilRoot>
  );
};

export default Layout;
