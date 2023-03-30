import ArrowUp from "@/app/assets/icons/ArrowUp";
import React, { useEffect } from "react";

type Props = {
  children: JSX.Element;
};

const MoveTop = ({ children }: Props) => {
  const handleMoveToTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const position = window.scrollY;
      const moveTop = document.querySelector("#move-top");

      if (position > 200) {
        moveTop?.classList.add("display");
        moveTop?.classList.add("visible");
      } else {
        moveTop?.classList.remove("display");
      }
    });
  }, []);

  return (
    <div className="relative">
      {children}
      <div
        id="move-top"
        className="opacity-0 invisible move-top fixed bottom-10 right-10 cursor-pointer bg-blue-light p-3 rounded-full btn-gradient hover:bottom-12 transition-all"
        onClick={handleMoveToTop}
      >
        <ArrowUp />
      </div>
    </div>
  );
};

export default MoveTop;
