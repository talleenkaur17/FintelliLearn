import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNewspaper, faUsers, faSignOutAlt, faCalculator } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-blue-900 text-white">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">FintelliLearn</h2>
          <ul className="space-y-4">
            <li>
              <Link to="/dashboard" className="block py-2 px-4 rounded hover:bg-gray-700"><FontAwesomeIcon icon={faHome} style={{ color: 'white', marginRight: '0.5rem' }} />Home</Link>
            </li>
            <li>
              <Link to="/discuss" className="block py-2 px-4 rounded hover:bg-gray-700">
                <FontAwesomeIcon icon={faUsers} style={{ marginRight: '0.5rem', color: 'white' }} /> {/* Icon */}
                Community Forum
              </Link>
            </li>
            <li>
              <Link to="/news" className="block py-2 px-4 rounded hover:bg-gray-700" ><FontAwesomeIcon icon={faNewspaper} style={{ color: 'white', marginRight: '0.5rem' }} />News</Link>
            </li>
            <li>
              <Link to="/calculate" className="block py-2 px-4 rounded hover:bg-gray-700" ><FontAwesomeIcon icon={faCalculator} style={{ color: 'white', marginRight: '0.5rem' }} />Financial Calculator</Link>
            </li>
            <li>
              <Link to="/" className="block py-2 px-4 rounded hover:bg-gray-700" ><FontAwesomeIcon icon={faSignOutAlt} style={{ color: 'white', marginRight: '0.5rem' }} />Logout</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-3/4 bg-gray-200 p-4">
        <h2 className="text-2xl text-blue-700 text-center p-10 mx-4 font-bold">Empower Your Learning Journey with FintelliLearn</h2>
        <div className="flex justify-between mt-8">
          <div className="w-5/12 bg-white p-8 rounded-lg shadow-md cursor-pointer hover:bg-blue-500 hover:text-white">
            <Link to="/juniors">
              <h3 className="text-2xl font-semibold mb-4">Junior Scholars (Age 12-18)</h3>
              <p>Explore Financial Literacy Adventures for Young Minds!</p>
            </Link>
          </div>
          <div className="w-1/12"></div> {/* Spacer */}
          <div className="w-5/12 bg-white p-8 rounded-lg shadow-md cursor-pointer hover:bg-blue-500 hover:text-white">
            <Link to="/seniors">
              <h3 className="text-2xl font-semibold mb-4">Financial Mastery Zone (Age 19+)</h3>
              <p >Discover advanced learning opportunities in Finance!</p>
            </Link>
          </div>
        </div>
        {/* Your dashboard content */}
      </div>
    </div>
  );
}

export default Dashboard;
