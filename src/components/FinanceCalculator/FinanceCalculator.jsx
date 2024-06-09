import React from "react";
import Header from "../Header/header";
import { Link } from "react-router-dom";

const FinanceCalculator = () => {
  return (
    <div className="bg-gray-100 min-h-screen overflow-hidden">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-purple-800 text-center mb-8">
          Welcome to Finance Calculator
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Compound Interest Calculator */}
          <Link
            to="/compound-interest"
            className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <img
              src="https://blog.taxact.com/wp-content/uploads/TaxCalculators_and_TaxTools_Blog.jpeg" // Replace with actual image URL
              alt="Compound Interest Calculator"
              className="w-full h-auto"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">
                Compound Interest Calculator
              </h2>
              <p className="text-base text-gray-700">
                Calculate compound interest and see how your investments grow
                over time.
              </p>
            </div>
          </Link>

          {/* Retirement Calculator */}
          <Link
            to="/retirement-calculator"
            className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <img
              src="https://mf.nipponindiaim.com/LearnAndInvest/calculators/assets/images/inf-calc.svg" // Replace with actual image URL
              alt="Retirement Calculator"
              className="w-full h-auto"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">
                Retirement Calculator
              </h2>
              <p className="text-base text-gray-700">
                Calculate how much more you need for a relaxed retirement.
              </p>
            </div>
          </Link>

          {/* Inflation Calculator */}
          <Link
            to="/inflation"
            className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <img
              src="https://cdn-scripbox-wordpress.scripbox.com/wp-content/uploads/2021/04/inflation-calculator-vector-1.png" // Replace with actual image URL
              alt="Inflation Calculator"
              className="w-full h-auto"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">
                Inflation Calculator
              </h2>
              <p className="text-base text-gray-700">
                Track the effects of inflation with our handy inflation
                calculator.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FinanceCalculator;
