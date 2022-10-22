import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import UsersSection from "./UsersSection";

// Style Imports
import "../../App.css";

export default function () {
  return (
    <body className='h-screen bg-gray-900 from-green-200 to-green-500'>
      <NavBar />
      <Header />
      <UsersSection />
    </body>
  );
}
