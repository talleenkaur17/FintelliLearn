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
      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto mt-8">
        <GameSection
          image="https://i2.wp.com/passionatepennypincher.com/wp-content/uploads/2023/08/fallstacks-06351.jpg"
          title="Penny Planner"
          description="Penny Planner is an engaging and strategic game that challenges players to manage their resources and plan meticulously to achieve their goals"
          link="/play-penny"
        />
        <GameSection
          image="https://res.cloudinary.com/duu6ej0qx/image/upload/v1718435234/hanggame_lvwekl.webp"
          title="Hangman Game"
          description="Dive into the world of finance with the Hangman game. Each incorrect guess brings a stick figure closer to being hanged while correct guesses reveal the letters in the word."
          link="/play-hangman"
        />
        <GameSection
          image="https://i2.wp.com/passionatepennypincher.com/wp-content/uploads/2023/08/fallstacks-06351.jpg"
          title="Financial Fortune"
          description="Stroop Test challenges your cognitive abilities by testing how quickly you can identify the color of a word, rather than the word itself."
          link="/play-stroop"
        />
      </div>
    </div>
  );
};

export default Games;
