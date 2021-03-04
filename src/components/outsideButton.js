import React from "react";

// Import styles
import styles from "./css/button.module.css";

export default function LocalButton({ children, buttonStyle, onClick, href }) {
  return (
    <a href={href}>
      <button className={styles.sponsorButton} onClick={onClick}>
        {children}
      </button>
    </a>
  );
}
