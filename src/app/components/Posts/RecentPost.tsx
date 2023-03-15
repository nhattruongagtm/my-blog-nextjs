import Clock from "@/app/assets/icons/Clock";
import Image from "next/image";
import { Post } from "./interfaces";

type RecentPostProps = {
  post: Post;
};

const RecentPost = ({ post: { } }: RecentPostProps) => {
  return (
    <div className="md:flex md:h-[200px] lg:mb-[30px] mb-[50px] gap-2 items-center">
      <div className="image rounded-lg overflow-hidden h-[200px] flex-grow w-full">
        <Image
          width={400}
          height={400}
          className="scale-150"
          alt=""
          src="https://plus.unsplash.com/premium_photo-1661943864527-d714736dfd16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        />
      </div>
      <div className="content flex-col md:max-w-[60%] md:mt-0 mt-[20px]">
        <div className="tag">Development</div>
        <div className="title">
          Helpful tips for working for home as a Freelancer
        </div>
        <div className="desc line-clamp-2 text-card-text-dark max-w-[90%]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
          exercitationem vel sunt voluptatibus corrupti a aut, minima iure,
          reprehenderit modi officia optio ut sint dolor, alias error nesciunt
          excepturi. Neque.
        </div>
        <div className="notes flex justify-between mt-[10px] text-[14px] pr-10 items-center">
          <div className="tags flex md:gap-2 gap-1">
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
