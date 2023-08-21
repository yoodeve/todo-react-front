import { css } from "@emotion/react";

export const SLayout = css`
  height: 360px;
  overflow-y: scroll;
`;
export const SListBox = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #dbdbdb;
  width: 100%;
  font-weight: 600;
  cursor: pointer;
`;
export const SListContent = css`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;
export const SCheckbox = css`
margin-right: 10px;
`;