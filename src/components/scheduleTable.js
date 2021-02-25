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
      <table class={styles.schedule}>
        <thead>
          <tr>
            <th>Time</th>
            <th>Event</th>
          </tr>
        </thead>
        <ScheduleRow time="5:00 PM" event="Opening Ceremony" />
        <ScheduleRow time="6:00 PM" event="Pep Talk by Brad" />
        <ScheduleRow time="6:30 PM" event="Din Din" />
        <ScheduleRow time="8:00 PM" event="Raspberry Pi Talk" />
        <ScheduleRow time="9:00 PM" event="Flash Mob" />
        <ScheduleRow time="10:00 PM" event="Calvin Startups" />
        <ScheduleRow time="12:00 AM" event="Party is Over, Go Back to Dorms" />
      </table>
    </>
  );
}
