import React from "react";
import "../App.css";
import { Button } from "./button";
import "./heroSection.css";

export default function HeroSection() {
  return (
    <div className="hero-container">
      <h1>CalvinHacks 2021</h1>
      <p>Subtitle here</p>
      <div className="hero-btns">
        <a
          href="https://my.mlh.io/oauth/authorize?client_id=ypzioIbsUMnyoDOo0VfrnFhxPrUvwouAbSuxGnnKrZA&redirect_uri=http%3A%2F%2Fcalvinhacks.github.io%2Fcalvinhacks-2021%2F&response_type=token"
          target="_self"
          rel="noopener noreferrer"
        >
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Sign Up
          </Button>
        </a>

        {/* Put link to sponsorship packet */}
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Sponsor Us
        </Button>
      </div>
    </div>
  );
}
