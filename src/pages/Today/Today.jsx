import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style'
import { useRecoilState } from 'recoil';
import { isSidebarShowState } from '../../store/sidebarStore';

function Today(props) {
  const [isSidebarShow, setIsSideBarShow] = useRecoilState(isSidebarShowState);
  return (
    <div css={S.SLayout(isSidebarShow)}>
      todayyyyyyyyyyyyy
    </div>
  );
}

export default Today;