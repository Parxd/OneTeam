import React from "react";

// Component Imports
import Main from "./components/main/Main";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Profile from "./components/profile/Profile";
import InfoPrompts from "./components/infoPrompts/infoPrompts";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='appContained'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/main' element={<Main />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/infoPrompts' element={<InfoPrompts />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
