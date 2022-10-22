import React from "react";

const Header = ({name, availabilityFlag}) => {
  
  var availabilityText = 'Unavailable'
  if(availabilityFlag==0) {
    availabilityText = 'Available'
  } else if (availabilityFlag==1) {
    availabilityText = 'Incomplete Team'
  } else {
    availabilityText = 'Unavailable'
  }

  return (
    <section className='text-gray-400 bg-gray-900 body-font'>
      <div className='container px-5 py-5 mx-auto'>
        <div className='text-center mb-5'>
          <h1 className='sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4'>{name}
          </h1>
          <p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto'>{availabilityText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
