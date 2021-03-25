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
        <col class={styles.colTime}></col>
        <col class={styles.colEvent}></col>
        <col class={styles.colLocation}></col>
        <thead>
          <tr>
            <th className={styles.headerText}>Time</th>
            <th className={styles.headerText}>Event</th>
            <th className={styles.headerText}>Location</th>
          </tr>
        </thead>
        <ScheduleRow
          time="5:00 PM"
          event="Doors Open"
          location="Commons Dining Hall / Discord"
        />
        <ScheduleRow
          time="6:00 PM"
          event="Opening Ceremony"
          location="Commons Dining Hall / Discord"
        />
        <ScheduleRow time="6:30 PM" event="Hacking Starts" location="" />
        <ScheduleRow
          time="7:00 PM"
          event="Beginner's Workshop"
          location="Google Meet"
        />
        <ScheduleRow
          time="9:00 PM"
          event="Sponsor Trivia - Tekton and SpinDance (with prizes!)"
          location="Google Meet"
        />
        <ScheduleRow
          time="9:30 PM"
          event='"A Primer on IoT Machine-to-Machine (M2M) communications using MQTT" with Professor Schuurman'
          location="Google Meet"
        />
        <ScheduleRow time="11:00 PM" event="Jackbox" location="Discord" />
      </table>

      <h2 className={styles.dateText}>Saturday, March 27</h2>
      <table class={styles.table}>
        <col class={styles.colTime}></col>
        <col class={styles.colEvent}></col>
        <col class={styles.colLocation}></col>
        <thead>
          <tr>
            <th className={styles.headerText}>Time</th>
            <th className={styles.headerText}>Event</th>
            <th className={styles.headerText}>Location</th>
          </tr>
        </thead>
        <ScheduleRow time="1:00 AM" event="Jackbox" location="Discord" />
        <ScheduleRow
          time="4:00 AM"
          event="Return to Online Hacking"
          location="Discord"
        />
        <ScheduleRow
          time=""
          event={<p className={styles.highlightText}>Break from Activities</p>}
          location=""
        />
        <ScheduleRow
          time="9:00 AM"
          event='"An Introduction to the Internet of Things" with SpinDance'
          location="Google Meet"
        />
        <ScheduleRow
          time="12:00 PM"
          event="Sponsor Trivia (with prizes!)"
          location="Google Meet"
        />
        <ScheduleRow
          time="2:30 PM"
          event='"How to Pitch Your Projects" with Calvin Start-Ups'
          location="Google Meet"
        />
        <ScheduleRow
          time="4:00 PM"
          event="Project Submissions Due"
          location={
            <a
              href="https://calvinhacks-2021.devpost.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Devpost</p>
            </a>
          }
        />
        {/* <ScheduleRow time="5:00 PM" event="Judging Begins" location="Discord" /> */}
        <ScheduleRow
          time="6:45 PM"
          event="Finalist Demos Begin"
          location="Twitch"
        />
        <ScheduleRow
          time="7:30 PM"
          event="Announce Winners"
          location="Twitch"
        />
      </table>
    </>
  );
}
