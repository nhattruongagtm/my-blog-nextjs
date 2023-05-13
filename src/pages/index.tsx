import HomeBanner from "@/app/components/Banner/HomeBanner";
import { Post } from "@/app/components/Posts/interfaces";
import RecentPosts from "@/app/components/Posts/RecentPosts";
import TopPosts from "@/app/components/Posts/TopPosts";
import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import path from "path";

type Props = {
  posts: Post[];
};

export default function Home({ posts }: Props) {
  return (
    <>
      <Head>
        <title>Truong Dev Blog</title>
        <meta name="description" content="truong dev blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="blog-homes w-full lg:w-3/4 m-auto">
        <HomeBanner />
        <TopPosts posts={posts} />
        <RecentPosts posts={posts} />
      </div>
    </>
  );
}
export async function getStaticProps() {
  const dirPath = path.join(process.cwd(), "src/pages/blog/posts");
  const files = fs.readdirSync(dirPath);

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`${dirPath}/${fileName}`, "utf-8");
    const { data: frontmatter, content } = matter(readFile);

    return {
      slug,
      frontmatter,
      content,
    };
  });

  return {
    props: { posts: posts },
  };
}
