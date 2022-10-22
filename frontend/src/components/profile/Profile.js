import React, { useState } from "react";

import Header from "./Header";
import NavBar from "./NavBar";

const Profile = () => {
  const [user, setUser] = useState(
    {
      firstname: "myName",
      lastname: "myLastname",
      majors: "myMajors",
      skills: "mySkill1, mySkill2",
      contact: "myEmail",
      interests: "myInterest1, myInterest2",
      status: 0,
    }
  );
  return (
    <body className='h-screen bg-gray-900 from-green-200 to-green-500'>
      {console.log(user)}
      <NavBar />
      <Header name={user.firstname + " " + user.lastname} availabilityFlag={user.status}/>
        <section class="text-gray-400 bg-gray-900 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div class="flex flex-wrap -m-4">

            <div class="p-4 lg:w-1/2 md:w-full">
                <div class="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
                  <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-white text-lg title-font font-medium mb-3">Major</h2>
                    <p class="leading-relaxed text-base">{user.majors}</p>
                  </div>
                </div>
              </div>

              
            <div class="p-4 lg:w-1/2 md:w-full">
                <div class="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
                  <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-white text-lg title-font font-medium mb-3">Skills</h2>
                    <p class="leading-relaxed text-base">{user.skills}</p>
                  </div>
                </div>
              </div>

              <div class="p-4 lg:w-1/2 md:w-full">
                <div class="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
                  <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-white text-lg title-font font-medium mb-3">Interests</h2>
                    <p class="leading-relaxed text-base">{user.skills}</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
      </body>
    );
};

export default Profile;
