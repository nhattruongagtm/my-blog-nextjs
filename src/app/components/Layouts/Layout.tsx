import React, { ReactNode } from "react";
import GoogleAd from "../Ads/GoogleAd";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="dark:bg-bg-dark pb-2 p-5 lg:p-0 lg:pb-2">
      <Header />
      <div className="min-h-[600px]">{children}</div>
      <div className="ads mb-[80px] rounded-lg">
        <GoogleAd
          googleAdId="ca-pub-5749665502208213"
          slot="2268403632"
          timeout={0}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
