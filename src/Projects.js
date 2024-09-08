
// import React from 'react';

// import Joker from "./Projects/Joker.png"
// import Lottery from"./Projects/Lottery.png"
// import Portfolio from"./Projects/Portfolio.png"
// import ToDOList from"./Projects/ToDOList.png"
// import Weather from"./Projects/Weather.png"

// const projects = [
//     {
//         title: "Project Title 1",
//         description: "Brief description of your project. You can also add a link to the project.",
//         imageUrl: Weather, // Replace with actual image URL
//       },
//       {
//         title: "Project Title 2",
//         description: "Brief description of your project. You can also add a link to the project.",
//         imageUrl: ToDOList , // Replace with actual image URL
//       },
//       {
//         title: "Project Title 2",
//         description: "Brief description of your project. You can also add a link to the project.",
//         imageUrl: Portfolio , // Replace with actual image URL
//       },
//       {
//         title: "Project Title 2",
//         description: "Brief description of your project. You can also add a link to the project.",
//         imageUrl: Lottery, // Replace with actual image URL
//       },
//       {
//         title: "Project Title 2",
//         description: "Brief description of your project. You can also add a link to the project.",
//         imageUrl: Joker, // Replace with actual image URL
//       },
//       {
//         title: "Project Title 2",
//         description: "Brief description of your project. You can also add a link to the project.",
//         imageUrl: "https://via.placeholder.com/400x300", // Replace with actual image URL
//       },
//       // Add more projects as needed
//   // Your projects array
// ];

// const Projects = () => {
//   return (
//     <section id="projects" className="p-10 bg-white shadow-md rounded-lg mb-10">
//       <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Projects</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {projects.map((project, index) => (
//           <div key={index} className="border border-gray-300 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-105">
//             <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
//             <div className="p-6 bg-white">
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
//               <p className="text-gray-600">{project.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React, { useState } from 'react';

import Joker from "./Projects/Joker.png";
import Lottery from "./Projects/Lottery.png";
import Portfolio from "./Projects/Portfolio.png";
import ToDOList from "./Projects/ToDOList.png";
import Weather from "./Projects/Weather.png";

const projects = [
  {
    title: "Project Title 1",
    description: "Brief description of your project. You can also add a link to the project.",
    imageUrl: Weather,
  },
  {
    title: "Project Title 2",
    description: "Brief description of your project. You can also add a link to the project.",
    imageUrl: ToDOList,
  },
  {
    title: "Project Title 3",
    description: "Brief description of your project. You can also add a link to the project.",
    imageUrl: Portfolio,
  },
  {
    title: "Project Title 4",
    description: "Brief description of your project. You can also add a link to the project.",
    imageUrl: Lottery,
  },
  {
    title: "Project Title 5",
    description: "Brief description of your project. You can also add a link to the project.",
    imageUrl: Joker,
  },
  {
    title: "Project Title 6",
    description: "Brief description of your project. You can also add a link to the project.",
    imageUrl: "https://via.placeholder.com/400x300",
  },
  // Add more projects as needed
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openPopup = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="p-10 bg-white shadow-md rounded-lg mb-10">
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
            onClick={() => openPopup(project)}
          >
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Component */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 z-50">
          <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-4">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={closePopup}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex flex-col items-center">
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                className="w-full h-auto max-h-screen object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{selectedProject.title}</h3>
              <p className="text-gray-600 text-center">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
