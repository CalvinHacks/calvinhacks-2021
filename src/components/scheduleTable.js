import React from "react";

// Import custom components
// import { Button } from "../components/button";
import ScheduleRow from "./scheduleRow";

// Import styles
import styles from "./css/scheduleTable.module.css";

export default function ScheduleTable() {
  return (
    <>
      {/* <p>Click Button below to get notifications about the following events.</p>
      <Button
        className="btns"
        buttonStyle="btn--outline"
        buttonSize="btn--large"
      >
        Stay Tuned
      </Button> */}
      <h2>Friday, March 26</h2>
      <table class={styles.schedule}>
        <thead>
          <tr>
            <th>Time</th>
            <th>Event</th>
          </tr>
        </thead>
        <ScheduleRow time="6:00 PM" event="Opening Ceremony" />
      </table>

      <h2>Saturday, March 27</h2>
      <table class={styles.schedule}>
        <thead>
          <tr>
            <th>Time</th>
            <th>Event</th>
          </tr>
        </thead>
        <ScheduleRow time="5:00 PM" event="Closing Ceremony" />
      </table>
    </>
  );
}
