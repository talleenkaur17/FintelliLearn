import React from "react";

import Header from "../Header/header";
import GameSection from "./../GameSection";

const Games = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <h1 className="text-4xl text-blue-600 text-center py-8">
        AdventureQuest: Explore, Learn, Win!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-8">
        <GameSection
          image="https://i2.wp.com/passionatepennypincher.com/wp-content/uploads/2023/08/fallstacks-06351.jpg"
          title="Penny Planner"
          description="Penny Planner is an engaging and strategic game that challenges players to manage their resources and plan meticulously to achieve their goals"
          link="/play-penny"
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

export default Games;
