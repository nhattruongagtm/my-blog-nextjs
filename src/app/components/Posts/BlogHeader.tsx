import Clock from "@/app/assets/icons/Clock";
import Date from "@/app/assets/icons/Date";
import useResponsive from "@/app/hooks/useResponsive";
import React from "react";
import GradientText from "../Typography/GradientText";

type BlogHeaderProps = {
  frontmatter: any;
};

const BlogHeader = ({ frontmatter }: BlogHeaderProps) => {
  const { title, createdDate, readingTime, tags } = frontmatter;
  const { isMobile } = useResponsive();

  return (
    <div className="pb-4 mb-10 border-b-2">
      <div className="blog-title">
        <GradientText fontSize={10}>{title}</GradientText>
      </div>
      <div className="info flex md:gap-16  gap-1 text-md text-gray-500">
        <div className="flex items-center gap-0.5">
          <Date />
          {createdDate}
        </div>
        <div className="flex items-center gap-0.5">
          <Clock />
          <span>
            {readingTime} <span>{readingTime > 1 ? "minutes" : "minute"}</span>
          </span>
        </div>
        <div className="flex self-end items-center gap-1 justify-self-end flex-wrap">
          {tags.map((tag: string) => (
            <span key={`tag-${title}`}> # {tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
