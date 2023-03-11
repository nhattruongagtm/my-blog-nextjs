import Mail from "@/app/assets/icons/Mail";
import RightArrow from "@/app/assets/icons/RightArrow";
import Search from "@/app/assets/icons/Search";
import Twitter from "@/app/assets/icons/Twitter";
import User from "@/app/assets/icons/User";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="lg:p-14 p-5 rounded-3xl dark:border-border-dark lg:w-3/4 text-text-dark dark:bg-card-dark border m-auto">
      <div className="footer-main lg:flex gap-10 mb-[70px]">
        <div className="text-text-dark sm:mb-0 mb-10">
          <p className="text-lg mb-1 dark:text-white h-[40px] font-bold">
            MyShop
          </p>
          <p className="text-14px max-w-xl mb-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quia
            earum quas aliquid. Voluptatibus, explicabo saepe cum iure alias
            architecto natus, eligendi quod asperiores vitae molestias. Non
            voluptatum voluptate alias!
          </p>
          <div className="text-14px">
            <p className="font-bold dark:text-white">Address</p>
            <p>123 Main Street</p>
            <p>New York, NY 10001</p>
          </div>
        </div>
        <div className="w-1/4 sm:mb-0 mb-10">
          <p className="text-md sm:mb-1 mb-0.5 dark:text-white h-[40px] font-bold">
            Categories
          </p>
          <div className="grid grid-cols-2 sm:gap-1 gap-x-[100px] gap-y-1">
            <a href="" className="text-14px ">
              Action
            </a>
            <a href="" className="text-14px">
              Action
            </a>
            <a href="" className="text-14px">
              Action
            </a>
            <a href="" className="text-14px">
              Action
            </a>
            <a href="" className="text-14px">
              Action
            </a>
            <a href="" className="text-14px">
              Action
            </a>
            <a href="" className="text-14px">
              Action
            </a>
            <a href="" className="text-14px">
              Action
            </a>
            <a href="" className="text-14px">
              Action
            </a>
            <a href="" className="text-14px">
              Action
            </a>
            <a href="" className="text-14px">
              Action
            </a>
            <a href="" className="text-14px">
              Action
            </a>
          </div>
        </div>
        <div className="form max-w-sm">
          <p className="dark:text-white sm:mb-1 mb-0.5 h-[40px] font-bold">
            Newsletter
          </p>
          <p className="mb-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            laborum, soluta unde iusto quia corrupti.
          </p>
          <div className="input mb-1 flex items-center gap-0.5 border-b border-text-dark">
            <User />
            <input
              type="text"
              placeholder="Your name"
              className="border-none bg-transparent focus:ring-0 border-b-2 dark:text-white text-14px"
            />
          </div>
          <div className="input mb-1.5 flex items-center gap-0.5 border-b border-text-dark">
            <Mail />
            <input
              type="text"
              placeholder="Email address"
              className="border-none bg-transparent focus:ring-0 border-b-2 dark:text-white text-14px"
            />
          </div>
          <button
            type="submit"
            className="flex gap-0.5 py-0.5 px-1 text-white rounded-lg bg-gradient-to-r from-blue-light to-cyan hover:shadow-lg focus:right-1 focus:ring ring-offset-blue-100"
          >
            Subscribe <RightArrow />
          </button>
        </div>
      </div>
      <div className="footer-media flex justify-between items-center text-14px">
        <p className="">@Copyright by Truong Nhat Huynh</p>
        <div className="ft-media flex gap-1">
          <div className="media-item flex items-center cursor-pointer gap-[5px]">
            <Twitter /> Twitter
          </div>
          <div className="media-item flex items-center cursor-pointer gap-[5px]">
            <Twitter /> Twitter
          </div>
          <div className="media-item flex items-center cursor-pointer gap-[5px]">
            <Twitter /> Twitter
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
