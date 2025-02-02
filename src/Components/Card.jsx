import React from 'react';

const Card = ({ title, location, price, image }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden p-4">
      <img src={image} alt={title} className="w-full object-cover rounded-lg" />
      <h2 className="text-lg font-semibold mt-2">{title}</h2>
      <p className="text-gray-500 text-sm">{location}</p>
      <p className="text-black font-bold mt-1">{price}</p>
    </div>
  );
};

export default Card;