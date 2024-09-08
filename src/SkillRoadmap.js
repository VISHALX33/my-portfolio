import React from 'react';

const skills = [
  { name: 'HTML', position: '20%' },
  { name: 'CSS', position: '40%' },
  { name: 'JavaScript', position: '60%' },
  { name: 'React', position: '80%' },
  { name: 'Node.js', position: '100%' }
];

const SkillRoadmap = () => {
  return (
    <div className="relative w-24 h-80 p-4 bg-gray-50 rounded-lg shadow-md">
      <div className="absolute top-0 left-1/2 w-1 h-full bg-gray-300 transform -translate-x-1/2"></div>
      {skills.map((skill, index) => (
        <div key={index} className="relative flex flex-col items-center" style={{ top: skill.position }}>
          <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-md mb-2">
            <span className="text-xs font-semibold">{skill.name}</span>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 w-32 text-center bg-white border border-gray-300 rounded-md shadow-sm">
            <div className="p-1 text-sm font-medium text-gray-700">{skill.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillRoadmap;
