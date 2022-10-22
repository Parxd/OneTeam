import React, { useState } from "react";

const UserCard = () => {
  const [user, setUser] = useState([]);
  return (
    <div class='py-8 flex flex-wrap md:flex-nowrap'>
      <div class='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
        <span class='font-semibold title-font text-white'>Name</span>
        <span class='mt-1 text-gray-500 text-sm'>Major</span>
      </div>
      <div class='md:flex-grow'>
        <p class='leading-relaxed'>Skills : ...</p>
        <button class='text-blue-400 inline-flex items-center mt-4'>
          Contact
          <svg
            class='w-4 h-4 ml-2'
            viewBox='0 0 24 24'
            stroke='currentColor'
            stroke-width='2'
            fill='none'
            stroke-linecap='round'
            stroke-linejoin='round'
          >
            <path d='M5 12h14'></path>
            <path d='M12 5l7 7-7 7'></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default UserCard;
