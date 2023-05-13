import Card from "@/app/components/Card/Card";
import GradientText from "@/app/components/Typography/GradientText";
import useResponsive from "@/app/hooks/useResponsive";
import Carousel from "../Carousel/Carousel";
import { Post } from "./interfaces";

type TopPostsProps = {
  posts: Post[];
};

const TopPosts = ({ posts }: TopPostsProps) => {
  const { isMobile } = useResponsive();
  return (
    <div className="newesst my-[30px] min-h-[400px]" id="neswest">
      <div className="posts-title my-[50px]">
        <GradientText fontSize={30}>Newest Posts</GradientText>
      </div>
      <div className="two-posts w-full grid gap-1 mb-1 lg:grid-cols-2 grid-cols-1">
        {isMobile ? (
          <div className="carousel w-full">
            <Carousel slidesToShow={1} autoPlaySpeed={5000} centerMode>
              {posts.slice(0, 2).map((item, index) => (
                <Card key={`posts-${index}`} product={item} />
              ))}
            </Carousel>
          </div>
        ) : (
          <>
            {posts.slice(0, 2).map((item, index) => (
              <Card key={`posts-${index}`} product={item} />
            ))}
          </>
        )}
      </div>
      <div className="posts grid lg:grid-cols-3 grid-cols-1 gap-1">
        {posts.length > 4 &&
          posts
            .slice(2, 5)
            .map((item, index) => (
              <Card key={`posts-${index}`} product={item} />
            ))}
      </div>
    </div>
  );
};

export default TopPosts;
