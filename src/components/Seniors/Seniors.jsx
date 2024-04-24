import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/header';

const Seniors = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="flex flex-col items-center mt-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-700">Unlock Your Financial Potential: Enter the Prosperity Playground</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl">
          <ModuleLink to="/savings" color="blue" title="Savings" tagline="Manage Your Finances" />
          <ModuleLink to="/budgeting" color="green" title="Budgeting" tagline="Plan Your Expenses" />
          <ModuleLink to="/investment" color="yellow" title="Investment" tagline="Grow Your Wealth" />
          <ModuleLink to="/retirement" color="purple" title="Retirement" tagline="Prepare for the Future" />
          <ModuleLink to="/quiz" color="pink" title="Quiz" tagline="Test Your Knowledge" />
          <ModuleLink to="/explore-more" color="gray" title="Explore More" tagline="Discover New Topics" />
        </div>
      </div>
    </div>
  );
};

const ModuleLink = ({ to, color, title, tagline }) => {
  const bgColor = `${color}-200`;
  const hoverBgColor = `${color}-300`;

  return (
    <Link to={to} className={`bg-${bgColor} p-8 md:p-10 rounded-lg shadow-md hover:bg-${hoverBgColor} transition duration-300 transform hover:scale-105 flex flex-col items-center justify-center`}>
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">{title}</h2>
      <p className="text-base text-center">{tagline}</p>
    </Link>
  );
};

export default Seniors;
