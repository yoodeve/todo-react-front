import React, { useEffect } from "react";
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { useRecoilState } from "recoil";
import { rcIsSidebar, rcIsRightSideBar } from "../../store/sidebarStore";

function MainContainer({ children }) {
  const [isSidebarShow, setIsSideBarShow] = useRecoilState(rcIsSidebar);
  const [isRightSidebarShow, setIsRightSideBarShow] =
    useRecoilState(rcIsRightSideBar);
  useEffect(() => {
    return () => {
      setIsRightSideBarShow(false);
    };
  }, []);
  return (
    <>
      <div css={S.SLayout(isSidebarShow, isRightSidebarShow)}>
        {children}
      </div>
    </>
  );
}

export default MainContainer;
