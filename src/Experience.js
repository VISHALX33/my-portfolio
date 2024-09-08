import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-12 bg-gray-50">
      <h2 className="text-4xl font-semibold text-center mb-8 text-gray-800">Experience</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="p-6 border border-gray-200 rounded-lg shadow-lg bg-gray-50">
          <h3 className="text-2xl font-bold text-gray-800">Frontend Web Developer - DOOPER HEALTH</h3>
          <p className="text-sm text-gray-500 mt-1">Jul 2024 - Aug 2024 · 2 mos</p>
          <p className="text-sm text-gray-500">Kota, Rajasthan, India · On-site</p>
          <p className="mt-4 text-gray-700">
            Hired on the basis of doing work in React.js, Tailwind CSS, and Git, GitHub.
          </p>
          <p className="mt-2 text-gray-700">
            Skills: <span className="font-semibold">React.js</span>, <span className="font-semibold">Tailwind CSS</span>, <span className="font-semibold">Git</span>, <span className="font-semibold">GitHub</span>
          </p>
        </div>

        {/* Add more experiences as needed */}
        <div className="p-6 border border-gray-200 rounded-lg shadow-lg bg-gray-50">
          <h3 className="text-2xl font-bold text-gray-800">Intern  - Learn and Build</h3>
          <p className="text-sm text-gray-500 mt-1">Jul 2023 - Aug 2023 · 1 mos</p>
          <p className="text-sm text-gray-500">Jaipur, Rajasthan, India · Remote</p>
          <p className="mt-4 text-gray-700">
            Hired on the basis of doing work in Python.
          </p>
          <p className="mt-2 text-gray-700">
            Skills: <span className="font-semibold"> Python</span> 
            {/* <span className="font-semibold">Tailwind CSS</span>, <span className="font-semibold">Git</span>, <span className="font-semibold">GitHub</span> */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
