/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import * as S from "./Style";
import Header from "./Header/Header";
import List from "./List/List";
import { useRecoilState } from "recoil";
import { isSidebarShowState } from "../../store/sidebarStore";

function MainSidebar(props) {
  const [isSidebarShow, setIsSideBarShow] = useRecoilState(isSidebarShowState);
  
  const [mainMenuList, setMainMenuList] = useState({
    tasks: [
      {
        id: 1,
        pathname: "/upcoming",
        icon: "",
        name: "Upcoming",
        count: 12,
      },
      {
        id: 2,
        pathname: "/today",
        icon: "",
        name: "Today",
        count: 5,
      },
      {
        id: 3,
        pathname: "/calendar",
        icon: "",
        name: "Calendar",
        count: 0,
      },
      {
        id: 4,
        pathname: "/stickywall",
        icon: "",
        name: "Sticky Wall",
        count: 0,
      },
    ],
    lists: [
      {
        id: 1,
        icon: "",
        name: "Personal",
        count: 12,
      },
      {
        id: 2,
        icon: "",
        name: "Work",
        count: 5,
      },
      {
        id: 3,
        icon: "",
        name: "List1",
        count: 12,
      },
    ],
  });

  return (
    <div css={S.SLayout(isSidebarShow)}>
      <Header />
      {isSidebarShow && (
        <>
          <List title="TASKS" list={mainMenuList.tasks} />
          <List title="LISTS" list={mainMenuList.lists} />
        </>
      )}
    </div>
  );
}

export default MainSidebar;
