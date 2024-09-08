import React from 'react';
import ProfileImage from './assets/Profileimage.jpg'; // Import the image

const Introduction = () => {
  return (
    <section
      id="introduction"
      className="p-10 text-center bg-gray-50 flex flex-col items-center"
    >
      {/* Image */}
      <img
        src={ProfileImage}
        alt="Profile Image"
        className="rounded-full w-96 h-96 object-cover mb-4 transition-transform duration-500 transform hover:scale-110"
      />
      {/* Text */}
      <div className="animate-slide-up">
        <h1 className="text-4xl font-bold text-gray-800">
          Hi, I'm Vishal Prajapati
        </h1>
      </div>
      <p className="mt-4 text-lg text-gray-600 animate-fade-in delay-150">
        Welcome to my portfolio. I'm a frontend developer based in India.
      </p>
      
    </section>
  );
};

export default Introduction;
