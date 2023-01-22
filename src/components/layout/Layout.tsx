import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { RecoilRoot } from "recoil";
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
      </div>
    </RecoilRoot>
  );
};

export default Layout;
