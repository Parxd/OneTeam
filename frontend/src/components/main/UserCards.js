import React, { useState } from "react";

const UserCard = () => {
  const [users, setUsers] = useState([
    {
      firstname: "Harry",
      lastname: "lastname",
      majors: "CS",
      skills: "Java",
      contact: "jiashu.huang@vanderbilt.edu",
      interests: "",
      status: 0,
    },
    {
      firstname: "abc",
      lastname: "lastname",
      majors: "CS",
      skills: "Java",
      contact: "123456",
      interests: "",
      status: 0,
    },
  ]);
  return (
    <div>
      {users.map((user) => {
        return (
          <div className='py-8 flex flex-wrap md:flex-nowrap'>
            <div className='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
              <span className='font-semibold title-font text-white'>
                Name: {user.name}
              </span>
              <span className='mt-1 text-gray-500 text-sm'>
                Majors: {user.majors}
              </span>
            </div>
            <div className='md:flex-grow'>
              <p className='leading-relaxed'>Skills : ...</p>
              <button className='text-blue-400 inline-flex items-center mt-4'>
                Contact
                <svg
                  className='w-4 h-4 ml-2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M5 12h14'></path>
                  <path d='M12 5l7 7-7 7'></path>
                </svg>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserCard;
