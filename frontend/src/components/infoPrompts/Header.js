import React from "react";

const Header = () => {
  return (
    <section className='text-gray-400 bg-gray-900 body-font'>
      <div className='container px-5 py-5 mx-auto'>
        <div className='text-center mb-5'>
          <h1 className='sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4'>
            Complete your profile
          </h1>
          <p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto'>
            Join the teammate search
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
