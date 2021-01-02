import React from 'react'
import{BrowserRouter as Router}from 'react-router-dom'
import './App.css'
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp' 
import Home from './components/Home'
import Booking from './components/Booking'
import Navbar from './components/NavBar'
import Footer from'./components/Footer'

function App() {

  return (

  
      <Router>
        <Navbar/>

        <br/>
        <br/>
        
      <Switch>
        <Route path="/" exact component= {Home} /> 
        <Route path="/login" component= {Login} /> 
        <Route path="/signup" component= {SignUp}/>
        <Route path ="/booking" component={Booking}/>
      </Switch>
      <Footer/>
      </Router>
    
)
}


export default App

