import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Category } from "./interfaces";

type Props = {
  category: Category;
};

const CategoryItem = ({ category: { link, name, thumbnail } }: Props) => {
  return (
    <div className="h-40 cursor-pointer rounded-lg overflow-hidden relative bg-white">
      <Link href={link}>
        <Image
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          width={600}
          height={600}
          alt="category"
          src={thumbnail}
        />
        <div className="layer absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#f5f5f547] to-[#0605058f] z-10"></div>
        <div className="layer absolute bottom-0 left-0 w-full z-20 text-white p-0.5">
          <p className="text-[13px] truncate">{name}</p>
          <p className="text-vsm2">28 articles</p>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
