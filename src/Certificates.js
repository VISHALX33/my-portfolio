// import React from 'react';
// import CppCertificate from "./Certificate/CppCertificate.jpeg"
// import DataAnalyticsCertificate from"./Certificate/DataAnalyticsCertificate.png"
// import DooperCertificate from"./Certificate/DooperCertificate.jpeg"
// import DsaCertificate from"./Certificate/DsaCertificate.jpeg"
// import HtmlCertificate from "./Certificate/HtmlCertificate.png"
// import MongoDbCertificate from"./Certificate/MongoDbCertificate.png"
// import PythonCertificate from"./Certificate/PythonCertificate.jpeg"

// const certificates = [
//   {
//     title: "Dooper",
//     description: "completed an internship at Dooper as a Frontend Developer, contributing to the development of user interfaces and enhancing web applications.",
//     imageUrl: DooperCertificate, // Replace with actual image URL
//   },
//   {
//     title: "MongoDb",
//     description: " successfully completed an introductory course in MongoDB, gaining foundational knowledge in database design, querying, and data management with MongoDB.",
//     imageUrl: MongoDbCertificate, // Replace with actual image URL
//   },
//     {
//         title: "DataAnalytics",
//         description: "successfully completed a Data Analytics program, demonstrating expertise in analyzing data, generating insights, and utilizing analytical tools for decision-making.",
//         imageUrl: DataAnalyticsCertificate, // Replace with actual image URL
        
//       },
      
//       {
//         title: "Html",
//         description: "successfully completed the HTML . This certification highlights expertise in HTML5 standards and best practices.",
//         imageUrl: HtmlCertificate, // Replace with actual image URL
//       },
//       {
//         title: "DSA with JAVA",
//         description: "successfully completed a certification in Data Structures and Algorithms with Java, demonstrating proficiency in solving complex problems and optimizing code performance.",
//         imageUrl: DsaCertificate, // Replace with actual image URL
//       },
//       {
//         title: "Cpp",
//         description: "successfully completed a C++ certification, demonstrating proficiency in object-oriented programming and advanced C++ techniques.",
//         imageUrl: CppCertificate, // Replace with actual image URL
//       },
//       {
//         title: "Python",
//         description: "successfully completed an internship program where they acquired practical skills in Python programming, including developing and debugging Python applications.",
//         imageUrl: PythonCertificate, // Replace with actual image URL
//       },
//       // Add more certificates as needed
//   // Your certificates array
// ];

// const Certificates = () => {
//   return (
//     <section id="certificates" className="p-10 bg-white shadow-md rounded-lg mb-10">
//       <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Certificates</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {certificates.map((certificate, index) => (
//           <div key={index} className="border border-gray-300 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-105">
//             <img src={certificate.imageUrl} alt={certificate.title} className="w-full h-48 object-cover" />
//             <div className="p-6 bg-white">
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">{certificate.title}</h3>
//               <p className="text-gray-600">{certificate.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Certificates;



import React, { useState } from 'react';
import CppCertificate from "./Certificate/CppCertificate.jpeg";
import DataAnalyticsCertificate from "./Certificate/DataAnalyticsCertificate.png";
import DooperCertificate from "./Certificate/DooperCertificat.png";
import DsaCertificate from "./Certificate/DsaCertificate.jpeg";
import HtmlCertificate from "./Certificate/HtmlCertificate.png";
import MongoDbCertificate from "./Certificate/MongoDbCertificate.png";
import PythonCertificate from "./Certificate/PythonCertificate.png";

const certificates = [
  {
    title: "Dooper",
    description: "Completed an internship at Dooper as a Frontend Developer, contributing to the development of user interfaces and enhancing web applications.",
    imageUrl: DooperCertificate,
  },
  {
    title: "MongoDb",
    description: "Successfully completed an introductory course in MongoDB, gaining foundational knowledge in database design, querying, and data management with MongoDB.",
    imageUrl: MongoDbCertificate,
  },
  {
    title: "Data Analytics",
    description: "Successfully completed a Data Analytics program, demonstrating expertise in analyzing data, generating insights, and utilizing analytical tools for decision-making.",
    imageUrl: DataAnalyticsCertificate,
  },
  {
    title: "HTML",
    description: "Successfully completed the HTML certification. This certification highlights expertise in HTML5 standards and best practices.",
    imageUrl: HtmlCertificate,
  },
  {
    title: "DSA with Java",
    description: "Successfully completed a certification in Data Structures and Algorithms with Java, demonstrating proficiency in solving complex problems and optimizing code performance.",
    imageUrl: DsaCertificate,
  },
  {
    title: "C++",
    description: "Successfully completed a C++ certification, demonstrating proficiency in object-oriented programming and advanced C++ techniques.",
    imageUrl: CppCertificate,
  },
  {
    title: "Python",
    description: "Successfully completed an internship program where they acquired practical skills in Python programming, including developing and debugging Python applications.",
    imageUrl: PythonCertificate,
  },
  // Add more certificates as needed
];

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const openPopup = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closePopup = () => {
    setSelectedCertificate(null);
  };

  return (
    <section id="certificates" className="p-10 bg-white shadow-md rounded-lg mb-10">
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Certificates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
            onClick={() => openPopup(certificate)}
          >
            <img src={certificate.imageUrl} alt={certificate.title} className="w-full h-48 object-cover" />
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{certificate.title}</h3>
              <p className="text-gray-600">{certificate.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Component */}
      {selectedCertificate && (
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
                src={selectedCertificate.imageUrl}
                alt={selectedCertificate.title}
                className="w-full h-auto max-h-screen object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{selectedCertificate.title}</h3>
              <p className="text-gray-600 text-center">{selectedCertificate.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;

