import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import ProductList from "./components/ProductList";
import About from "./components/About";
import SignIn from "./components/SignIn";
import Details from "./components/Details";
import Cart from "./components/Cart";
import LandingPage from "./components/Home";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/product" component={ProductList} />
        <Route path="/about" component={About} />
        <Route path="/signin" component={SignIn} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
