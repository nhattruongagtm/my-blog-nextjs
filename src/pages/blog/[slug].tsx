import CommentForm from "@/app/components/Comment/CommentForm";
import CommentList from "@/app/components/Comment/CommentList";
import Comments from "@/app/components/Comment/Comments";
import Markdown from "@/app/components/Markdown/Markdown";
import BlogHeader from "@/app/components/Posts/BlogHeader";
import { Post } from "@/app/components/Posts/interfaces";
import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";

type Props = {
  post: Post;
};

const DetailPost = ({ post }: Props) => {
  const { content, frontmatter } = post;
  const { title } = frontmatter;
  return (
    <div className="">
      <Head>
        <title>{title}</title>
        <meta name="description" content={`${title} content`} />
        <meta property="og:title" content={`${title} content`} />
      </Head>
      <div className="m-auto relative mardown prose prose-sky prose-2xl dark:prose-invert">
        <BlogHeader frontmatter={frontmatter} />
      </div>
      <div className="m-auto relative mardown prose prose-sky prose-xl dark:prose-invert">
        <Markdown>{content}</Markdown>
      </div>
      <Comments />
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
