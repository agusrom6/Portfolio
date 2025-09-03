import React from "react";
import { FaCode, FaLaptop } from "react-icons/fa6";

export const Card = ({ image, title, description, demo, repo }) => {
  return (
    <div className="max-w-3xl p-4 rounded-lg shadow-lg bg-transparent border border-[var(--primary-100)]  hover:scale-105 transform transition-transform duration-300">
      {image && (
        <img
          src={image}
          alt={title || "Card image"}
          className="w-full h-52 object-cover rounded-md mb-4"
        />
      )}
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-lg text-gray-300">{description}</p>
      <div className="flex justify-end gap-4">
        <a href={repo} target="_blank" rel="noopener noreferrer">
        
          <FaCode className="text-4xl mt-4" />
        </a>
        <a href={demo} target="_blank" rel="noopener noreferrer">
        
          <FaLaptop className="text-4xl text-[var(--primary-100)] mt-4" />
        </a>
      </div>
    </div>
  );
};
