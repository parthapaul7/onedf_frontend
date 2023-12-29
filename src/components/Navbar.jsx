// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-200 p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        {/* Logo - Replace with your actual logo */}
        <div className="text-xl font-bold">Logo</div>

        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="/dashboard" className="hover:text-gray-300">Products</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </li>
        </ul>
      </div>

      {/* Sign In and Sign Up Buttons */}
      <div className="flex items-center space-x-4">
        <a href="/registration" className="hover:text-gray-300">Sign In</a>
        <a
          href="/registration"  // Link to your registration form
          className="bg-blue-500 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-blue-600"
        >
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
