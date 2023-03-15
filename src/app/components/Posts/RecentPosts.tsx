import GradientText from "@/app/components/Typography/GradientText";
import RecentPostListItem from "../List/RecentPostListItem";
import { Post } from "./interfaces";
import RecentPost from "./RecentPost";

const RecentPosts = ({ posts }: { posts: Post[] }) => {
  return (
    <div className={`mb-[40px] mt-[60px] lg:flex w-full gap-2`}>
      <div className="recent-posts lg:w-2/3">
        <div className="mb-10">
          <div className="">
            <GradientText fontSize={30}>Recent Posts</GradientText>
          </div>
          <p className="mt-[-20px]">Don&apos;t miss the latest trends</p>
        </div>
        <div className="posts">
          {posts.slice(0, 5).map((item, index) => (
            <RecentPost post={item} key={`recent-posts-${index}`} />
          ))}
        </div>
      </div>
      <div className="popular flex-grow">
        <div className="post-list shadow-lg rounded-2xl border dark:border-border-dark p-5 dark:bg-card-dark">
          <GradientText className="my-0 text-[22px] mb-3">
            Popular Posts
          </GradientText>
          {posts.slice(0, 4).map((item, index) => (
            <RecentPostListItem post={item} key={`popular-posts-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
