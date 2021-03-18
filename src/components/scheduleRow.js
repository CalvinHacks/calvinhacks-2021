// Standard imports
import React from "react";
import styles from "./css/scheduleRow.module.css";

export default function ScheduleRow({ time, event, location }) {
  return (
    <>
      <tbody>
        <tr>
          <td className={styles.entryText}>{time}</td>
          <td className={styles.entryText}>{event}</td>
          <td className={styles.entryText}>{location}</td>
        </tr>
      </tbody>
    </>
  );
}
