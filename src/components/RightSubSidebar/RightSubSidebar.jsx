import React from "react";
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { useRecoilState } from "recoil";
import { rcIsRightSideBar } from "../../store/sidebarStore";

function RightSubSidebar({ children }) {
  const [isRightSidebar, setIsRightSidebar] = useRecoilState(rcIsRightSideBar);
  return <div css={S.SLayout(isRightSidebar)}>{children}</div>;
}

export default RightSubSidebar;
