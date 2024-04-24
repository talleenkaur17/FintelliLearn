import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/header';

const Games = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <h1 className='text-4xl text-blue-600 text-center py-8'>AdventureQuest: Explore, Learn, Win!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-8">
        <GameSection
          image="https://upload.wikimedia.org/wikipedia/commons/0/03/KAUN_BANEGA_CROREPATI_SEASON_11.jpg"
          title="Kaun Banega Crorepati (KBC) Game"
          description="Experience the thrill of the famous KBC game show from the comfort of your home. Test your knowledge, answer questions, and see if you have what it takes to win big!"
          link="/play-kbc"
        />
        <GameSection
          image="https://images-cdn.ubuy.co.in/634d19843df89815641269a7-monopoly-board-game.jpg"
          title="Monopoly Game"
          description="Dive into the world of finance with the Monopoly game. Buy, sell, and strategize your way to victory in this classic board game that teaches valuable financial lessons."
          link="/play-monopoly"
        />
      </div>
    </div>
  );
};

const GameSection = ({ image, title, description, link }) => {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-md bg-white">
      <img src={image} alt={title} className="w-full h-auto" />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-3">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <Link to={link} className="block text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
          Play Now
        </Link>
      </div>
    </div>
  );
};

export default Games;
