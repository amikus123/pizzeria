import { atom } from "recoil";

export interface Image {
  src: string;
  alt: string;
}
export const imageGalleryAtom = atom<Image[]>({
  key: "imageGallery",
  default: [
    { alt: "Chef", src: "/chef.jpg" },
    { alt: "Couple", src: "/couple.jpg" },
    { alt: "Chef", src: "/chef.jpg" },
    { alt: "Couple", src: "/couple.jpg" },
    { alt: "Chef", src: "/chef.jpg" },
    { alt: "Couple", src: "/couple.jpg" },
    { alt: "Chef", src: "/chef.jpg" },
    { alt: "Couple", src: "/couple.jpg" },
    { alt: "Chef", src: "/chef.jpg" },
    { alt: "Couple", src: "/couple.jpg" },
  ],
});

export const imageGalleryIndexAtom = atom<number>({
  key: "imageGalleryIndex",
  default: 1,
});
