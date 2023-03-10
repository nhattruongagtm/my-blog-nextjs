import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Brand } from "./interfaces";

type Props = {
  brand: Brand;
};

const Brand = ({ brand: { link, name, thumbnail } }: Props) => {
  return (
    <div className="relative flex items-center p-1 rounded-lg border dark:border-border-dark hover:cursor-pointer dark:hover:border-border-dark-h dark:bg-card-dark shadow-md hover:last:visible">
      <Link href={link}>
        <div className="brand-image rounded-full overflow-hidden">
          <Image width={40} height={40} alt="brand" src={thumbnail} />
        </div>
      </Link>
      <div className="invisible absolute min-w-[200%] bg-white left-[50%] translate-x-[-50%] bottom-[-30px] h-[40px] text-black">
        {name}
      </div>
    </div>
  );
};

export default Brand;
