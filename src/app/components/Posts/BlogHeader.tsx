import Clock from "@/app/assets/icons/Clock";
import Date from "@/app/assets/icons/Date";
import Eye from "@/app/assets/icons/Eye";
import GradientText from "../Typography/GradientText";

type BlogHeaderProps = {
  frontmatter: any;
};

const BlogHeader = ({ frontmatter }: BlogHeaderProps) => {
  const { title, createdDate, readingTime, tags } = frontmatter;

  return (
    <div className="pb-8 mb-[80px] border-b-2">
      <div className="blog-title mb-[40px]">
        <GradientText fontSize={5}>{title}</GradientText>
      </div>
      <div className="info flex md:gap-16  gap-1 text-md text-gray-500 dark:text-gray-200 flex-wrap">
        <div className="flex items-center gap-0.5">
          <Date />
          {createdDate}
        </div>
        <div className="flex items-center gap-0.5">
          <Eye />
          <span>12.4k</span>
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
