import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome ,faSignOutAlt} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-blue-900 p-6 flex justify-between items-center">
        {/* Home Link */}
        <Link to="/dashboard" className="text-white mx-2"><FontAwesomeIcon icon={faHome} style={{ color: 'white',marginRight: '0.5rem' }} />Home</Link>
        
        {/* Logout Link */}
        <Link to="/" className="text-white mx-2"><FontAwesomeIcon icon={faSignOutAlt} style={{ color: 'white',marginRight: '0.5rem' }}/>Logout</Link>
      </header>

     
    </div>
  );
}

export default Header;
