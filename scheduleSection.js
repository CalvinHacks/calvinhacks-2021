import React from "react";
import "../App.css";
import "./schedule.css";
import { Button } from "../components/button";

export default function ScheduleSection() {
  return (
    <>
    <p>Click Button below to get notifications about the following events.</p>
    <Button
      className="btns"
      buttonStyle="btn--outline"
      buttonSize="btn--large"
    >
      Stay Tuned
    </Button>
      <table class="schedule">
        <thead>
          <tr>
              <th>Event</th>
              <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5:00 pm</td>
            <td>Opening Ceremony</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
