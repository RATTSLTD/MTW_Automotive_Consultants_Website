import React from 'react'
import {Nav, NavLink, NavBtn, NavBtnLink, NavMenu, Image} from './NavBarElements'
import Logo from '../../images/TransAnimatedLogoGif.gif'

const NavBar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <Image src={Logo}/>
                </NavLink>
                <NavMenu>
                    <NavLink to="/about" activeStyle>About Us</NavLink>
                    <NavLink to="/training" activeStyle>Training Resources</NavLink>
                    <NavLink to="/services" activeStyle>Services</NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin" activeStyle>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default NavBar
