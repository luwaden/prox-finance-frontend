import React from "react";

import Sidebar from "./Component/Sidebar/Sidebar";
import {Route, Routes } from "react-router-dom";
import AuthPage from "./Component/auth/authPage";
import Home from "./Component/Home/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/auth' element={<AuthPage/>}>
        <Route path='/' element={<Home />}>

        </Route>
      </Routes>
    </div>
  );
};

export default App;
