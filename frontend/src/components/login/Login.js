import React from "react";

import Header from "./Header";
import NavBar from "./NavBar";
import LoginForm from "./LoginForm";


export default function Login() {
  return (
    <body className='h-screen bg-gray-900 from-green-200 to-green-500'>
      <NavBar />
      <Header />
      <LoginForm />
    </body>
  );
}
