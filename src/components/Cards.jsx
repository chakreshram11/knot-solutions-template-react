import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, title, description, link }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-9 text-center max-w-md lg:max-w-lg">
      <div className="flex justify-center mb-6">
        <img src={image} alt={title} className="w-32 h-32" />
      </div>
      <h3 className="text-3xl font-bold text-red-600 mb-4">{title}</h3>
      <p className="text-lg text-gray-700 mb-6">{description}</p>
      <Link
        to={link}
        className="text-blue-500 flex items-center justify-center space-x-2 text-lg"
      >
        <span>Learn more</span>
        <span>&rarr;</span>
      </Link>
    </div>
  );
};

export default Card;
