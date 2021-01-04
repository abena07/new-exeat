import React, { Component } from "react";
//  import './Home.css'

class Home extends Component {
  render() {
    let heading = "Welcome to the Exeat Booking App";
    let subheading =
      "To proceed booking sign up if you don't have an account.If you do log in and book now!";
    return (
      <div>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">{heading}</h1>
              <div className="is-two-thirds column is-paddingless">
                <h2 className="subtitle is-4">{subheading}</h2>
              </div>
              {/* <a className="button is-large is-primary" >Learn more</a> */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
