import React from "react";
import "../App.css";
import HeroSection from "../components/heroSection";
import AboutSection from "../components/aboutSection";

import Mountain from "../images/mountain.png";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
    </>
  );
}
