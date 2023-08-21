import { css } from "@emotion/react";

export const SLayout = (isSidebarShow) => {
  return css`
    transition: all 0.8s ease-in-out;
    position: absolute;
    top: 0;
    right: 0;
    width: ${isSidebarShow ? "290px" : "0"};
    height: calc(100% - 40px);
    background-color: #eee;
    border-radius: 10px;
    border-radius: 10px;
    margin: 20px 20px 20px 0;
  `;
};
