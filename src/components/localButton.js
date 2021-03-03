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
  /*************************************************
   * checkButtonSize()
   *
   * Checks if the buttonSize prop passed to Button
   * is contained in SIZES. If so, buttonSize
   * remains as is. If not, buttonSize defaults to
   * "btnMedium".
   *************************************************/
  const getStyle = () => {
    if (buttonStyle === "sign-up") return styles.signUpButton;
    else if (buttonStyle === "sponsor") return styles.sponsorButton;
    else return styles.defaultButton;
  };

  return (
    <Link to={to}>
      <button className={styles.signUpButton} onClick={onClick} type={type}>
        {children}
      </button>
    </Link>
  );
}
