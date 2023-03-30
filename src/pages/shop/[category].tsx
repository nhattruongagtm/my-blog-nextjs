import { Category } from "@/app/components/Category/interfaces";
import React from "react";
import { dummnyCategories } from "../api/dummyCategoryList";

type Props = {
  category: any;
};

const CategoryPage = ({ category }: Props) => {

  return <div>{category}</div>;
};

export default CategoryPage;

export async function getStaticPaths() {
  const paths = dummnyCategories.map((category) => ({
    params: {
      category: category.path,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { category } }: any) {
  return {
    props: {
      category,
    },
  };
}
