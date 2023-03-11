import Menu from "@/app/assets/icons/Menu";
import useResponsive from "@/app/hooks/useResponsive";
import { useTheme } from "next-themes";
import Link from "next/link";

import HeaderSearch from "./HeaderSearch";

type Menu = {
  path: string;
  label: string;
};

const Header = () => {
  const { theme, setTheme } = useTheme();
  const { isMobile } = useResponsive();

  const menus: Menu[] = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/blog",
      label: "Blog",
    },
    {
      path: "/shop",
      label: "Shop",
    },
    {
      path: "/contact",
      label: "Contact",
    },
  ];

  return (
    <div className="w-full h-14 flex items-center justify-between sm:p-12 px-5 py-8 sm:mb-0 mb-8">
      <div className="header-logo">logo</div>

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
        <button className="subscribe px-7 py-0.5 rounded-lg bg-gradient-to-r from-blue-light to-cyan text-white focus:right-1 focus:ring ring-offset-blue-100">
          Subscribe
        </button>
        {isMobile ? (
          <div className="">
            <Menu />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
