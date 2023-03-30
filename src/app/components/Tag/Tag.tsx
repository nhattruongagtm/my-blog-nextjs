import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  img?: string;
};

const Tag = ({ children, img }: Props) => {
  return (
    <div className="w-fit p-[10px] text-vsm rounded-lg border border-border-dark dark:bg-card-dark">
      # {children}
    </div>
  );
};

export default Tag;
