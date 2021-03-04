import React from "react";

// Import custom components
import HeroSection from "../components/heroSection";
import AboutSection from "../components/aboutSection";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Footer />
    </>
  );
}
