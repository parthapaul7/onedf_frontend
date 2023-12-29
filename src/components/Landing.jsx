// src/LandingPage.jsx
// src/LandingPage.jsx
import React from 'react';
import bgImg from '../assets/hero-bg-2.png'
import Navbar from '../components/Navbar'

const LandingPage = () => {
  return (
    <>
    <div className="min-h-[calc(100vh-4.5rem)]  flex items-center justify-center bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 text-white">
      <div className="max-w-4xl mx-auto p-10 rounded-md shadow-md bg-blue-50 text-gray-800 " >
        <h1 className="text-5xl font-bold mb-4">OneNDF Loan Marketplace</h1>
        <p className="text-gray-600 mb-6">
          Explore a variety of loan options tailored to meet your business needs. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, nulla dolorum. Iure ut dolorum molestias, eligendi minima explicabo nesciunt error quisquam in tenetur, at vitae?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Image or Illustration */}
          <div>
            {/* Insert an image or illustration here */}
            <img
              src={bgImg}
              alt="Loan Marketplace Illustration"
              className="w-full h-auto rounded-md"
            />
          </div>

          {/* Right Column - Features and Call to Action */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Why Choose OneNDF?</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Flexible loan options for businesses</li>
              <li>Competitive interest rates</li>
              <li>Easy application process</li>
              <li>Quick approval and disbursement</li>
            </ul>

            <a
              href="/dashboard"  // Link to your registration form
              className="inline-block bg-blue-500 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-blue-600"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default LandingPage;
