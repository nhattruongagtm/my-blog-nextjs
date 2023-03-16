import Markdown from "@/app/components/Markdown/Markdown";
import BlogHeader from "@/app/components/Posts/BlogHeader";
import { Post } from "@/app/components/Posts/interfaces";
import fs from "fs";
import matter from "gray-matter";

type Props = {
  post: Post;
};

const DetailPost = ({ post }: Props) => {
  const { content, frontmatter } = post;
  return (
    <div className="m-auto prose prose-sky prose-xl dark:prose-invert relative">
      <BlogHeader frontmatter={frontmatter} />
      <Markdown>{content}</Markdown>
      {/* <Actions /> */}
    </div>
  );
};

export default DetailPost;

export async function getStaticPaths() {
  const files = fs.readdirSync("src/pages/blog/posts");

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: any) {
  const fileName = fs.readFileSync(`src/pages/blog/posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      post: {
        frontmatter,
        content,
      },
    },
  };
}
