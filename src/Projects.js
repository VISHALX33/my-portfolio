
import React, { useState } from 'react';

import Cricketgems from "./Projects/Cricketgems.png";
import Realestate from "./Projects/Realestate.png";
import Parikramapaths from "./Projects/Parikramapaths.png";
import Portfolio from "./Projects/Portfolio.png";
import ToDOList from "./Projects/ToDOList.png";
import Weather from "./Projects/Weather.png";
import elitecrew from "./Projects/elitecrew.png";                   

const projects = [
  {
    title: "Elite-Crew",
    description: "Built on MongoDB for flexible data management, Express.js for robust APIs, React for dynamic frontends, and Node.js for scalable server-side operations",
    imageUrl: elitecrew,
    link: "https://elite-crew.vercel.app/"
  },

  {
    title: "Real-estate",
    description: "Designed and developed a modern real estate web application focused on seamless property browsing, intuitive navigation, and responsive design.",
    imageUrl: Realestate,
    link: "https://real-estate-mu-drab.vercel.app/"
  },
  {
    title: "Parikrama-paths",
    description: "Parikrama Paths simplifies your spiritual journeys with detailed insights and guidance. Discover divine trails and traditions effortlessly with us!",
    imageUrl: Parikramapaths,
    link: "https://parikrama-pathss.vercel.app/"

  },
  {
    title: "My-Portfolio",
    description: "A React portfolio uses components to display projects and skills interactively. It can be styled for responsiveness using libraries like Tailwind CSS.",
    imageUrl: Portfolio,
    link: "https://vishalx33.github.io/my-portfolio"

  },
  {
    title: "Cricket-gems",
    description: "Cricket Gems brings the excitement of cricket to life with key insights and highlights. Explore the essence of the game like never before!",
    imageUrl: Cricketgems,
    link: "https://cricket-gems.vercel.app/"

  },
  {
    title: "Weather App",
    description: "A React Weather App fetches real-time weather data via APIs, displaying conditions and forecasts with a responsive design.",
    imageUrl: Weather,
    link: ""

  },
  {
    title: "ToDO List",
    description: "A ToDoList in React manages tasks using useState for adding, removing, and marking items.",
    imageUrl: ToDOList,
    link: ""

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
      <h2 className="text-3xl font-semibold text-center mb-2 text-gray-800">Projects</h2>
      <h6 className="text-xl font-semibold text-center mb-8 text-gray-800">Explore the project with just a click!</h6>

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
              {selectedProject.link && (
                <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 mt-4 font-semibold hover:text-blue-800 hover:underline transition-all duration-300 ease-in-out p-2 rounded-lg"
              >
                Visit
              </a>
              
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
