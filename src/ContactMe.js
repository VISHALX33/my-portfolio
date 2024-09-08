// import React from 'react';
// import Contectmeimage from "./assets/Contectmeimage.png"

// const ContactMe = () => {
//   return (
//     <section id="contact" className="p-10 bg-gray-50">
//       <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">Contact Me</h2>
//       <form className="max-w-4xl mx-auto">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-8">
//           {/* Form Section */}
//           <div className="w-full md:w-1/2">
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-800 mb-1">Name:</label>
//               <input
//                 type="text"
//                 name="name"
//                 required
//                 className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-800 mb-1">Email:</label>
//               <input
//                 type="email"
//                 name="email"
//                 required
//                 className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-800 mb-1">Message:</label>
//               <textarea
//                 name="message"
//                 required
//                 className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
//                 rows="4"
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
//             >
//               Send Message
//             </button>
//           </div>

//           {/* Image Section */}
//           <div className="w-full md:w-1/2 flex justify-center items-center">
//             <img
//               src={Contectmeimage}
//               alt="Placeholder"
//               className="w-full h-auto rounded-lg  "
//             />
//           </div>
//         </div>
//       </form>

      
//     </section>
//   );
// };

// export default ContactMe;


import React, { useState } from 'react';
import Contectmeimage from "./assets/Contectmeimage.png";
import emailjs from 'emailjs-com';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'your_service_id', // Replace with your service ID
        'your_template_id', // Replace with your template ID
        formData,
        'your_user_id' // Replace with your user ID from EmailJS
      )
      .then(
        (result) => {
          console.log('Email successfully sent!', result.text);
          setIsSent(true);
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.log('Failed to send email:', error.text);
          setError('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <section id="contact" className="p-10 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">Contact Me</h2>
      <form className="max-w-4xl mx-auto" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Form Section */}
          <div className="w-full md:w-1/2">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-800 mb-1">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-800 mb-1">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-800 mb-1">Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
            {isSent && <p className="text-green-500 mt-4">Message sent successfully!</p>}
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src={Contectmeimage}
              alt="Placeholder"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactMe;
