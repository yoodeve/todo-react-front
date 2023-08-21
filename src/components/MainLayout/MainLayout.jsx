import React from "react";
/** @jsxImportSource @emotion/react */
import MainSidebar from "../MainSidebar/MainSidebar";
import * as S from "./Style";
import { Outlet } from "react-router-dom";
import RightSubSidebar from "../RightSubSidebar/RightSubSidebar";

function MainLayout() {
  return (
      <div css={S.SLayout}>
        <MainSidebar />
        <Outlet />
      </div>
  );
}

export default MainLayout;
