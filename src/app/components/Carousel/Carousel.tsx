import LeftArrow from "@/app/assets/icons/LeftArrow";
import RightArrow from "@/app/assets/icons/RightArrow";
import useResponsive from "@/app/hooks/useResponsive";
import Slider, { Settings } from "react-slick";
import styled from "styled-components";
import ArrowIconButton from "./ArrowIconButton";
type CarouselProps = {
  children: JSX.Element[];
  autoPlaySpeed?: number;
  type?: "category" | "brand";
  slidesToShow?: number;
  arrows?: boolean;
};

const StyledCarousel = styled.div`
  height: 100%;
  max-width: 100%;
  .slick-track {
    display: flex;
    gap: 12px;
    justify-content: center;
  }
  .slick-list {
    overflow: hidden;
    height: 160px;
  }
  .slick-slide > div {
    display: flex;
    gap: 12px;
    margin-bottom: 24px;
    &:last-child {
      margin-bottom: 24px;
    }
  }
  .slick-dots {
    display: flex !important;
  }
  .slick-slider {
    position: relative;
  }
  .slick-prev {
    position: absolute;
    left: -220px;
    bottom: 0;
    cursor: pointer;
    /* min-width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center; */
  }
  .slick-next {
    position: absolute;
    left: -180px;
    bottom: 0;
    cursor: pointer;
  }
  &.brand-carousel {
    .slick-list {
      height: fit-content;
    }
    .slick-prev {
      position: absolute;
      left: -25px;
      bottom: "40px!important";
      cursor: pointer;
    }
    .slick-next {
      position: absolute;
      right: -25px;
      left: unset;
      bottom: "40px!important";
      cursor: pointer;
    }
  }
`;

const Carousel = ({
  children,
  autoPlaySpeed,
  type = "category",
  slidesToShow,
  arrows,
}: CarouselProps) => {
  const { isMobile } = useResponsive();
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: slidesToShow ?? 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: autoPlaySpeed ?? 3000,
    swipe: true,
    prevArrow: (
      <ArrowIconButton direction="prev">
        <LeftArrow />
      </ArrowIconButton>
    ),
    nextArrow: (
      <ArrowIconButton direction="next">
        <RightArrow />
      </ArrowIconButton>
    ),
    arrows: (arrows && !isMobile) ? true :false,
  };

  return (
    <StyledCarousel
      className={
        type === "category"
          ? "lg:w-3/4 h-32"
          : "w-[98%] brand-carousel h-fit m-auto"
      }
    >
      <Slider {...settings}>{children}</Slider>
    </StyledCarousel>
  );
};

export default Carousel;
