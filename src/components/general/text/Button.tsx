import React from "react";
import clsx from "clsx";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  inverse?: boolean;
  href?: string;
}

const Button = ({
  className,
  inverse = false,
  children,
  href,
  ...rest
}: ButtonProps) => {
  return (
    <>
      {href ? (
        <Link href={href}>
          <button
            className={clsx(
              "flex w-fit rounded border-2 border-orange-600 bg-orange-600 p-4 px-8 text-center text-xl uppercase text-white transition duration-300 hover:border-orange-700 hover:bg-orange-700",
              className,
              inverse &&
                "bg-white text-orange-600  hover:bg-orange-600 hover:text-white"
            )}
            {...rest}
          >
            {children}
          </button>
        </Link>
      ) : (
        <button
          className={clsx(
            "flex w-fit  rounded border-2 border-orange-600 bg-orange-600 p-4 px-8 text-center text-xl uppercase text-white transition duration-300 hover:border-orange-700 hover:bg-orange-700",
            className,
            inverse &&
              "bg-white text-orange-600  hover:bg-orange-600 hover:text-white"
          )}
          {...rest}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
