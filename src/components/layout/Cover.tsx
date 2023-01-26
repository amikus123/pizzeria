import clsx from "clsx";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { isMobileMenuOpenAtom } from "../../atoms/layout";
import { useScrollbarWidth } from "../../hooks/useScrollbarWidth";

interface CoverProps {
  url: string;
  alt: string;
  isLanding?: boolean;
}
const Cover = ({ alt, url, isLanding }: CoverProps) => {
  const isMobileMenuOpen = useRecoilValue(isMobileMenuOpenAtom);
  const width = useScrollbarWidth();
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  useEffect(() => {
    setScrollbarWidth(width);
  }, [width]);
  return (
    <div
      className={clsx([
        "pointer-events-none  relative w-full overflow-hidden brightness-50",

        isLanding
          ? "h-[87vw] max-h-[800px] min-h-[600px]"
          : "h-[60vw] max-h-[400px] min-h-[400px] xl:max-h-[450px]",
      ])}
    >
      <Image
        src={url}
        className={clsx([
          " animate-scale-picture object-cover",
          isMobileMenuOpen && `!w-[calc(100%-${scrollbarWidth}px)]`,
        ])}
        fill
        alt={alt}
      />
    </div>
  );
};

export default Cover;
