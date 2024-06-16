import React, { useState } from "react";

const MentorVideo = ({ videoUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden md:w-1/2">
      <iframe
        src={videoUrl}
        allow="autoplay"
        title="Mentor Video"
        className="w-full h-80 md:h-auto"
      ></iframe>
    </div>
  );
};

const MentorDescription = ({
  name,
  about,
  workExperience,
  menteesCount,
  expertise,
  mentorshipDetails,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:w-1/2">
      <h2 className="text-2xl font-bold mb-4">{name}</h2>
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="text-blue-500 mb-4 cursor-pointer"
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails && (
        <div className="text-gray-700">
          <p className="mb-4">{about}</p>
          <p className="mb-4">{workExperience}</p>
          <p className="mb-4">{menteesCount}</p>
          <p className="mb-4">{expertise}</p>
          <p className="mb-4">{mentorshipDetails}</p>
          <div className="mt-4">
            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
              BOOK 1:1 Mentorship (30 mins)
              <br />
              Rs. 1500
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Livementoring = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-12">Live Mentors</h1>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="flex flex-col md:flex-row w-full max-w-4xl">
          <MentorVideo videoUrl="https://drive.google.com/file/d/1r5LuoGiK2fj-Zem3e0MxA8gW8vxvp_rC/preview" />
          <MentorDescription
            name="Mayank Gupta"
            about="I am a Chartered Accountant with extensive experience and qualifications in finance. I've helped many individuals and businesses achieve their financial goals, and I'm excited to be your mentor. Let's make finance easy together."
            workExperience="Worked in KPMG from 2019-2022. Currently at MAX Corporation."
            menteesCount="Mentored 50+ people"
            expertise="Expertise in accounting and financial reporting, taxation, risk management, business strategy and management, career development, and personal finance."
            mentorshipDetails="I offer personalized 1:1 mentorship sessions for 30 minutes at Rs. 1500. Click 'BOOK NOW!' to schedule a session."
          />
        </div>
        {/* Add more <MentorCard /> components as needed */}
      </div>
    </div>
  );
};

export default Livementoring;
