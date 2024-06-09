import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSignOutAlt,
  faUserCircle,
  faNewspaper,
  faCalculator,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-blue-900 p-6 flex justify-between items-center">
        {/* Home Link */}
        <Link to="/dashboard" className="text-white mx-2">
          <FontAwesomeIcon
            icon={faHome}
            style={{ color: "white", marginRight: "0.5rem" }}
          />
          Home
        </Link>

        {/* Logout Link */}

        <Link to="/profile" className="text-white mx-2">
          <FontAwesomeIcon icon={faUserCircle} className="mr-3" />
          Profile
        </Link>
        <Link to="/news" className="text-white mx-2">
          <FontAwesomeIcon icon={faNewspaper} className="mr-3" />
          News
        </Link>
        <Link to="/tracker" className="text-white mx-2">
          <FontAwesomeIcon icon={faNewspaper} className="mr-3" />
          Budget Tracker
        </Link>
        <Link to="/calculate" className="text-white mx-2">
          <FontAwesomeIcon icon={faCalculator} className="mr-3" />
          Financial Calculator
        </Link>
        <Link to="/discuss" className="text-white mx-2">
          <FontAwesomeIcon icon={faUsers} className="mr-3" />
          Community Forum
        </Link>
        <Link to="/" className="text-white mx-2">
          <FontAwesomeIcon
            icon={faSignOutAlt}
            style={{ color: "white", marginRight: "0.5rem" }}
          />
          Logout
        </Link>
      </header>
    </div>
  );
};

export default Header;
