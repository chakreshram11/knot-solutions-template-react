import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, title, description, link }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center max-w-xs">
      <div className="flex justify-center mb-4">
        <img src={image} alt={title} className="w-20 h-20" />
      </div>
      <h3 className="text-xl font-bold text-red-600 mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <Link
        to={link}
        className="text-blue-500 flex items-center justify-center space-x-2"
      >
        <span>Learn more</span>
        <span>&rarr;</span>
    </Link>
    </div>
  );
};

export default Card;