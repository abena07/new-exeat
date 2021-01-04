import React from 'react'
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink} from './NavElements'



const Navbar = () => {
    return (
        <>
        <Nav>
            <NavLink to="/">
             <h1>Exeat Booking App</h1>   
            </NavLink>
            <Bars/>
            <NavMenu>
            <NavLink to ="/login" >Log In</NavLink>  
            <NavLink to ="/signup" >Sign Up</NavLink>  
            <NavLink to ="/home" >Home</NavLink> 
            <NavLink to ="/booking" >Booking</NavLink>  
            </NavMenu>
            <NavBtn>
               <NavBtnLink to ="/signin">Sign In</NavBtnLink>
            </NavBtn>

        </Nav>

            
        </>
    )
}

export default Navbar
