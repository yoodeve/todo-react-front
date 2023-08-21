/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import * as S from "./Style";

function Header({rightShowClick ,title, count}) {
  return (
    <div css={S.SLayout}>
      <h1 onClick={rightShowClick} css={S.STitle}>{title}</h1>
      <div css={S.SCountBox}>{count}</div>
    </div>
  );
}

export default Header;