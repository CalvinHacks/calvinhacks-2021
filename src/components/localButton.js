import React from "react";
import { Link } from "react-router-dom";

// Import styles
import styles from "./css/button.module.css";

export default function LocalButton({
  children,
  buttonStyle,
  type,
  onClick,
  to,
}) {
  return (
    <Link to={to}>
      <button className={styles.signUpButton} onClick={onClick} type={type}>
        {children}
      </button>
    </Link>
  );
}
