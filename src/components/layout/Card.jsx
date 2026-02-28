import React from "react";
import { FaCode, FaLaptop, FaReact } from "react-icons/fa6";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";

export const Card = ({ image, title, description, demo, repo, stack }) => {
  const iconMap = {
    React: <FaReact className="text-cyan-400" title="React" />,
    NextJS: <SiNextdotjs className="text-white" title="NextJS" />,
    TailwindCSS: <SiTailwindcss className="text-sky-400" title="TailwindCSS" />,
    TypeScript: <SiTypescript className="text-blue-500" title="TypeScript" />,
  };

  return (
    <div className="max-w-3xl p-4 rounded-lg shadow-lg bg-transparent border border-[var(--primary-100)]  hover:scale-105 transform transition-transform duration-300">
      {image && (
        <img
          src={image}
          alt={title || "Card image"}
          className="w-full h-52 object-cover rounded-md mb-4"
        />
      )}
      <div className="flex gap-2 items-center mb-2">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        {stack.map((tech, index) => (
          <span key={index} className="text-2xl">
            {iconMap[tech]}
          </span>
        ))}
      </div>
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
