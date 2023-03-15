import Close from "@/app/assets/icons/Close";
import Menu from "@/app/assets/icons/Menu";
import useResponsive from "@/app/hooks/useResponsive";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";
import SubscribeButton from "@/app/components/Button/SubscribeButton";
import Lottie from "@/app/components/Lottie/Lottie";
import LottieData from "@/app/assets/icons/kun.json";
import HeaderSearch from "./HeaderSearch";

type Menu = {
  path: string;
  label: string;
};

const Header = () => {
  const { theme, setTheme } = useTheme();
  const { isMobile } = useResponsive();
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  const menus: Menu[] = [
    // {
    //   path: "/",
    //   label: "Home",
    // },
    {
      path: "/blog",
      label: "Blog",
    },
    {
      path: "/shop",
      label: "Shop",
    },
    // {
    //   path: "/contact",
    //   label: "Contact",
    // },
  ];

  return (
    <div className="w-full h-14 flex items-center justify-between sm:p-12 px-5 py-8 sm:mb-0 mb-8">
      <div className="header-logo">
        <Lottie src={LottieData} />
      </div>
      {!isMobile ? (
        <div className="header-menu flex justify-end w-2/5 space-x-2">
          {menus.map(({ path, label }) => (
            <Link href={path} key={path}>
              <button className="hover:text-blue-light hover:transition-all">
                {label}
              </button>
            </Link>
          ))}
        </div>
      ) : null}
      <div className="header-action flex items-center space-x-1.5">
        {!isMobile ? (
          <>
            <HeaderSearch />
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value={theme}
                className="sr-only peer"
                onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </>
        ) : null}
        <button className="subscribe lg:px-7 px-1 py-0.5 rounded-lg bg-gradient-to-r from-blue-light to-cyan text-white focus:right-1 focus:ring ring-offset-blue-100">
          Subscribe
        </button>
        {isMobile ? (
          <div className="h-full">
            <button onClick={() => setIsOpenMobileMenu(true)}>
              <Menu />
            </button>
            {isOpenMobileMenu ? (
              <div className="flex flex-col justify-between inset-0 p-5 header-layer w-full h-full dark:bg-bg-dark  bg-white fixed top-0 left-0 z-50">
                <div className="">
                  <div className="header flex justify-between items-center mb-[30px]">
                    <div className="logo">
                      <Lottie src={LottieData} />
                    </div>
                    <button
                      className="logo"
                      onClick={() => setIsOpenMobileMenu(false)}
                    >
                      <Close />
                    </button>
                  </div>
                  <div className="menus-mobile flex flex-col">
                    {menus.map(({ label, path }) => (
                      <Link
                        href={path}
                        key={path}
                        onClick={() => setIsOpenMobileMenu(false)}
                      >
                        <div className="menu-mobile border-b py-1">{label}</div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-[30px]">
                    <SubscribeButton />
                  </div>
                </div>
                <div className="switch justify-self-center place-items-end">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value={theme}
                      className="sr-only peer"
                      onChange={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                      }
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
