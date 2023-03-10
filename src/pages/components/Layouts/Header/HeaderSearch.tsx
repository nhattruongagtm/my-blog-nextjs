import Search from "@/app/assets/icons/Search";
import React, { useState } from "react";
import SearchInput from "../../Input/SearchInput";

type Props = {};

const HeaderSearch = (props: Props) => {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <div className="flex">
      <div
        onClick={() => setIsExpand(!isExpand)}
        className={`translate-x-[230px] translate-y-[20%] ${
          isExpand ? "animate-visible" : ""
        }`}
      >
        <Search />
      </div>
      <SearchInput isExpand={isExpand} />
    </div>
  );
};

export default HeaderSearch;
