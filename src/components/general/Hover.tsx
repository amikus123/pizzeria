import clsx from "clsx";
import React from "react";

interface HoverProps extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
  tag?: "a" | "span" | "p";
  href?: string;
}

const Hover = ({ children, className, tag = "span", ...rest }: HoverProps) => {
  const Tag = tag as "a";

  return (
    <Tag className={clsx([className, ""])} {...rest}>
      {children}
    </Tag>
  );
};

export default Hover;
