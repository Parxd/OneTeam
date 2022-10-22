import React from "react";

import Header from './Header';

const InfoPrompts = () => {
    return (
        <body className='h-screen bg-gray-900 from-green-200 to-green-500'>
            <section class="text-gray-400 bg-gray-900 body-font relative">
                <div class="container px-5 py-24 mx-auto">
                    <Header/>

                    <div class="lg:w-1/2 md:w-2/3 mx-auto">
                    <div class="flex flex-wrap -m-2">

                        <div class="p-2 w-full">
                        <div class="relative">
                            <label for="fullname" class="leading-7 text-sm text-gray-400">First Name</label>
                            <input type="text" id="fullname" name="fullname" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Full Name"></input>
                        </div>
                        </div>

                        <div class="p-2 w-1/2">
                        <div class="relative">
                            <label for="email" class="leading-7 text-sm text-gray-400">Preferred Contact Information</label>
                            <input type="email" id="email" name="email" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Email ID or phone number"></input>
                        </div>
                        </div>

                        <div class="p-2 w-1/2">
                        <div class="relative">
                            <label for="majors" class="leading-7 text-sm text-gray-400">Majors</label>
                            <input type="majors" id="majors" name="majors" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="List your majors"></input>
                        </div>
                        </div>

                        <div class="p-2 w-full">
                        <div class="relative">
                            <label for="skills" class="leading-7 text-sm text-gray-400">Skills</label>
                            <input type="skills" id="skills" name="skills" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="List your skills"></input>
                        </div>
                        </div>

                        <div class="p-2 w-full">
                        <div class="relative">
                            <label for="interests" class="leading-7 text-sm text-gray-400">Interests</label>
                            <input type="interests" id="interests" name="interests" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="List your tech stack interests for this hackathon"></input>
                        </div>
                        </div>

                        <div class="p-2 w-full">
                        <button class="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Finish</button>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
      </body>
    );
  };
  
  export default InfoPrompts;