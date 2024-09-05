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
    title: "Certificate Title 2",
    description: "Brief description of the certificate. You can also add a link to view the certificate.",
    imageUrl: DooperCertificate, // Replace with actual image URL
  },
  {
    title: "Certificate Title 2",
    description: "Brief description of the certificate. You can also add a link to view the certificate.",
    imageUrl: MongoDbCertificate, // Replace with actual image URL
  },
    {
        title: "Certificate Title 1",
        description: "Brief description of the certificate. You can also add a link to view the certificate.",
        imageUrl: DataAnalyticsCertificate, // Replace with actual image URL
        
      },
      
      {
        title: "Certificate Title 2",
        description: "Brief description of the certificate. You can also add a link to view the certificate.",
        imageUrl: HtmlCertificate, // Replace with actual image URL
      },
      {
        title: "Certificate Title 3",
        description: "Brief description of the certificate. You can also add a link to view the certificate.",
        imageUrl: DsaCertificate, // Replace with actual image URL
      },
      {
        title: "Certificate Title 4",
        description: "Brief description of the certificate. You can also add a link to view the certificate.",
        imageUrl: CppCertificate, // Replace with actual image URL
      },
      {
        title: "Certificate Title 5",
        description: "Brief description of the certificate. You can also add a link to view the certificate.",
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
