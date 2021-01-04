import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

function Booking() {
  // this is the variable to tell
  // if component has mounted
  const initialMount = useRef(true);

  const [formData, setFormData] = useState(null);

  const handleTextChange = (e) => {
    e.preventDefault();
    setFormData((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (initialMount.current) {
      // run on initial mount
      initialMount.current = false;
    } else {
      // refresh
    }
  }, [formData]);

  const formSubmitted = (e) => {
    e.preventDefault();

    console.log(formData);
    axios.post("http://localhost:7000/create", formData).then((response) => {
      console.log(response.data);
    });
    setFormData({goingDate: null, returnDate: null, studentID: null, reason: null});
  };
  const [show, setShow] = useState(false);

  const display = () => {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

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
            <input
              type="reason"
              onChange={handleTextChange}
              name="reason"
            />
          </div>

          <div className="form-group">
            <button type="submit" onClick={display}>
              Book Now
            </button>
          </div>
        </div>
      </form>
      {/* {show && (
        <div>
          <h1> {handleTextChange}</h1>
          <h1> {handleTextChange}</h1>
          <h1> {handleTextChange}</h1>
          <h1> {handleTextChange}</h1>
        </div>
      )} */}
    </div>
  );
}

export default Booking;

// class AddPost extends Component{

//   state = {
//       show: false,
//       Student Id: "",
//       :Going Date "",
//       Return Date: "",
//        Reason:"",
//   }

// toggle = () => this.setState((currentState) => ({show: !currentState.show}));

// handleTextChange = (event) => this.setState({studentID: event.target.value});

// handleTextChange = (event) => this.setState({goingDate: event.target.value});
// handleTextChange = (event) => this.setState({returnDate: event.target.value});
// handleTextChange = (event) => this.setState({reason: event.target.value});

//

// formSubmitted = (event) => {
//     event.preventDefault();
//     this.setState({ show: false });
// }

//   render() {
//       return(
//           <div className="form-inner">

//           <h4>Booking</h4>
//           <div className="form-group">

//               <button onClick={this.toggle}>Book Now<span>+</span> {this.state.show}</button>

//               {this.state.show ?
//               <form onSubmit={this.formSubmitted}>
//                   <label>Student Id<input type="text" onChange={this.handleTextChange} /></label>
//                   <br />
//                   <label>Going Date<input type="date" onChange={this.changegoingDate} className="form-group"/></label>
//                   <label>Return Date<input type="date" onChange={this.handlereturnDate}  classNme="form-group"/></label>
//                  <label>Reason<input type="text" onChange={this.handlereturnreason}  classNme="form-group"/></label>
//                   <br />
//                   <button>Submit</button>
//               </form> :
//               <div className="section-post">
//                   < h1>{this.state.studentID}</h1>  <h1>{this.state.goingDate} <h1/>
//                   <h1>{this.state.returnDate}</h1>
//                   <p>{this.state.reason}</p>
//               </div>
//               }

//               <hr />

//           </div>

// </div>
//       );
//   }
// }
