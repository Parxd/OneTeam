import React, { useEffect, useState } from "react";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";

const UserCard = () => {
  const [users, setUsers] = useState([
    {
      name: "placeholder name",
      majors: "placeholder major",
      skills: "placeholder skills",
      contact: "placeholder@email.com",
      interests: "placeholder interests",
      status: 0,
    },
    {
      name: "placeholder name",
      majors: "placeholder major",
      skills: "placeholder skills",
      contact: "placeholder@email.com",
      interests: "placeholder interests",
      status: 1,
    },
  ]);

  const usersCollectionRef = collection(db, "user");

  // Fetch the required data using the get() method
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(
        data.docs.map((doc) => ({
          ...doc.data(),
        }))
      );
    };
    getUsers();

    console.log(users);
  }, []);


  // Availability/status flag
  function availabilityText (userStatus) {
    if(userStatus==0) {
      return 'Available';
    } else if (userStatus==1) {
      return 'Incomplete Team';
    } else if (userStatus==2) {
      return 'Unavailable';
    } else {
      return 'Uknown';
    }
  }

  return (
    <div>
      {users.map((user) => {
        return (
          <div className='py-8 flex flex-wrap md:flex-nowrap border border-gray-700 my-5 border-opacity-75 p-6 rounded-lg'>
            <div className='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col '>
              <span className='font-semibold title-font text-white'>Name: {user.name}</span>
              <span className='mt-1 text-gray-500 text-sm'>Majors: {user.majors}</span>
              <span className='mt-1 text-gray-500 text-sm'>{availabilityText(user.status)}</span>
            </div>
            <div className='md:flex-grow'>
              <p className='leading-relaxed'>Skills: {user.skills}</p>
              <p className='leading-relaxed'>Interests: {user.interests}</p>
              <p className='leading-relaxed'>Contact: {user.contact}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserCard;
