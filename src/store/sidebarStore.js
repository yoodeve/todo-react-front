import { atom } from "recoil";

export const rcIsSidebar = atom({
  key: "sidebar",
  default: false,
});

export const rcIsRightSideBar = atom({
  key: "rightSidebar",
  default: false,
});
