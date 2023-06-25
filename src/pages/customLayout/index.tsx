import React from "react";
import type { NextPageWithLayout } from "@/pages/_app";

type Props = {};

const CustomLayout: NextPageWithLayout = (props: Props) => {
  return <div>CustomLayout</div>;
};

CustomLayout.getLayout = function getLayout(page: JSX.Element) {
  return <div className="bg-red-300 h-300">{page}</div>;
};

export default CustomLayout;

// 11716799a218a11d2c42fe8de48fb0a49d
