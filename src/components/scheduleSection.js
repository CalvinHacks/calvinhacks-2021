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
        <div className={styles.cityContainer}>
          <img className={styles.city} src={City} alt="" />
        </div>
        <div className={styles.scheduleSection}>
          <h1 className={styles.itineraryText}>Itinerary</h1>
          <h2 className={styles.noticeText}>Note: all times listed are in Eastern Standard Time (EST)</h2>
          <ScheduleTable />
          <p className={styles.comingSoon}>Schedule subject to change before event, check back on the day of!</p>
        </div>
      </div>
    </>
  );
}
