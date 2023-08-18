import React from "react";
import * as S from "./Style";
/** @jsxImportSource @emotion/react */
import { HiMenu, HiSearch } from "react-icons/hi";

function Header({ menuToggleOnClick, isShow }) {
  return (
    <div css={S.SLayout}>
      <div css={S.SContainer}>
        <h1 css={S.STitle}>Menu</h1>
        <button css={S.SBtn} onClick={menuToggleOnClick}>
          <HiMenu />
        </button>
      </div>
      {isShow && (
        <div css={S.SSearchBox}>
          <HiSearch css={S.SSearchIcon} />
          <input css={S.SInput} type="search" />
        </div>
      )}
    </div>
  );
}

export default Header;
