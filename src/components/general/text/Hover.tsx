import clsx from "clsx";
import React from "react";
import Link from "next/link";
interface HoverProps extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
  tag?: "a" | "span" | "p" | "nextLink";
  href?: string;
  colorChange?: boolean;
}

const Hover = ({
  children,
  className,
  href,
  tag = "span",
  colorChange = true,
  ...rest
}: HoverProps) => {
  const Tag = tag as "a";

  return (
    <>
      {tag === "nextLink" ? (
        <Link
          {...rest}
          className={clsx([
            "cursor-pointer transition duration-300  hover:underline ",
            colorChange && "hover:text-orange-600",
            className,
          ])}
          href={href as ""}
        >
          {children}
        </Link>
      ) : (
        <Tag
          className={clsx([
            "cursor-pointer transition duration-300  hover:underline ",
            colorChange && "hover:text-orange-600",
            className,
          ])}
          href={href as ""}
          {...rest}
        >
          {children}
        </Tag>
      )}
    </>
  );
};

export default Hover;
