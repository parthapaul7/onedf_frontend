// src/DashboardPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  // Assume you have some loan options data
  const loanOptions = [
    { id: 1, type: 'Business Loan', interestRate: 8, maxAmount: 50000 },
    { id: 2, type: 'Personal Loan', interestRate: 10, maxAmount: 30000 },
    { id: 3, type: 'Home Loan', interestRate: 6, maxAmount: 100000 },
  ];

  return (
    <div className="h-[calc(100vh-4.5rem)] bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Welcome to Your Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Display Loan Options */}
        {loanOptions.map((loan) => (
          <div key={loan.id} className="bg-white rounded-md p-4 shadow-md">
            <h2 className="text-xl text-gray-500 font-semibold mb-2">{loan.type}</h2>
            <p className="text-gray-600 mb-2">Interest Rate: {loan.interestRate}%</p>
            <p className="text-gray-600">Maximum Amount: ${loan.maxAmount}</p>
          </div>
        ))}
      </div>

      {/* Link to initiate loan application */}
      <div className="mt-8">
        <Link
          to="/registration"  // You should create a route and component for applying for a loan
          className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-blue-600"
        >
          Apply for a Loan
        </Link>
      </div>
    </div>
  );
};

export default DashboardPage;
