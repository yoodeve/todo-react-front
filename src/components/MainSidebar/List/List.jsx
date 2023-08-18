import React from "react";
import { HiCalendar } from "react-icons/hi";
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { useLocation, useNavigate } from "react-router-dom";

function List({ title, list }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const onPageMove = path => {
    navigate(path);
  }
  
  return (
    <div css={S.SLayout}>
      <h2 css={S.STitle}>{title}</h2>
      <ul css={S.SListContainer}>
        {list.map((e) => {
          const isSelected = pathname.startsWith(e.pathname);
          return (
            <li onClick={() => onPageMove(e.pathname)} key={e.name} css={S.SListBox(isSelected)}>
              <HiCalendar />
              <span css={S.SListName(isSelected)}>{e.name}</span>
              {!!e.count && <div css={S.SCount(isSelected)}>{e.count}</div>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
