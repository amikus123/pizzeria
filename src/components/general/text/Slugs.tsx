import { useRouter } from "next/router";
import React, { useState } from "react";
import capitalize from "lodash/capitalize";
import Hover from "./Hover";
interface SlugData {
  text: string;
  href: string;
}
const splitSlug = (arr: string[]): SlugData[] => {
  const obj: SlugData[] = [];
  arr.forEach((item, index) => {
    if (index === 0) {
      obj.push({ href: `${item}`, text: "Start" });
    } else {
      obj.push({
        href: `${obj[index - 1]?.href}/${item}`,
        text: capitalize(item),
      });
    }
  });
  if (obj[0]) {
    obj[0].href = "/";
  }
  console.log({ obj });
  return obj;
};
const Slugs = () => {
  const router = useRouter();
  const [slugData] = useState(splitSlug(router.pathname.split("/")));
  console.log({ slugData });
  return (
    <ul className="flex gap-2 text-lg  lg:text-xl">
      {slugData.map(({ href, text }, index) => {
        return (
          <li key={index}>
            <Hover tag="nextLink" href={href}>
              {text}
            </Hover>
            {index < slugData.length - 1 && (
              <span
                className="ml-2
            "
              >
                /
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Slugs;
