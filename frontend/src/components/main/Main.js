import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import UsersSection from "./UsersSection";

// Style Imports
import "../../App.css";

export default function () {
  return (
    <div>
      <NavBar />
      <Header />
      <UsersSection />
    </div>
  );
}
