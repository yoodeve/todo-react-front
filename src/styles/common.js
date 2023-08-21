import { css } from "@emotion/react";

export const GSCommon = css`
  * {
    box-sizing: border-box;
    color: #333;
  }

  *::-webkit-scrollbar {
    border: none;
    width: 5px;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #dbdbdb;
    border-radius: 5px;
    height: auto;
  }

  html {
    background-color: #bbd2bd;
  }
`;
