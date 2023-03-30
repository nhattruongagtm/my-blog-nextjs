import Clock from "@/app/assets/icons/Clock";
import Image from "next/image";
import { Post } from "./interfaces";

type RecentPostProps = {
  post: Post;
};

const RecentPost = ({ post: { } }: RecentPostProps) => {
  return (
    <div className="md:flex md:h-[200px] lg:mb-[30px] mb-[50px] gap-2 items-center cursor-pointer">
      <div className="image rounded-lg overflow-hidden h-[200px] flex-grow w-full bg-card-text-dark">
        <Image
          width={400}
          height={400}
          // className="scale-[200%]"
          alt=""
          className="object-cover w-full h-full"
          src="https://plus.unsplash.com/premium_photo-1661943864527-d714736dfd16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        />
      </div>
      <div className="content flex flex-col md:max-w-[60%] md:mt-0 mt-[20px] gap-[5px]">
        <div className="tag">Development</div>
        <div className="text-[18px] font-semibold">
          Helpful tips for working for home as a Freelancer
        </div>
        <div className="desc line-clamp-2 dark:text-gray-400 max-w-[90%] text-[14px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
          exercitationem vel sunt voluptatibus corrupti a aut, minima iure,
          reprehenderit modi officia optio ut sint dolor, alias error nesciunt
          excepturi. Neque.
        </div>
        <div className="notes flex justify-between mt-[10px] text-[14px] pr-10 items-center">
          <div className="tags flex md:gap-2 gap-1 text-gray-500">
            <p>#Travel </p>
            <p>#Minimal</p>
          </div>
          <p className="text-sm space-x-0.5 items-center card-read-time flex justify-between text-gray-500">
            <Clock />
            <span>3 mins read</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecentPost;
