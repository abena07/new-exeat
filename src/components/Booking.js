import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'



function Booking() {

  // this is the variable to tell  
  // if component has mounted
  const initialMount = useRef(true);

  const [formData, setFormData] = useState(null)
  const [outcome, setOutcome]=useState([])

  
  

  const handleTextChange = (e) =>{
    e.preventDefault();
    setFormData(values => ({...values, [e.target.name]: e.target.value}))
  }

  useEffect(() => {
    if (initialMount.current) {
      // run on initial mount
      initialMount.current = false

    } else {
      // refresh

    }
  }, [formData])

  const formSubmitted = (e) => {
    e.preventDefault();
    setOutcome([formData])
    setFormData([
      ...formData,
      formData
        
      
    ])
    setFormData("")
    console.log(formData)
    axios.post("http://localhost:7000/create", formData).then((response)=>{
      console.log(response.data)
     
    })
  }
  return (
    <div>
      <form onSubmit={formSubmitted}>
        <div className="form-inner">
          <h2>Booking</h2>

          <div className="form-group">
            <label>Student Id</label>
            <input type="Id" onChange={handleTextChange} name="studentID" />
          </div>

          <div className="form-group">
            <label>Going Date</label>
            <input type="date" onChange={handleTextChange} name="goingDate" />
          </div>

          <div className="form-group">
            <label>Return Date</label>
            <input type="date" onChange={handleTextChange} name="returnDate" />
          </div>

          <div className="form-group">
            <label>Reason</label>
            <input width="50%" type="reason" onChange={handleTextChange} name="reason" />
          </div>

          <div className="form-group">
            <button type="submit">Book Now</button>
          </div>

        </div>
      </form>
      <ul>
        {formData.map((formData)=>(
      <li> 
        {formData}
      </li>

        ))}
      </ul>
    </div>
  )
}

export default Booking
