import React from "react";
import "../App.css";
import { Button } from "./button";
import "./heroSection.css";

export default function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src={video} autoPlay loop muted /> */}
      <h1>CalvinHacks 2021</h1>
      <p>Wacky ideas</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonPath="/sign-up"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Sign Up
        </Button>
        <Button
          className="btns"
          buttonPath="/sponsor-us"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Sponsor Us
        </Button>
      </div>
    </div>
  );
}
