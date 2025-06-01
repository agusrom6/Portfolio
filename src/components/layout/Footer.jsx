import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#4D0155] text-[#E0E0E0] py-6">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
      
      {/* Texto y derechos reservados */}
      <p className="text-sm">&copy; {new Date().getFullYear()} Agustina Romer. Todos los derechos reservados.</p>

      {/* Redes Sociales */}
      <div className="flex space-x-4 mt-4 md:mt-0">
        <a href="https://github.com/agusrom6" target='_blank' className="text-[var(--accent-100)] hover:text-white transition-colors">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/agustinaromer/" target='_blank' className="text-[var(--accent-100)] hover:text-white transition-colors">
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  </footer>
  )
}

export default Footer