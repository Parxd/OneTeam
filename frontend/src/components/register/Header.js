import React from "react";

const Header = () => {
  return (
    <section className='text-gray-400 bg-gradient-to-l from-gray-700 via-gray-900 to-black'>
      <div className='container px-5 py-5 mx-auto'>
        <div className='text-center mb-5'>
          <h1 className='sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4'>
            Register for OneTeam
          </h1>
          <p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto'>
            Find teammates by interests, majors and skills
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
