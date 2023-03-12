import useResponsive from "@/app/hooks/useResponsive";
import { dummnyBrands } from "@/pages/api/dummyBrandList";
import React from "react";
import Carousel from "@/app/components/Carousel/Carousel";
import GradientText from "@/app/components/Typography/GradientText";
import Brand from "./Brand";

type Props = {};

const BrandList = (props: Props) => {
  const { isMobile } = useResponsive();
  return (
    <div className="my-5">
      <GradientText>Top Brands</GradientText>
      <Carousel
        autoPlaySpeed={2000}
        type="brand"
        slidesToShow={isMobile ? 5 : 10}
        arrows
      >
        {dummnyBrands.map((item, index) => (
          <Brand key={`brand-${index}`} brand={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default BrandList;
