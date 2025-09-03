import React, { useState } from "react";
import skills from "../../data/skills.json";
import { SiGithub, SiLinkedin, SiDiscord } from "react-icons/si";
import ScrollAnimation from "react-animate-on-scroll";
import { FaCopy } from "react-icons/fa";


function About() {
  return (
    <div className="lg:h-screen h-auto p-6 text-[var(--text-100)] flex flex-col md:flex-row gap-8 overflow-auto items-center justify-center">
      {/* Sección de Skills */}
      <ScrollAnimation animateIn="fadeInLeftBig">
        <div className="hover:shadow-[1px_1px_97px_93px_rgba(109,32,209,0.24)] transition-transform duration-500 hover:scale-110 w-full md:w-[500px] h-auto md:h-[600px] flex flex-col justify-between p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-4 text-center">Skills</h2>
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">{category}</h3>
              <ul className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {skillList.map((skill) => (
                  <li key={skill.id} className="relative group">
                    <img
                      src={`/icons/${skill.img}`}
                      alt={skill.name}
                      className="w-12 h-12 cursor-pointer transition-transform transform group-hover:scale-110"
                    />
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-all bg-[var(--bg-100)] text-[var(--text-200)] text-sm p-2 rounded-md shadow-lg">
                      <strong>{skill.name}</strong> <br />
                      <span>{skill.level}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ScrollAnimation>

      {/* Sección "Sobre Mí" */}
      <ScrollAnimation animateIn="fadeInRightBig">
        <div className="hover:shadow-[1px_1px_97px_93px_rgba(109,32,209,0.24)] transition-transform duration-500 hover:scale-110 w-full md:w-[500px] h-auto md:h-[600px] flex flex-col justify-between p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Sobre mí <span className="text-[var(--accent-100)]">⦮ ⦯</span>
          </h2>
          <p className="text-lg sm:text-2xl font-semibold">
            ¡Hola! 👋 <br />
            Soy estudiante de Ingeniería Informática de Buenos Aires, Argentina,
            con una gran pasión por el desarrollo frontend. Me encanta crear
            interfaces modernas, funcionales y accesibles. <br /><span className="text-[var(--accent-100)]">Mi enfoque
            está en escribir código limpio, optimizado y escalable, siempre
            buscando mejorar la experiencia del usuario. </span> Actualmente, sigo
            aprendiendo y explorando nuevas herramientas para llevar mis
            proyectos al siguiente nivel.
          </p>

          {/* Íconos de redes */}
          <div className="mt-4 flex flex-col items-center gap-3">
            <div className="flex gap-4 text-5xl">
              <a
                href="https://github.com/agusrom6"
                target="_blank"
                className="text-[var(--text-200)] hover:text-[var(--text-100)] transition-colors"
              >
                <SiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/agustinaromer/"
                target="_blank"
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                <SiLinkedin />
              </a>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default About;
