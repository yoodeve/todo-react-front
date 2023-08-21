import React from "react";
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { FaPlus } from "react-icons/fa";
import { rcIsRightSideBar } from "../../../store/sidebarStore";
import { useRecoilState } from "recoil";

function AddNewTaskBtn({ target, setTarget }) {
  const [isRightSidebar, setIsRightSidebar] = useRecoilState(rcIsRightSideBar);
  const rightShowClick = (e) => {
    if (target === e.target) {
      setIsRightSidebar(false);
      setTarget(null);
    } else if (target === null) {
      setIsRightSidebar(true);
      setTarget(e.target);
    } else {
      setTarget(e.target);
    }
  };
  return (
    <button onClick={rightShowClick} css={S.SLayout}>
      <FaPlus css={S.SIcon} />
      <span css={S.SName}>Add New Task</span>
    </button>
  );
}

export default AddNewTaskBtn;
