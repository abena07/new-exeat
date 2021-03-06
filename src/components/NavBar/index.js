import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./NavElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/home">
          <h1>Exeat Booking App</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/booking">Booking</NavLink>
          <NavLink to ="/bookings">All Bookings</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/login">Log In</NavBtnLink>
          <NavBtnLink to="/signup">Sign Up</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;