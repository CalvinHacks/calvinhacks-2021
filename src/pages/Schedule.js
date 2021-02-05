import React from "react";
import "../App.css";
import ScheduleSection from "../components/scheduleSection";
import { Button } from "../components/button";
import City from "../images/city.png";

export default function Schedule() {
  return (
    <>
      <div className="schedule-container">
        <img src={City} alt="city" />
      </div>
      <ScheduleSection />
    </>
  );
}
