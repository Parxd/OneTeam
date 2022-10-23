import React, { useEffect, useState } from "react";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";

const UserCard = () => {
  const [users, setUsers] = useState([
    {
      name: "some name",
      majors: "CS",
      skills: "",
      contact: "jiashu.huang@vanderbilt.edu",
      interests: "",
      status: 0,
    },
    {
      name: "abc",
      majors: "CS",
      skills: "",
      contact: "123456",
      interests: "idk what i'm doing",
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
          <div className='py-8 flex flex-wrap md:flex-nowrap'>
            <div className='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
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
