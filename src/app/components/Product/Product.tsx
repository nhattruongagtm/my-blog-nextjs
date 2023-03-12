import Clock from "@/app/assets/icons/Clock";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Product } from "./interfaces";

type ProductProps = {
  product: Product;
};

const Product = ({ product: { link, name, thumbnail } }: ProductProps) => {
  return (
    <div className="sm:p-5 p-4 rounded-xl hover:border-gray-100 hover:shadow-lg bg-white dark:bg-card-dark sm:h-72 h-fit dark:text-card-text-dark border dark:border-border-dark hover:cursor-pointer dark:hover:border-border-dark-h hover:transition-all hover:-mt-0.5">
      <div className="card-media w-full md:h-2/3 h-1/2 overflow-hidden rounded-lg mb-0.5 flex items-center">
        <Image
          width={450}
          height={200}
          alt="c-media"
          className="scale-150"
          src={thumbnail}
        />
      </div>
      <div className="card-info">
        {/* <div className="card-read-time flex justify-between text-gray-500">
            <p className="text-vsm"># Travel</p>
            <p className="text-vsm flex space-x-0.5 items-center">
            <Clock />
            <span>3 mins read</span>
            </p>
          </div> */}
        <p className="cart-title mt-[15px] mb-0.5 text-vsm dark:text-white line-clamp-2">
          {name}
        </p>
      </div>
      <div className="card-action flex justify-center">
        {/* <div className="card-author flex space-x-0.5 items-start">
          <div className="card-author-media w-2 h-2 overflow-hidden rounded-full">
          <Image
          width={400}
          height={200}
          alt="c-media"
          src="https://images.unsplash.com/photo-1677607240655-3bc840ede271?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          />
          </div>
          <div className="card-author-info">
          <p className="text-vsm">William Randolph</p>
          <p className="text-vsm2">25 April 2022</p>
          </div>
        </div> */}
        <Link href={link} className="">
          <button className="border card-buy hover:shadow-lg text-vsm hover:bg-blue-light hover:text-white hover:transition-all py-[5px] px-1.5 rounded-full">
            Mua ngay
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
