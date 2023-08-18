import { css } from "@emotion/react";

export const SLayout = css`
  border-bottom: 1px solid #dbdbdb;
  padding: 20px 5px;
`;

export const STitle = css`
  margin-bottom: 10px;
  font-size: 11px;
  font-weight: 600;
  cursor: default;
`;

export const SListContainer = css``;

export const SListBox = (isSelected) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  ${isSelected && "background-color: #eaeaea;"};
  cursor: pointer;
`;

export const SListName = (isSelected) => css`
  display: inline-block;
  flex-grow: 1;
  font-size: 14px;
  margin-left: 5px;
  ${isSelected && "font-weight: 600;"};
`;

export const SCount = (isSelected) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 20px;
  border-radius: 5px;
  background-color: ${isSelected ? "#fff" : "#eaeaea"};
  font-size: 11px;
  font-weight: 600;
`;
