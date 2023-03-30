import Clock from "@/app/assets/icons/Clock";
import Image from "next/image";
import Link from "next/link";
import { Post } from "../Posts/interfaces";
import { ICard } from "./interfaces";

type ProductProps = {
  product: Post;
};

const Card = ({ product: { frontmatter, slug } }: ProductProps) => {
  const { title, thumbnail, tags, createdDate, readingTime } =
    frontmatter as ICard;
  return (
    <div className="card overflow-hidden relative flex gap-3 sm:p-5 p-4 rounded-xl hover:border-gray-100 hover:shadow-lg bg-white dark:bg-card-dark dark:text-card-text-dark border dark:border-border-dark hover:cursor-pointer dark:hover:border-border-dark-h hover:transition-all flex-col justify-between w-full">
      <div className="relative card-media w-full h-[200px] overflow-hidden rounded-lg mb-0.5 flex items-center">
        <Image
          alt="c-media"
          src={thumbnail}
          width={200}
          height={200}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div className="layer absolute top-0 left-0 w-full h-full bg-black opacity-25"></div>
       
      </div>
      <div className="card-info h-1/4">
        <div className="card-read-time flex justify-between text-gray-500">
          {tags.length > 3
            ? tags.slice(0, 3).map((tag, index) => (
                <p className="text-vsm" key={`tags-posts-${index}`}>
                  # {tag}
                </p>
              ))
            : tags.map((tag, index) => (
                <p className="text-vsm" key={`tags-posts-${index}`}>
                  # {tag}
                </p>
              ))}
          <p className="text-vsm flex space-x-0.5 items-center">
            <Clock />
            <span>
              {readingTime} {+readingTime > 1 ? "mins" : "min"} read
            </span>
          </p>
        </div>
        <p className="cart-title mt-[15px] mb-0.5 text-[18px] h-1/2 dark:text-white line-clamp-2 font-semibold">
          {title}
        </p>
      </div>
      <div className="card-action flex justify-between">
        <div className="card-author flex space-x-0.5 items-start ">
          <div className="card-author-media w-2 h-2 overflow-hidden rounded-full">
            <Image
              width={400}
              height={200}
              alt="c-media"
              className="scale-[200%]"
              src="https://images.unsplash.com/photo-1677607240655-3bc840ede271?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            />
          </div>
          <div className="card-author-info">
            <p className="text-vsm">William Randolph</p>
            <p className="text-vsm2">{createdDate}</p>
          </div>
        </div>
        <Link href={`/blog/${slug}`}>
          <button className="border card-buy hover:shadow-lg text-vsm hover:bg-blue-light hover:text-white hover:transition-all py-[5px] px-1.5 rounded-full">
            See now
          </button>
        </Link>
      </div>
      {/* <div className="card -layer absolute top-0 left-0 w-1/5 h-[800px] bg-white opacity-5"></div> */}
    </div>
  );
};

export default Card;
