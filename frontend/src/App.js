import React, { useState, Component } from "react";

// Component Imports
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import UsersSection from "./components/UsersSection/UsersSection";

// Style Imports
import "./App.css";

function App() {
  return (
    <div class='appContained'>
      <NavBar />
      <Header />
      <UsersSection />
    </div>
  );
}

export default App;
