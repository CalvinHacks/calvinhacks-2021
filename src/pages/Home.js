import React from "react";

// Import custom components
import HeroSection from "../components/heroSection";
import AboutSection from "../components/aboutSection";
import SponsorSection from "../components/sponsorSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SponsorSection />
    </>
  );
}
