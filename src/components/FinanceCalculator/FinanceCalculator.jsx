import React from 'react';
import Header from '../Header/header';
import { Link } from 'react-router-dom';

const FinanceCalculator = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center mt-10 space-y-8">
        {/* Compound Interest Calculator */}
        <Link to="/compound-interest" className="flex-1 bg-gray-100 p-6 rounded-lg shadow-md text-center transition duration-300 hover:bg-gray-200">
          <div>
            <h2 className="text-xl font-semibold mb-4">Compound Interest Calculator</h2>
            <p>Calculate compound interest and see how your investments grow over time.</p>
          </div>
        </Link>

        {/* Investment Time Calculator */}
        <Link to="/investment" className="flex-1 bg-gray-100 p-6 rounded-lg shadow-md text-center transition duration-300 hover:bg-gray-200">
          <div>
            <h2 className="text-xl font-semibold mb-4">Investment Time Calculator</h2>
            <p>Find out how long it will take to reach your investment goals with regular contributions.</p>
          </div>
        </Link>

        {/* Budget Planner */}
        <Link to="/budget-planner" className="flex-1 bg-gray-100 p-6 rounded-lg shadow-md text-center transition duration-300 hover:bg-gray-200">
          <div>
            <h2 className="text-xl font-semibold mb-4">Budget Planner</h2>
            <p>Create a budget plan to manage your finances efficiently and achieve your financial goals.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FinanceCalculator;
