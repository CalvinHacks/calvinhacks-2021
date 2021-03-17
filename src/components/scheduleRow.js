// Standard imports
import React from "react";
import styles from "./css/scheduleRow.module.css";

export default function ScheduleRow({ time, event }) {
  return (
    <>
      <tbody>
        <tr>
          <td className={styles.entryText}>{time}</td>
          <td className={styles.entryText}>{event}</td>
        </tr>
      </tbody>
    </>
  );
}
