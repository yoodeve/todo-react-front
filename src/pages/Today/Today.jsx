import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import MainContainer from "../../components/MainContainer/MainContainer";
import Header from "../../components/MainContainer/Header/Header";
import AddNewTaskBtn from "../../components/Buttons/AddNewTaskBtn/AddNewTaskBtn";
import TaskList from "../../components/List/TaskList/TaskList";
import RightSubSidebar from '../../components/RightSubSidebar/RightSubSidebar'

function Today(props) {
  const [target, setTarget] = useState(null);
  console.log(target)
  
  return (
    <>
      <MainContainer>
        <Header title="Today" count={5} />
        <AddNewTaskBtn target={target} setTarget={setTarget} />
        <TaskList target={target} setTarget={setTarget} />
        
      </MainContainer>
      <RightSubSidebar>

      </RightSubSidebar>
    </>
  );
}

export default Today;
