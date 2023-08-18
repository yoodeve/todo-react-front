import React, { useState } from "react";
import { css } from "@emotion/react";
import * as S from "./Style";
import Header from "./Header/Header";
import List from "./List/List";
/** @jsxImportSource @emotion/react */

function MainSidebar(props) {
  const [isShow, setIsShow] = useState(false);

  const [mainMenuList, setMainMenuList] = useState({
    tasks: [
      {
        pathname:'/upcoming',
        icon:"",
        name:"Upcoming",
        count:12
      },
      {
        pathname:'/today',
        icon:"",
        name:"Today",
        count:5
      },
      {
        pathname:'/calendar',
        icon:"",
        name:"Calendar",
        count:0
      },
      {
        pathname:'/stickywall',
        icon:"",
        name:"Sticky Wall",
        count:0
      },
    ],
    lists: [
      {
        icon:"",
        name:"Personal",
        count:12
      },
      {
        icon:"",
        name:"Work",
        count:5
      },
      {
        icon:"",
        name:"List1",
        count:12
      },
    ],
  });

  const showOnClick = () => {
    setIsShow(!isShow);
  };

  return (
    <div css={S.SLayout(isShow)}>
      <Header isShow={isShow} menuToggleOnClick={showOnClick} />
      {isShow && (
        <>
          <List title="TASKS" list={mainMenuList.tasks} />
          <List title="LISTS" list={mainMenuList.lists} />
        </>
      )}
    </div>
  );
}

export default MainSidebar;
