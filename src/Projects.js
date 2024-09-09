

import React, { useState } from 'react';

import Joker from "./Projects/Joker.png";
import Lottery from "./Projects/Lottery.png";
import Portfolio from "./Projects/Portfolio.png";
import ToDOList from "./Projects/ToDOList.png";
import Weather from "./Projects/Weather.png";

const projects = [
  {
    title: "Weather App",
    description: "A React Weather App fetches real-time weather data via APIs, displaying conditions and forecasts with a responsive design.",
    imageUrl: Weather,
  },
  {
    title: "ToDO List",
    description: "A ToDoList in React manages tasks using useState for adding, removing, and marking items. Tasks are rendered dynamically with forms or buttons for interaction.",
    imageUrl: ToDOList,
  },
  {
    title: "My-Portfolio",
    description: "A React portfolio uses components to display projects and skills interactively. It can be styled for responsiveness using libraries like Tailwind CSS.",
    imageUrl: Portfolio,
  },
  {
    title: "Lottery-Game",
    description: "A lottery game in React using useState for random number generation and user input to check for matches. Display results dynamically based on the draw.",
    imageUrl: Lottery,
  },
  {
    title: "Joker-App",
    description: "Joker-App in React uses an API to fetch random jokes and display them on the screen. The app updates with a new joke on user interaction, keeping the UI simple and engaging.",
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
