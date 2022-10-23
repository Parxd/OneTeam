import React from "react";

import Header from "./Header";
import NavBar from "./NavBar";
import LoginForm from "./LoginForm";

export default function Login() {
  
  return (
    <body className='h-screen bg-gradient-to-l from-gray-700 via-gray-900 to-black'>
      <NavBar />
      <Header />
      <LoginForm />
    </body>
  );
}
