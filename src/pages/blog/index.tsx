import HomeBanner from "@/app/components/Banner/HomeBanner";
import { Post } from "@/app/components/Posts/interfaces";
import RecentPosts from "@/app/components/Posts/RecentPosts";
import TopPosts from "@/app/components/Posts/TopPosts";
import { TYPES } from "@/cores/ioc/inversify-demo/type";
import Warrior from "@/cores/ioc/inversify-demo/warrior";
import { container } from "@/cores/ioc/inversify.config";
import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import path from "path";
import { useEffect } from "react";

type Props = {
  posts: Post[];
};

const Blog = ({ posts }: Props) => {
  useEffect(() => {
    const banner = document.querySelector("#banner-main");
    banner?.classList.add("display");

    document.addEventListener("scroll", (e) => {
      const pos = window.scrollY;
      if (pos > 550) {
        const newest = document.querySelector("#newest");
        newest?.classList.add("display");
      }
    });
  }, []);

  useEffect(() => {
    const ninja = container.get<Warrior>(TYPES.Warrior);
    console.log(ninja.fight());
  }, []);

  return (
    <div className="blog-home w-full lg:w-3/4 m-auto">
      <Head>
        <title>My Blogs</title>
        <meta name="description" content="My Blogs page" />
        <meta property="og:title" content="My Blogs page" />
      </Head>
      <HomeBanner />
      <TopPosts posts={posts} />
      <RecentPosts posts={posts} />
    </div>
  );
};

export default Blog;

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
