import React from "react";
import car from "../../assets/car.png";
import { HeroSection } from "../../styles";

const Hero = () => {
  return (
    <HeroSection>
        <img src={car} alt="car" />
        <ul>
          <li>Fast</li>
          <li>Secure</li>
          <li>WorldWide</li>
        </ul>
        <h1>
          Freight<span>hub</span> Front<span>End</span> Challenge
        </h1>
    </HeroSection>
  );
};

export default Hero;
