import React from "react";

import Header from "./Header";
import NavBar from "./NavBar";
import RegisterForm from "./registerForm";

export default function Register() {
  return (
    <body className='h-screen bg-gradient-to-l from-gray-700 via-gray-900 to-black'>
      <NavBar />
      <Header />
      <RegisterForm />
    </body>
  );
}
