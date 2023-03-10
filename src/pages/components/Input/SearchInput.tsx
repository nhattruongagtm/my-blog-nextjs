import Search from "@/app/assets/icons/Search";
import React, { useState } from "react";

type Props = { isExpand: boolean };

const SearchInput = ({ isExpand }: Props) => {
  return (
    <label
      className={`relative block ${
        isExpand ? "animate-showSearchInput" : "animate-closeSearchInput"
      } transition-transform duration-500`}
    >
      <span className="sr-only">{/* <Search /> */}</span>
      <span className="absolute inset-y-0 left-0 flex items-center pl-1">
        <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
          <Search />
        </svg>
      </span>
      <input
        className="outline-none placeholder:italic placeholder:text-slate-400 block bg-transparent w-full border-none border-slate-300 pl-12 pr-3 shadow-sm sm:text-sm rounded-lg ring-1 ring-blue-light focus:border-cyan"
        placeholder="Search for anything..."
        type="text"
        name="search"
      />
    </label>
  );
};

export default SearchInput;
