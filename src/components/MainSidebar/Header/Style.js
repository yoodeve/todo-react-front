import { css } from "@emotion/react";

export const SLayout = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const SContainer = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const STitle = css`
  font-size: 18px;
  font-weight: 800;
  cursor: default;
`;

export const SBtn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  font-size: 20px;
  font-weight: 800;
  cursor: pointer;
  padding: 0;
`;

export const SSearchBox = css`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  padding: 5px 5px 5px 30px;
  width: 100%;
  margin: 10px 0;
`;

export const SInput = css`
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  &:focus {
    outline: none !important;
  }
`;

export const SSearchIcon = css`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  left: 5%;
`;
