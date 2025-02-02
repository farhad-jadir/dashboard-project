import React, { useEffect, useState } from "react";
import CardData from "../SubPages/CardData.json";
import Button from "../ReusableComponents/Button";

const NewIncidents = ({ onBack }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(CardData);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center px-6 sm:px-16 md:px-64 min-h-screen">
      
      {/* Header Section */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
        Let’s get started
      </h2>
      <p className="text-gray-500 text-center max-w-2xl mt-2 px-4 sm:px-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
      </p>

      {/* Progress Line */}
      <div className="flex items-center justify-center my-8 w-full max-w-lg px-4">
        <div className="h-1 bg-gray-300 w-full relative flex justify-between items-center rounded-lg">
          <span className="w-6 h-6 bg-gray-500 rounded-full absolute left-0"></span>
          <span className="w-6 h-6 bg-gray-400 rounded-full absolute left-1/2 transform -translate-x-1/2"></span>
          <span className="w-6 h-6 bg-gray-300 rounded-full absolute right-0"></span>
        </div>
      </div>

      {/* Incident Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4 sm:px-0">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-gray-100 p-6 rounded-lg shadow-md text-start w-full sm:max-w-xs mx-auto hover:shadow-xl hover:scale-105 transition-all duration-300 space-y-4 sm:space-y-8 md:space-y-16"
          >
            <div>
              <img src={card.image} alt={card.title} className="object-cover rounded-lg" />
            </div>
            <div>
              <h3 className="text-xl sm:text:2xl md:text-3xl font-semibold mt-4">{card.title}</h3>
              <p className="text-gray-500 mt-2 text-base sm:text:lg md:text-xl">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Get Started Button */}
      <Button className="mt-8 sm:mt-16 md:mt-24 rounded-md text-white hover:bg-orange-800">Get started</Button>
    </div>
  );
};

export default NewIncidents;
