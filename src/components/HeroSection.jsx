import React from "react";

function HeroSection() {
  return (
    <div className='max-w-6xl m-auto h-fit py-10 text-center flex items-center flex-col justify-center gap-5'>
      <h1 className='text-4xl font-light'>
        <span className='text-indigo-800'>React+Tailwind</span> custom Select
        Component
      </h1>
      <p className='font-semibold'>
        Elegant, customizable select menu for user choice
      </p>
      <a
        href='https://github.com/shaheersystems/react-select'
        className='px-4 py-2 bg-indigo-800 rounded text-white font-semibold hover:bg-indigo-600'
      >
        Link to Repository
      </a>
    </div>
  );
}

export default HeroSection;
