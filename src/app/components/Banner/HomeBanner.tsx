import Carousel from "@/app/components/Carousel/Carousel";
import CategoryItem from "@/app/components/Category/CategoryItem";
import useResponsive from "@/app/hooks/useResponsive";
import { dummyTopics } from "@/pages/api/dummyCategoryList";
import Image from "next/image";

const HomeBanner = () => {
  const { isMobile } = useResponsive();
  return (
    <div className="bannesr-main" id="bannser-main">
      <div className="w-full h-[400px flex justify-between items-center py-[40px]">
        <div className="introduction flex-col justify-center items-center h-fit">
          <p className="">Hello erveryone!</p>
          <p className="text-[30px] my-1 font-semibold">I&apos;m Truong</p>
          <p className="max-w-[400px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
            laboriosam quis perferendis labore molestias debitis delectus
            doloremque neque rem ipsa sint autem tempore beatae ab, sapiente sed
            laudantium! Assumenda, nemo.
          </p>
          <form className="subscribe p-0.5 rounded-lg flex my-2 gap-1 items-center dark:bg-border-dark-h w-fit bg-gray-200">
            <input
              type="text"
              className="w-[60%] outline-none dark:text-white text-black bg-transparent border-none focus:ring-none ring-0 focus:ring-0"
            />
            <button type="submit" className="btn-gradient">
              Subscribe
            </button>
          </form>
        </div>
        <div className="lg:block hidden image overflow-hidden max-w-[50%] items-center rounded-full">
          <Image
            width={500}
            height={500}
            alt=""
            className="object-cover"
            src="https://images.unsplash.com/photo-1678815927938-0fb01822962c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          />
        </div>
      </div>
      <div className="flex-col w-full m-auto h-full">
        <div className="category lg:flex items-center p-4 border dark:border-border-dark rounded-lg dark:bg-card-dark justify-between shadow-md">
          <div className="category-info w-64 h-full">
            <p className="text-[25px] mb-1 font-[500]">Hot topics</p>
            <p className="text-sm mb-1">
              Don&rsquo;t miss out on the latest news about Travel tips, Hotel
              reviews and Food guide...
            </p>
          </div>

          <Carousel arrows slidesToShow={isMobile ? 3 : 6}>
            {dummyTopics.map((item, index) => (
              <CategoryItem key={`category-${index}`} category={item} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
