import { css } from "@emotion/react";

export const SLayout = (isSidebarShow) => css`
  transition: left 0.8s ease-in-out;
  position: relative;
  left: ${isSidebarShow ? "260px" : "60px"};
  width: calc(100% - 60px);
  height: 100%;
  background-color: #eaeaea;
`;
