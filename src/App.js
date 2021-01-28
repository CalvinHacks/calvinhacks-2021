import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/navBar";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import FAQ from "./pages/FAQ";
import SponsorUs from "./pages/SponsorUs";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path={["/", "/calvinhacks-2021"]} exact component={Home} />
          <Route path="/schedule" exact component={Schedule} />
          <Route path="/faq" exact component={FAQ} />
          <Route path="/sponsor-us" exact component={SponsorUs} />

          {/* Redirect /sign-up path to MLH sign-up page */}
          <Route
            path="/sign-up"
            component={() => {
              window.location.href =
                "https://my.mlh.io/oauth/authorize?client_id=ypzioIbsUMnyoDOo0VfrnFhxPrUvwouAbSuxGnnKrZA&redirect_uri=http%3A%2F%2Fcalvinhacks.github.io%2Fcalvinhacks-2021%2F&response_type=token";
              return null;
            }}
          />
        </Switch>
        {/* <Footer /> */}
        <div>
          <Footer/>
        </div>
      </Router>
    </>
  );
}
