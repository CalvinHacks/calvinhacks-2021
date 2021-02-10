// Standard imports
import React from "react";

export default function ScheduleRow({ time, event }) {
  return (
    <>
      <tbody>
        <tr>
          <td>{time}</td>
          <td>{event}</td>
        </tr>
      </tbody>
    </>
  );
}
