import React from "react";

import Header from "./Header";
import NavBar from "./NavBar";
import RegisterForm from "./registerForm";

export default function Register() {
  
  return (
    <body className='h-screen bg-gray-900 from-green-200 to-green-500'>
      <NavBar />
      <Header />
      <RegisterForm />
    </body>
  );
}
