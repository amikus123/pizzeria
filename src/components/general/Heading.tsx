import clsx from "clsx";
import React from "react";

type TagType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
interface HeadingProps extends React.ButtonHTMLAttributes<HTMLHeadingElement> {
  tag: TagType;
}

const Heading = ({ children, tag, className, ...rest }: HeadingProps) => {
  const Tag = tag;
  return (
    <Tag {...rest} className={clsx(["text-xl font-bold ", className])}>
      {children}
    </Tag>
  );
};

export default Heading;
