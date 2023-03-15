import Image from "next/image";
import { Post } from "../Posts/interfaces";

type RecentPostListItemProps = {
  post: Post;
};
const RecentPostListItem = ({
  post: { },
}: RecentPostListItemProps) => {
  return (
    <div className="py-4 gap-1 flex hover:cursor-pointer items-center">
      <div className="image overflow-hidden rounded-full flex gap-2 bg-border-dark-h min-w-[60px] h-[60px]">
        <Image
          src="https://images.unsplash.com/photo-1678510131580-af8620b477e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
          width={60}
          height={60}
        />
      </div>
      <div className="content border-b pb-[20px] dark:border-border-dark-h">
        <p className="text-[16px] hover:text-cyan mb-0.5 line-clamp-2">
          Creating is a privilege but its also a gift
        </p>
        <p className="text-vsm flex gap-1 text-gray-500">
          <span>15 mins read</span> . <span>15 April 2022</span>
        </p>
      </div>
    </div>
  );
};

export default RecentPostListItem;
