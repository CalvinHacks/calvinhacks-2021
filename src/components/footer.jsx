import React from "react";
import "./footer.css";

// Footer from https://www.youtube.com/watch?v=g459Eia-bxw&t=8s
function Footer () {
  return (
    <div className="main-footer">
      <div className="containter">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h2>Testing1</h2>
            <ul className="lists">
              <li>Apple</li>
              <li>Paer</li>
              <li>Strawberry</li>
            </ul>
          </div>
          {/* Column2 */}
          <div className="col">
            <h2>Testing2</h2>
            <ul className="lists">
              <li>Apple</li>
              <li>Paer</li>
              <li>Strawberry</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            <h2>Testing3</h2>
            <ul className="lists">
              <li>Apple</li>
              <li>Paer</li>
              <li>Strawberry</li>
            </ul>
          </div>
        </div>
        <div class="rights">
            <p>© 2021 CalvinHacks | All rights reserved</p>
          </div>
      </div>
    </div>
  )
}

export default Footer