import { dummyProductList } from "@/pages/api/dummyProductList";
import Card from "@/app/components/Card/Card";
import { ICard } from "@/app/components/Card/interfaces";
import GradientText from "@/app/components/Typography/GradientText";


const NewestPosts = () => {
  const posts: ICard[] = dummyProductList.slice(0, 6);
  return (
    <div className="newest my-[30px] min-h-[400px]">
      <div className="posts-title my-[50px]">
        <GradientText fontSize={30}>Newest Posts</GradientText>
      </div>
      <div className="two-posts w-full flex justify-center gap-1 mb-1">
        {posts.slice(0, 2).map((item, index) => (
          <Card key={`posts-${index}`} product={item} />
        ))}
      </div>
      <div className="posts grid grid-cols-3 gap-1">
        {posts.slice(2).map((item, index) => (
          <Card key={`posts-${index}`} product={item} />
        ))}
      </div>
    </div>
  );
};

export default NewestPosts;
