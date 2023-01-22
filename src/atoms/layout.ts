import { atom } from "recoil";

export const isMobileMenuOpenAtom = atom<boolean>({
  key: "isMobileMenuOpenAtom",
  default: false,
});
