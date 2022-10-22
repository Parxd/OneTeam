import React from "react";

import Header from "./Header";
import NavBar from "./NavBar";
import { GoogleButton } from "react-google-button";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";

export default function Login() {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  console.log(googleSignIn);

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <body className='h-screen bg-gray-900 from-green-200 to-green-500'>
      <NavBar />
      <Header />
      <GoogleButton onClick={handleGoogleSignIn} />
    </body>
  );
}
