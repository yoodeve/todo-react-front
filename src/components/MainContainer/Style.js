import { css } from "@emotion/react";

export const SLayout = (isMainSidebarShow, isRightSidebarShow) => {
  let width = 80;
  if (isMainSidebarShow) {
    width += 210;
  }
  if (isRightSidebarShow) {
    width += 310;
  }

  return css`
    transition: all 0.8s ease-in-out;
    position: absolute;
    left: ${isMainSidebarShow ? "270px" : "60px"};
    width: calc(100% - ${width}px);
    height: calc(100% - 40px);
    background-color: #fafafa;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 20px;
  `;
};
