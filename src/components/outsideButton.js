import React from "react";

// Import styles
import styles from "./css/button.module.css";

export default function LocalButton({
  children,
  buttonStyle,
  type,
  onClick,
  href,
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
    <a href={href}>
      <button className={getStyle} onClick={onClick} type={type}>
        {children}
      </button>
    </a>
  );
}
