import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const GradientText = ({ children }: Props) => {
  return (
    <h1 className="w-fit font-extrabold text-transparent text-lg bg-clip-text bg-gradient-to-r from-blue-light to-cyan my-1.5">
      {children}
    </h1>
  );
};

export default GradientText;
