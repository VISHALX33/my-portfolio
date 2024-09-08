import React from 'react';
import CppCertificate from "./Certificate/CppCertificate.jpeg"
import DataAnalyticsCertificate from"./Certificate/DataAnalyticsCertificate.png"
import DooperCertificate from"./Certificate/DooperCertificate.jpeg"
import DsaCertificate from"./Certificate/DsaCertificate.jpeg"
import HtmlCertificate from "./Certificate/HtmlCertificate.png"
import MongoDbCertificate from"./Certificate/MongoDbCertificate.png"
import PythonCertificate from"./Certificate/PythonCertificate.jpeg"

const certificates = [
  {
    title: "Dooper",
    description: "completed an internship at Dooper as a Frontend Developer, contributing to the development of user interfaces and enhancing web applications.",
    imageUrl: DooperCertificate, // Replace with actual image URL
  },
  {
    title: "MongoDb",
    description: " successfully completed an introductory course in MongoDB, gaining foundational knowledge in database design, querying, and data management with MongoDB.",
    imageUrl: MongoDbCertificate, // Replace with actual image URL
  },
    {
        title: "DataAnalytics",
        description: "successfully completed a Data Analytics program, demonstrating expertise in analyzing data, generating insights, and utilizing analytical tools for decision-making.",
        imageUrl: DataAnalyticsCertificate, // Replace with actual image URL
        
      },
      
      {
        title: "Html",
        description: "successfully completed the HTML . This certification highlights expertise in HTML5 standards and best practices.",
        imageUrl: HtmlCertificate, // Replace with actual image URL
      },
      {
        title: "DSA with JAVA",
        description: "successfully completed a certification in Data Structures and Algorithms with Java, demonstrating proficiency in solving complex problems and optimizing code performance.",
        imageUrl: DsaCertificate, // Replace with actual image URL
      },
      {
        title: "Cpp",
        description: "successfully completed a C++ certification, demonstrating proficiency in object-oriented programming and advanced C++ techniques.",
        imageUrl: CppCertificate, // Replace with actual image URL
      },
      {
        title: "Python",
        description: "successfully completed an internship program where they acquired practical skills in Python programming, including developing and debugging Python applications.",
        imageUrl: PythonCertificate, // Replace with actual image URL
      },
      // Add more certificates as needed
  // Your certificates array
];

const Certificates = () => {
  return (
    <section id="certificates" className="p-10 bg-white shadow-md rounded-lg mb-10">
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Certificates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {certificates.map((certificate, index) => (
          <div key={index} className="border border-gray-300 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-105">
            <img src={certificate.imageUrl} alt={certificate.title} className="w-full h-48 object-cover" />
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{certificate.title}</h3>
              <p className="text-gray-600">{certificate.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
