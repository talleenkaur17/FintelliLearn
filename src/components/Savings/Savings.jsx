import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";

const Savings = () => {
  const [topicStatus, setTopicStatus] = useState({
    "Understanding the Importance of Savings": false,
    "How Do You Save?": false,
    "Setting Savings Goals": false,
    "Creating a Budget with Savings in Mind": false,
    "Emergency Fund": false,
    "Types of Savings Accounts": false,
    "Saving on Everyday Expenses": false,
    // Add other topics here
  });

  const handleTopicStatusChange = (topic) => {
    setTopicStatus((prevStatus) => ({
      ...prevStatus,
      [topic]: !prevStatus[topic],
    }));
  };

  return (
    <div>
      <Header />
      <h2 className="pt-8 flex justify-center font-bold text-2xl text-gray-700 transition-all duration-1000 hover:font-normal hover:text-red-500">
        SAVINGS
      </h2>
      <div className="border border-gray-300 p-4 rounded-lg">
        <p className="pt-4 text-blue-500 text-lg font-bold italic text-center">
          FinShaala's Savings Adventure: Let's Journey into Financial Wisdom!
        </p>
      </div>
      <div className="pt-6">
        <table className="w-full mx-auto border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="px-2 py-1 bg-gray-100 border border-gray-200">
                Topics
              </th>
              <th className="px-5 py-1 bg-gray-100 border border-gray-200">
                Reading References
              </th>
              <th className="px-3 py-1 bg-gray-100 border border-gray-200">
                Watch and Learn
              </th>
              <th className="px-3 py-1 bg-gray-100 border border-gray-200">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-bold font-mono px-2 py-1 border border-gray-200">
                Understanding the Importance of Savings
              </td>
              <td className="px-2 py-1 border border-gray-200">
                <Link to="/power-of-saving" className="text-blue-500 right-2">
                  <FontAwesomeIcon icon={faNewspaper} /> The Power of Saving
                </Link>
              </td>
              <td className="px-2 py-1 border border-gray-200">
                <a
                  href="https://youtu.be/JqYoLQXO7j4?si=SghlmZpNNGKSW7zB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </td>
              <td className="px-2 py-1 border border-gray-200">
                <input
                  type="checkbox"
                  checked={
                    topicStatus["Understanding the Importance of Savings"]
                  }
                  onChange={() =>
                    handleTopicStatusChange(
                      "Understanding the Importance of Savings"
                    )
                  }
                />
              </td>
            </tr>
            <tr>
              <td className="font-bold font-mono px-2 py-1 border border-gray-200">
                How Do You Save?
              </td>
              <td className="px-2 py-1 border border-gray-200">
                <Link to="/master-saving" className="text-blue-500 right-2">
                  <FontAwesomeIcon icon={faNewspaper} /> Mastering the Art of
                  Saving
                </Link>
              </td>
              <td className="px-2 py-1 border border-gray-200">
                <a
                  href="https://youtu.be/NfurkrZEn3Q?si=sH_PvKUh2onnzeSp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </td>
              <td className="px-2 py-1 border border-gray-200">
                <input
                  type="checkbox"
                  checked={topicStatus["How Do You Save?"]}
                  onChange={() => handleTopicStatusChange("How Do You Save?")}
                />
              </td>
            </tr>
            {/* Add similar rows for other topics */}
            {/* Repeat the same structure for other topics */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Savings;
