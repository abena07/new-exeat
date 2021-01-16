import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AllBookings from "./components/AllBookings";
import Booking from "./components/Booking";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/booking" component={Booking} />
        <Route path="/bookings" component={AllBookings} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
