

// import React, { useState } from 'react';
// import ProfileImage from './assets/Profileimage.jpg'; // Import the image
// import Popup from './Popup'; // Import the Popup component

// const Navbar = () => {
//   const [isPopupOpen, setPopupOpen] = useState(false);

//   return (
//     <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 z-50 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-lg font-bold">
//           <a href="#introduction" className="hover:text-blue-400 transition-colors duration-300">Vishal Prajapati</a>
//         </div>
//         <div className="space-x-6 hidden md:flex">
//           <a href="#about" className="hover:text-blue-400 transition-colors duration-300">About Me</a>
//           <a href="#skills" className="hover:text-blue-400 transition-colors duration-300">Skills</a>
//           <a href="#experience" className="hover:text-blue-400 transition-colors duration-300">Experience</a>
//           <a href="#projects" className="hover:text-blue-400 transition-colors duration-300">Projects</a>
//           <a href="#certificates" className="hover:text-blue-400 transition-colors duration-300">Certificates</a>
//           <a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Contact Me</a>
//         </div>
//         <img
//           src={ProfileImage}
//           alt="Profile"
//           className="w-12 h-12 rounded-full cursor-pointer border-2 border-blue-500 transition-transform duration-300 transform hover:scale-110"
//           onClick={() => setPopupOpen(true)}
//         />
//       </div>
//       {isPopupOpen && <Popup onClose={() => setPopupOpen(false)} />}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import ProfileImage from './assets/Profileimage.jpg'; // Import the image
import Popup from './Popup'; // Import the Popup component
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Icons for the menu

const Navbar = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false); // State for sidebar

  return (
    <>
      <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-lg">
            <a href="#introduction" className="hover:text-blue-400 transition-colors duration-300">
              Vishal Prajapati
            </a>
          </div>

          {/* Desktop Links */}
          <div className="space-x-6 hidden md:flex">
            <a href="#about" className="hover:text-blue-400 transition-colors duration-300">About Me</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors duration-300">Skills</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors duration-300">Experience</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors duration-300">Projects</a>
            <a href="#certificates" className="hover:text-blue-400 transition-colors duration-300">Certificates</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Contact Me</a>
          
          <img
              src={ProfileImage}
              alt="Profile"
              className="w-12 h-12 rounded-full ml-4 cursor-pointer border-2 border-blue-500 transition-transform duration-300 transform hover:scale-110"
              onClick={() => setPopupOpen(true)}
            />
            </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setSidebarOpen(!isSidebarOpen)}>
              {isSidebarOpen ? (
                <AiOutlineClose className="text-2xl" />
              ) : (
                <AiOutlineMenu className="text-2xl" />
              )}
            </button>
            <img
              src={ProfileImage}
              alt="Profile"
              className="w-12 h-12 rounded-full ml-4 cursor-pointer border-2 border-blue-500 transition-transform duration-300 transform hover:scale-110"
              onClick={() => setPopupOpen(true)}
            />
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white w-64 z-40 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="p-4 mt-20">
          <a href="#about" className="block py-2 hover:text-blue-400 transition-colors duration-300" onClick={() => setSidebarOpen(false)}>About Me</a>
          <a href="#skills" className="block py-2 hover:text-blue-400 transition-colors duration-300" onClick={() => setSidebarOpen(false)}>Skills</a>
          <a href="#experience" className="block py-2 hover:text-blue-400 transition-colors duration-300" onClick={() => setSidebarOpen(false)}>Experience</a>
          <a href="#projects" className="block py-2 hover:text-blue-400 transition-colors duration-300" onClick={() => setSidebarOpen(false)}>Projects</a>
          <a href="#certificates" className="block py-2 hover:text-blue-400 transition-colors duration-300" onClick={() => setSidebarOpen(false)}>Certificates</a>
          <a href="#contact" className="block py-2 hover:text-blue-400 transition-colors duration-300" onClick={() => setSidebarOpen(false)}>Contact Me</a>
        </div>
      </div>

      {/* Profile Popup */}
      {isPopupOpen && <Popup onClose={() => setPopupOpen(false)} />}
    </>
  );
};

export default Navbar;
