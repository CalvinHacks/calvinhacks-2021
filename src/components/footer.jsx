// Standard imports
import React from "react";

// Import styles
import styles from "./css/footer.module.css";

// Footer from https://www.youtube.com/watch?v=g459Eia-bxw&t=8s
function Footer () {
  return (
    <div className={styles.mainFooter}>
      <div className={styles.container}>
        <div className={styles.row}>
          {/* Column1 */}
          <div className={styles.col}>
            <h2>Testing1</h2>
            <ul className={styles.lists}>
              <li>Apple</li>
              <li>Paer</li>
              <li>Strawberry</li>
            </ul>
          </div>
          {/* Column2 */}
          <div className={styles.col}>
            <h2>Testing2</h2>
            <ul className={styles.lists}>
              <li>Apple</li>
              <li>Paer</li>
              <li>Strawberry</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className={styles.col}>
            <h2>Testing3</h2>
            <ul className={styles.lists}>
              <li>Apple</li>
              <li>Paer</li>
              <li>Strawberry</li>
            </ul>
          </div>
        </div>
        <div class={styles.rights}>
            <p>© 2021 CalvinHacks | All rights reserved</p>
          </div>
      </div>
    </div>
  )
}

export default Footer