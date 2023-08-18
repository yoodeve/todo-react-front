import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { Reset } from "styled-reset";
import Main from "./pages/Main/Main";
import MainLayout from "./components/MainLayout/MainLayout";
import { Global } from "@emotion/react";
import * as G from "./styles/common";

function App() {
  return (
    <>
      <Reset />
      <Global styles={G.GSCommon} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="today" element={<Main />}/>
            <Route path='/' element={<Navigate replace to='/today' />} />
            <Route path='upcoming' element={<Main />} />
            <Route path='calendar' element={<Main />} />
            <Route path='stickywall' element={<Main />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
   
  );
}

export default App;
