import HomeBanner from "@/app/components/Banner/HomeBanner";
import RecentPosts from "@/app/components/Posts/RecentPosts";
import TopPosts from "@/app/components/Posts/TopPosts";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
type Props = {
  posts: {
    slug: string;
    frontmatter: any;
    content: string;
  }[];
};
// const markdownContent = readFileSync('./react-markdown.md', 'utf-8')

const Blog = ({ posts }: Props) => {
  const { content, frontmatter, slug } = posts[0];

  return (
    // <div className="text-xl text-white h-full w-full m-auto flex-col gap-2">
    //   <div className="ads-left bg-blue-light flex justify-center">
    //     {/* <GoogleAd
    //       googleAdId="ca-pub-5749665502208213"
    //       slot="2268403632"
    //       timeout={0}
    //       style={{ height: "100px", display: "block" }}
    //     /> */}
    //   </div>

    //   <div className="md-content w-1/2 m-auto">
    //     <Markdown>{content}</Markdown>
    //   </div>

    //   {/* <div className="ads-right bg-card-text-dark h-[500px] w-[260px] fixed right-0">
    //     <GoogleAd
    //       googleAdId="ca-pub-5749665502208213"
    //       slot="4766311139"
    //       timeout={0}
    //       format="fluid"
    //       layout="in-article"
    //     />
    //   </div> */}
    // </div>
    <div className="blog-home  w-full lg:w-3/4 m-auto ">
      <HomeBanner />
      <TopPosts />
      <RecentPosts />
    </div>
  );
};

export default Blog;

export async function getStaticProps() {
  // Get all our posts
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
