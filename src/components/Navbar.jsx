// src/components/Navbar.jsx
import React, { useState } from 'react';
import Modal from 'react-modal';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-200 p-4 flex justify-between items-start">
      <div className="flex items-center space-x-8">
      {/* Logo - Replace with your actual logo */}
      <div className="text-xl font-bold">Logo</div>

      <div className="flex space-x-4">
        <ul className={`hidden md:flex items-start space-x-4 mt-4 md:mt-0`}>
          <li>
            <a href="/" className="hover:text-gray-300" >
              Home
            </a>
          </li>
          <li>
            <a href="/dashboard" className="hover:text-gray-300" >
              Products
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300" >
              Contact
            </a>
          </li>
        </ul>
      </div>
      </div>
      <div className={`hidden md:flex items-center space-x-4  mt-4 md:mt-0`}>
          <a href="/registration" className="hover:text-gray-300" >
            Sign In
          </a>
          <a
            href="/registration"  // Link to your registration form
            className="bg-blue-500 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-blue-600"
          >
            Sign Up
          </a>
        </div>
      {/* Hamburger Menu Modal */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <svg
            className="w-6 h-6 text-gray-700 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <Modal
          isOpen={isMenuOpen}
          onRequestClose={toggleMenu}
          // overlayClassName="modal-overlay"
        >
          <div className="flex flex-col items-end p-4 gap-6">
            <a href="/" className="hover:text-gray-300" onClick={toggleMenu}>
              Home
            </a>
            <a href="/dashboard" className="hover:text-gray-300" onClick={toggleMenu}>
              Products
            </a>
            <a href="#" className="hover:text-gray-300" onClick={toggleMenu}>
              Contact
            </a>
            <a href="/registration" className="hover:text-gray-300" onClick={toggleMenu}>
              Sign In
            </a>
            <a
              href="/registration"  // Link to your registration form
              className="bg-blue-500 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-blue-600"
              onClick={toggleMenu}
            >
              Sign Up
            </a>
          </div>
        </Modal>
      </div>
    </nav>
  );
};

export default Navbar;
