import React from "react";
import "./footer.css";

// Footer from https://www.youtube.com/watch?v=g459Eia-bxw&t=8s
function Footer () {
  return (
    <div className="main-footer">
      <div className="containter">
        <div className="row">
          <ul>
            <li>Contact email: <a href="https://www.google.com">calvinhacks@placeholder.com</a></li>
            <li>CalvinHacks more info</li>
            <li><a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH Code of Conduct</a>•<a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">Privacy Policy</a></li>
          </ul>
        </div>
        <div class="rights">
            <p>© 2021 CalvinHacks | All rights reserved</p>
          </div>
      </div>
    </div>
  )
}

export default Footer