import React from "react";

// Import custom components
import ScheduleRow from "./scheduleRow";

// Import styles
import styles from "./css/scheduleTable.module.css";

export default function ScheduleTable() {
  return (
    <>
      <h2 className={styles.dateText}>Friday, March 26</h2>
      <table class={styles.table}>
        <thead>
          <tr>
            <th className={styles.headerText}>Time</th>
            <th className={styles.headerText}>Event</th>
          </tr>
        </thead>
        <ScheduleRow time="6:00 PM" event="Opening Ceremony" />
      </table>

      <h2 className={styles.dateText}>Saturday, March 27</h2>
      <table class={styles.table}>
        <thead>
          <tr>
            <th className={styles.headerText}>Time</th>
            <th className={styles.headerText}>Event</th>
          </tr>
        </thead>
        <ScheduleRow time="5:00 PM" event="Closing Ceremony" />
      </table>
    </>
  );
}
