import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

function AllBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:7000/bookings", bookings)
      .then((response) => {
        setBookings(...bookings, response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <h4>All Bookings</h4>
      {bookings.length === 0 ? (
        <></>
      ) : (
        <div className="wrapper">
          {bookings.map((booking) => {
            return (
              <div className="box">
                <h2>StudentID: {booking.studentID}</h2>
                <h3>Start date: {booking.goingDate.slice(0, 10)}</h3>
                <h3>Return date: {booking.returnDate.slice(0, 10)}</h3>
                <p>Reason: {booking.reason}</p>
              </div>
            );
          })}
        </div>
      )}
    </Container>
  );
}

export default AllBookings;

export const Container = styled.div`
  width: 100%;
  text-align: center;

  h4 {
    margin-top: 2rem;
    font-size: 25px;
  }

  .wrapper {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 2rem 0;
  }

  .box {
    width: 30%;
    border: 1px solid black;
    margin: 1rem 0;
    border-radius: 10px;
    text-align: center;
    background: #f9f9f9;
  }

  h2,
  h3 {
    padding: 1rem 0 1rem 0;
    font-size: 17px;
  }

  p {
    font-size: 16px;
    padding: 1rem 0 1rem 0;
  }
`;
