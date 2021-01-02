import React from 'react'
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink} from './NavElements'



const Navbar = () => {
    return (
        <>
        <Nav>
            <NavLink to="/">
             <h1>Logo</h1>   
            </NavLink>
            <Bars/>
            <NavMenu>
            <NavLink to ="/login" activeStyle>Log In</NavLink>  
            <NavLink to ="/signup" activeStyle>Sign Up</NavLink>  
            <NavLink to ="/home" activeStyle>Home</NavLink> 
            <NavLink to ="/booking" activeStyle>Booking</NavLink>  
            </NavMenu>
            <NavBtn>
               <NavBtnLink to ="/signin">Sign In</NavBtnLink>
            </NavBtn>

        </Nav>

            
        </>
    )
}

export default Navbar
