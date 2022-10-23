import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";


// Imports for Google sign-in functionality
import { GoogleButton } from "react-google-button";

// Imports for email & password login functionality
import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const RegisterForm = () => {
  // Email & Password register functionality
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmRegisterPassword, setConfirmRegisterPassword] = useState("");
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  });

  const navigate = useNavigate();
  const register = async () => {
    try {
      if (registerPassword === confirmRegisterPassword) {
        const user = await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
        );
        navigate("/infoPrompts");
      } else {
        alert("Passwords do not match.");
      }
    } catch (error) {
      alert("Email already in use.");
    }
  };
  // Page structure
  return (
    <section class='text-gray-400 bg-gradient-to-l from-gray-700 via-gray-900 to-black'>
      <div class='container px-5 py-24 mx-auto'>
        <div class='lg:w-1/2 md:w-2/3 mx-auto'>
          <div class='flex flex-wrap -m-2'>
            <div class='p-2 w-full'>
              <div class='relative'>
                <label for='Email' class='leading-7 text-sm text-gray-400'>
                  Email
                </label>
                <input
                  type='text'
                  id='Email'
                  name='Email'
                  onChange={(event) => {
                    setRegisterEmail(event.target.value);
                  }}
                  class='w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                ></input>
              </div>
            </div>

            <div class='p-2 w-1/2'>
              <div class='relative'>
                <label for='Password' class='leading-7 text-sm text-gray-400'>
                  Password
                </label>
                <input
                  type='Password'
                  id='Password'
                  name='Password'
                  onChange={(event) => {
                    setRegisterPassword(event.target.value);
                  }}
                  class='w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                ></input>
              </div>
            </div>

            <div class='p-2 w-1/2'>
              <div class='relative'>
                <label
                  for='Confirm Password'
                  class='leading-7 text-sm text-gray-400'
                >
                  Confirm Password
                </label>
                <input
                  type='Password'
                  id='Confirm Password'
                  name='Confirm Password'
                  onChange={(event) => {
                    setConfirmRegisterPassword(event.target.value);
                  }}
                  class='w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                ></input>
              </div>
            </div>
            <div class='p-2 w-full'>
              <button
                onClick={register}
                class='flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg'
              >
                Register
              </button>
            </div>
          </div>
        </div>

        <p className='text-center leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto'>
          or
        </p>

        <div class='p-2 w-full'>
          <GoogleButton class='flex mx-auto focus:outline-none hover:bg-blue-600 rounded text-lg' />
        </div>

        <div class='p-2 w-full'>
          <p className='text-center leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto'>
            Existing user?{" "}
            <a
              class='text-gray-400 border-0 focus:outline-none hover:text-blue-600'
              href='../login'
            >
              Log In
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
