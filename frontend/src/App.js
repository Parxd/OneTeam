import React, { useState, Component } from "react";

// Component Imports
import NavBar from "./components/main/NavBar";
import Header from "./components/main/Header";
import UsersSection from "./components/main/UsersSection";

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
