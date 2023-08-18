import React from "react";
import * as S from "./Style";
/** @jsxImportSource @emotion/react */
import { HiMenu, HiSearch } from "react-icons/hi";
import { useRecoilState } from "recoil";
import { isSidebarShowState } from "../../../store/sidebarStore";

function Header() {
  const [isSidebarShow, setIsSideBarShow] = useRecoilState(isSidebarShowState);
  const menuToggleOnClick = () => {
    setIsSideBarShow(!isSidebarShow);
  }
  return (
    <div css={S.SLayout}>
      <div css={S.SContainer}>
        <h1 css={S.STitle}>Menu</h1>
        <button css={S.SBtn} onClick={menuToggleOnClick}>
          <HiMenu />
        </button>
      </div>
      {isSidebarShow && (
        <div css={S.SSearchBox}>
          <HiSearch css={S.SSearchIcon} />
          <input css={S.SInput} type="search" />
        </div>
      )}
    </div>
  );
}

export default Header;
