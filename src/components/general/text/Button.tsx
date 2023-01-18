import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  inverse?: boolean;
}

const Button = ({
  className,
  inverse = false,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "flex w-fit  rounded border-2 border-orange-600 bg-orange-600 p-4 px-8 text-center text-xl text-white",
        className,
        inverse &&
          "bg-white text-orange-600  transition duration-300 hover:bg-orange-600 hover:text-white"
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
