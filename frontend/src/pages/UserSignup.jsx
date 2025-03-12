// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const UserSignup = () => {
//   // State to manage selected country code
//   const [selectedCountryCode, setSelectedCountryCode] = useState('+1'); // Default: United States

//   // List of country codes (you can expand this list as needed)
//   const countryCodes = [
//     { code: '+1', name: 'United States' },
//     { code: '+91', name: 'India' },
//     { code: '+44', name: 'United Kingdom' },
//     { code: '+61', name: 'Australia' },
//     { code: '+33', name: 'France' },
//     { code: '+49', name: 'Germany' },
//     { code: '+81', name: 'Japan' },
//     { code: '+86', name: 'China' },
//     // Add more country codes as needed
//   ];

//   // Handle country code selection
//   const handleCountryCodeChange = (event) => {
//     setSelectedCountryCode(event.target.value);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')` }}>
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-bold mb-6 text-center">
//           Sign Up for <span className="text-yellow-400">QuickCabs</span>
//         </h2>
//         <form>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               placeholder="Enter your full name"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
//               Phone Number
//             </label>
//             <div className="flex">
//               {/* Country Code Dropdown */}
//               <select
//                 value={selectedCountryCode}
//                 onChange={handleCountryCodeChange}
//                 className="w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 mr-2"
//               >
//                 {countryCodes.map((country, index) => (
//                   <option key={index} value={country.code}>
//                     {country.code} ({country.name})
//                   </option>
//                 ))}
//               </select>
//               {/* Phone Number Input */}
//               <input
//                 type="tel"
//                 id="phone"
//                 placeholder="Enter your phone number"
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               />
//             </div>
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter your password"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-yellow-400 text-black py-2 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300"
//           >
//             Sign Up
//           </button>
//         </form>
//         <p className="text-center mt-4">
//           Already have an account?{' '}
//           <Link to="/login" className="text-yellow-500 hover:underline">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default UserSignup;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    countryCode: "+1", // Default: United States
    password: "",
  });

  // List of country codes
  const countryCodes = [
    { code: "+1", name: "United States" },
    { code: "+91", name: "India" },
    { code: "+44", name: "United Kingdom" },
    { code: "+61", name: "Australia" },
    { code: "+33", name: "France" },
    { code: "+49", name: "Germany" },
    { code: "+81", name: "Japan" },
    { code: "+86", name: "China" },
    // Add more country codes as needed
  ];

  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
    email: "",
    phone: "",
    countryCode: "+1", // Default: United States
    password: "",
    });
  };

  // Handle form submission
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Signup Form Data:", formData);

    resetForm();
    // Add your signup logic here (e.g., API call)
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`,
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Sign Up for <span className="text-yellow-400">QuickCabs</span>
        </h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <div className="flex">
              {/* Country Code Dropdown */}
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleInputChange}
                className="w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 mr-2"
              >
                {countryCodes.map((country, index) => (
                  <option key={index} value={country.code}>
                    {country.code} ({country.name})
                  </option>
                ))}
              </select>
              {/* Phone Number Input */}
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-2 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-yellow-500 hover:underline">
            Login
          </Link>
        </p>
        <p className="text-center mt-4">
          <Link
            to="/captain-login"
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Sign Up as a Captain
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
