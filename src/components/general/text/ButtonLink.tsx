import Link from "next/link";
import React from "react";
import type { Url } from "url";
import clsx from "clsx";

interface ButtonLnkProps {
  href?: Url | string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const ButtonLink = ({
  children,
  className = "",
  href,
  onClick,
}: ButtonLnkProps) => {
  return (
    <Link
      onClick={onClick}
      className={clsx(
        "flex w-fit  rounded bg-orange-600 p-4 text-center text-xl text-white",
        className
      )}
      href={href as Url}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
