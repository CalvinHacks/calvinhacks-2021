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
            <th className={styles.headerText}>Location</th>
          </tr>
        </thead>
        <ScheduleRow time="5:00 PM" event="Doors Open" location="TBD" />
        <ScheduleRow time="6:00 PM" event="Opening Ceremony" location="TBD" />
        <ScheduleRow time="6:30 PM" event="Hacking Starts" location="TBD" />
        {/* <ScheduleRow
          time="7:00 PM"
          event="Beginner's Workshop"
          location="TBD"
        /> */}
        <ScheduleRow time="9:00 PM" event="Sponsor Trivia" location="TBD" />
        <ScheduleRow time="11:00 PM" event="Jackbox" location="Discord" />
      </table>

      <h2 className={styles.dateText}>Saturday, March 27</h2>
      <table class={styles.table}>
        <thead>
          <tr>
            <th className={styles.headerText}>Time</th>
            <th className={styles.headerText}>Event</th>
            <th className={styles.headerText}>Location</th>
          </tr>
        </thead>
        <ScheduleRow
          time="4:00 AM"
          event="Return to Online Hacking"
          location="Discord"
        />
        <ScheduleRow
          time="2:30 PM"
          event="Calvin Startups Workshop"
          location="TBD"
        />
        <ScheduleRow time="5:00 PM" event="Judging Begins" location="TBD" />
        <ScheduleRow time="6:30 PM" event="Closing Ceremony" location="TBD" />
      </table>
    </>
  );
}
