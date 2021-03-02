// Standard imports
import React from "react";

// Import custom components
import ScheduleTable from "../components/scheduleTable";
import City from "../images/city.png";

// Import styles
import styles from "./css/scheduleSection.module.css";

export default function ScheduleSection() {
  return (
    <>
      <div className={styles.scheduleContainer}>
        <div className={styles.image}>
          <img src={City} alt="" />
        </div>
        <div className={styles.scheduleSection}>
          <h1 className={styles.title}>Itinerary</h1>
          <ScheduleTable />
        </div>
      </div>
    </>
  );
}
