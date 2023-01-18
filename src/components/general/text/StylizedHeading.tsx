import clsx from "clsx";
import React from "react";
import { TagType } from "./Heading";

interface StylizedHeadingProps
  extends React.ButtonHTMLAttributes<HTMLHeadingElement> {
  tag: TagType;
  upperText: string;
}
const StylizedHeading = ({
  tag,
  upperText,
  children,
  className,
  ...rest
}: StylizedHeadingProps) => {
  const Tag = tag;

  return (
    <Tag className={clsx(["flex flex-col", className])} {...rest}>
      <span className="pb-2 font-serif text-2xl text-orange-500 sm:text-3xl md:text-4xl">
        {upperText}
      </span>
      <span className="pb-2 text-3xl font-bold sm:text-5xl  md:max-w-none md:text-6xl">
        {children}
      </span>
      <div className="h-2 w-8 bg-orange-600"></div>
    </Tag>
  );
};

export default StylizedHeading;
