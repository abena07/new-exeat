import React, { Component } from "react";
import {Link} from 'react-router-dom';

import { Section } from "./hero.style";

class Home extends Component {
  render() {
    let heading = "Welcome to the Exeat Booking App";
    let subheading =
      "To proceed booking sign up if you don't have an account.If you do log in and book now!";
    return (
      <div>
        <Section className="hero">
            <div className="container">
              <div className="heading-text">
                <h1>{heading}</h1>
                <h2>{subheading}</h2>
              </div>
              <button>
                <Link to="/signup" className="button is-large is-primary">
                  SignUp
                </Link>
              </button>
            </div>
        </Section>
      </div>
    );
  }
}

export default Home;