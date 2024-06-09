import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../utils/firebase";
import Header from "../Header/header";
import "tailwindcss/tailwind.css";

const Savings = () => {
  const [userId, setUserId] = useState(null);
  const [topicStatus, setTopicStatus] = useState({
    "Understanding the Importance of Savings": false,
    "How Do You Save?": false,
    "Setting Savings Goals": false,
    "Creating a Budget with Savings in Mind": false,
    "Emergency Fund": false,
    "Types of Savings Accounts": false,
    "Saving on Everyday Expenses": false,
  });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserId(user.uid);
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          if (userData.topicStatus) {
            setTopicStatus(userData.topicStatus);
            updateProgress(userData.topicStatus);
          }
        }
      }
    });
    return () => unsubscribe();
  }, []);

  const updateProgress = (status) => {
    const totalTopics = Object.keys(status).length;
    const completedTopics = Object.values(status).filter(
      (value) => value
    ).length;
    setProgress(Math.round((completedTopics / totalTopics) * 100));
  };

  const handleTopicStatusChange = async (topic) => {
    const updatedStatus = {
      ...topicStatus,
      [topic]: !topicStatus[topic],
    };
    setTopicStatus(updatedStatus);
    updateProgress(updatedStatus);

    if (userId) {
      await setDoc(
        doc(db, "users", userId),
        { topicStatus: updatedStatus },
        { merge: true }
      );
    }
  };

  const links = {
    "Understanding the Importance of Savings": {
      article: "/power-of-saving",
      video: "https://youtu.be/JqYoLQXO7j4?si=SghlmZpNNGKSW7zB",
    },
    "How Do You Save?": {
      article: "/master-saving",
      video: "https://youtu.be/NfurkrZEn3Q?si=sH_PvKUh2onnzeSp",
    },
    "Setting Savings Goals": {
      article: "/setting-savings-goals",
      video: "https://youtu.be/3q4L2mFHvWk",
    },
    "Creating a Budget with Savings in Mind": {
      article: "/creating-budget-savings",
      video: "https://youtu.be/1dz7_Ju3RO4",
    },
    "Emergency Fund": {
      article: "/emergency-fund",
      video: "https://youtu.be/TSkIMv-U7jI",
    },
    "Types of Savings Accounts": {
      article: "/types-of-savings-accounts",
      video: "https://youtu.be/CLmGZKl89iU",
    },
    "Saving on Everyday Expenses": {
      article: "/saving-everyday-expenses",
      video: "https://youtu.be/4J4y5MaC8Bo",
    },
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
      <div className="pt-6 w-3/4 mx-auto mb-8">
        <div className="relative pt-1">
          <div className="overflow-hidden h-6 mb-4 text-xs flex rounded bg-purple-200">
            <div
              style={{ width: `${progress}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500 transition-all duration-500"
            >
              {progress}%
            </div>
          </div>
        </div>
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
            {Object.keys(topicStatus).map((topic) => (
              <tr key={topic}>
                <td className="font-bold font-mono px-2 py-1 border border-gray-200">
                  {topic}
                </td>
                <td className="px-2 py-1 border border-gray-200">
                  <Link
                    to={links[topic].article}
                    className="text-blue-500 right-2"
                  >
                    <FontAwesomeIcon icon={faNewspaper} /> Article
                  </Link>
                </td>
                <td className="px-2 py-1 border border-gray-200">
                  <a
                    href={links[topic].video}
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
                    checked={topicStatus[topic]}
                    onChange={() => handleTopicStatusChange(topic)}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Savings;
