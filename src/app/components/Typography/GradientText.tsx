import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  fontSize?: number;
  className?: string;
};

const GradientText = ({ children, fontSize, className = "" }: Props) => {
  return (
    <h1
      className={`w-fit font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-light to-cyan my-1.5 text-[${
        fontSize ?? 20
      }px] ${className}`}
    >
      {children}
    </h1>
  );
};

export default GradientText;
