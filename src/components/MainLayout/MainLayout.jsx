import React from "react";
/** @jsxImportSource @emotion/react */
import MainSidebar from "../MainSidebar/MainSidebar";
import * as S from "./Style";
import { Outlet } from "react-router-dom";
import Header from "../MainSidebar/Header/Header";

function MainLayout() {
  return (
      <div css={S.SLayout}>
        <MainSidebar />
        <Outlet />
      </div>
  );
}

export default MainLayout;
