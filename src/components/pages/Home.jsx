import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { RxDoubleArrowDown } from "react-icons/rx";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

function Home() {
  return (
    <div className=" text-white h-screen flex flex-col justify-center text-center">
      <h2 className="lg:text-6xl text-3xl font-bold motion-preset-bounce -motion-translate-y-in-150">
        ¡Hola, soy Agustina Romer!
      </h2>

      <p className="text-[var(--primary-200)] text-xl mt-4 motion-preset-fade motion-duration-2000">
        <Typewriter
          words={[
            "Desarrolladora web",
            "Estudiante de Ingeniería Informática",
            "Apasionada por el Frontend",
            "Aprendiendo cada día",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </p>
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOut="fadeOutUp"
        offset={0}
        duration={10}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        animateOnce={false}
      >
      </ScrollAnimation>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <RxDoubleArrowDown className="text-4xl text-[var(--primary-100)] animate-bounce motion-preset-fade motion-duration-2000" />
      </div>
    </div>
  );
}

export default Home;
