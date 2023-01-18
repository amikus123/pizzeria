import clsx from "clsx";
import React from "react";
import Link from "next/link";
interface HoverProps extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
  tag?: "a" | "span" | "p" | "nextLink";
  href?: string;
}

const Hover = ({
  children,
  className,
  href,
  tag = "span",
  ...rest
}: HoverProps) => {
  const Tag = tag as "a";

  return (
    <>
      {tag === "nextLink" ? (
        <Link
          {...rest}
          className={clsx([
            className,
            "cursor-pointer transition duration-300 hover:text-orange-600 hover:underline ",
          ])}
          href={href as ""}
        >
          {children}
        </Link>
      ) : (
        <Tag
          className={clsx([
            className,
            "cursor-pointer transition duration-300 hover:text-orange-600 hover:underline ",
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
