import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/navBar";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import FAQ from "./pages/FAQ";
import Footer from "./components/footer";
import SubmitForm from "./components/submitForm";

export default function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path={["/", "/calvinhacks-2021"]} exact component={Home} />
          <Route path="/schedule" exact component={Schedule} />
          <Route path="/faq" exact component={FAQ} />
        </Switch>
        <div>
          <SubmitForm />
        </div>
        <div>
          <Footer />
        </div>
      </Router>
    </>
  );
}
