import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <div className="bg-radial-gradient text-white h-screen flex flex-col justify-center text-center">
      <h2 className="lg:text-6xl text-3xl font-bold motion-preset-bounce -motion-translate-y-in-150">
        Hola, soy Agustina Romer!
      </h2>
      
      <p className="text-[var(--primary-300)] text-xl mt-4 motion-preset-fade motion-duration-2000">
        <Typewriter
          words={[
            "Desarrolladora web",
            "Estudiante de Ingeniería Informática",
            "Apasionada por el Frontend",
            "Aprendiendo cada día"
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </p>
    </div>
  );
}

export default Home;
