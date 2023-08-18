import { css } from "@emotion/react";

export const SLayout = (isShow) => css`
  width: 250px;
  height: 100%;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 20px;
  position: absolute;
  top: 0;
  transition: left 0.8s ease-in-out;
  left: ${isShow ? "0px" : "-200px"};
  border-top-right-radius: unset !important;
  border-bottom-right-radius: unset !important;
  overflow: hidden;
  z-index: 1;
`;
