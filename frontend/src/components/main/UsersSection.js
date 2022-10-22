import React, { useState } from "react";

import UserCards from "./UserCards";
const UsersSection = () => {
  return (
    <section className='text-gray-400 bg-gray-900 body-font overflow-hidden'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='-my-8 divide-y-2 divide-gray-800'>
          <UserCards />
        </div>
      </div>
    </section>
  );
};

export default UsersSection;
