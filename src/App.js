import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/navBar";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import FAQ from "./pages/FAQ";
import AboutUs from "./pages/AboutUs";
import SignUp from "./pages/SignUp";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/schedule" exact component={Schedule} />
          {/* <Route path="/faq" exact component={FAQ} /> */}
          {/* <Route path="/about-us" exact component={AboutUs} /> */}
          <Route path="/sign-up" exact component={SignUp} />
        </Switch>
        <div>
          <Footer />
        </div>
      </Router>
    </>
  );
}
