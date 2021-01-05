



import React, { useEffect, useState } from "react";
import axios from 'axios'
function AllBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:7000/bookings", bookings)
    .then((response) => {
        setBookings(...bookings, response.data)
    })
    .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      Welcome
      {
      bookings.length === 0
      ? <></>
      : 
      <> 
        {bookings.map((booking) => (
        <div>
          <h1>{booking.goingDate}</h1>
          <h1>{booking.returnDate}</h1>
          <h1>{booking.studentsID}</h1>
          <h1>{booking.reason}</h1>
        </div>
        ))}
      </>
      }
    </div>
  );
}

export default AllBookings;
