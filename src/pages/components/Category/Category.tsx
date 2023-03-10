import useResponsive from "@/app/hooks/useResponsive";
import { dummnyCategories } from "@/pages/api/dummyCategoryList";
import Carousel from "../Carousel/Carousel";
import CategoryItem from "./CategoryItem";

const Category = () => {
  const { isMobile } = useResponsive();
  return (
    <div className="flex-col lg:w-2/3 w-full m-auto h-full">
      <div className="category lg:flex items-center p-4 border dark:border-border-dark rounded-lg dark:bg-card-dark justify-between shadow-md">
        <div className="category-info w-48 h-full">
          <p className="text-lg mb-1">Hot topics</p>
          <p className="text-vsm mb-1">
            Don&rsquo;t miss out on the latest news about Travel tips, Hotel
            reviews and Food guide...
          </p>
        </div>
        <Carousel slidesToShow={isMobile ? 3 : 6}>
          {dummnyCategories.map((item, index) => (
            <CategoryItem key={`category-${index}`} category={item} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Category;
