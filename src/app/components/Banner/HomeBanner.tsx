import Carousel from "@/app/components/Carousel/Carousel";
import CategoryItem from "@/app/components/Category/CategoryItem";
import useResponsive from "@/app/hooks/useResponsive";
import { dummnyCategories } from "@/pages/api/dummyCategoryList";
import Image from "next/image";

const HomeBanner = () => {
  const { isMobile } = useResponsive();
  return (
    <div className="banner-main">
      <div className="w-full h-[400px flex justify-between items-center py-[40px]">
        <div className="introduction flex-col justify-center items-center h-fit">
          <p className="">Hello erveryone!</p>
          <p className="text-[30px] my-1">I&apos;m Truong</p>
          <p className="max-w-[400px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
            laboriosam quis perferendis labore molestias debitis delectus
            doloremque neque rem ipsa sint autem tempore beatae ab, sapiente sed
            laudantium! Assumenda, nemo.
          </p>
          <form className="subscribe p-0.5 rounded-lg flex my-2 gap-1 items-center dark:bg-border-dark-h w-fit bg-gray-200">
            <input
              type="text"
              className=" outline-none dark:text-white text-black bg-transparent border-none focus:ring-none ring-0 focus:ring-0"
            />
            <button type="submit" className="btn-gradient">
              Subscribe
            </button>
          </form>
        </div>
        <div className="image overflow-hidden max-w-[50%] flex items-center rounded-full">
          <Image
            width={500}
            height={500}
            alt=""
            className="object-cover"
            src="https://media.istockphoto.com/id/1356420393/vi/anh/ng%C6%B0%E1%BB%9Di-ph%E1%BB%A5-n%E1%BB%AF-t%C6%B0%C6%A1ng-lai-3d-v%E1%BB%9Bi-k%C3%ADnh-vr-si%C3%AAu-l%E1%BB%9Bn.jpg?s=1024x1024&w=is&k=20&c=3n-9yvdGEF-wS0dc4yK60RPMuA_HgPvrSk0IZS7NdBk="
          />
        </div>
      </div>
      <div className="flex-col w-full m-auto h-full">
        <div className="category lg:flex items-center p-4 border dark:border-border-dark rounded-lg dark:bg-card-dark justify-between shadow-md">
          <div className="category-info w-48 h-full">
            <p className="text-lg mb-1">Hot topics</p>
            <p className="text-vsm mb-1">
              Don&rsquo;t miss out on the latest news about Travel tips, Hotel
              reviews and Food guide...
            </p>
          </div>
          <Carousel arrows slidesToShow={isMobile ? 3 : 6}>
            {dummnyCategories.map((item, index) => (
              <CategoryItem key={`category-${index}`} category={item} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
