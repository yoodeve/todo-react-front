import React from "react";
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { FaChevronRight } from "react-icons/fa";
import { rcIsRightSideBar } from "../../../store/sidebarStore";
import { useRecoilState } from "recoil";

function TaskList({ target, setTarget }) {
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

  const handleCheckboxClick = (e) => {e.stopPropagation()}
  return (
    <ul css={S.SLayout}>
      <li onClick={rightShowClick} css={S.SListBox}>
        <div css={S.SListContent}>
          <input css={S.SCheckbox} onClick={handleCheckboxClick} type="checkbox" />
          <span>Research content ideas</span>
        </div>
        <FaChevronRight />
      </li>
    </ul>
  );
}

export default TaskList;
