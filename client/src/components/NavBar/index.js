import React from 'react'
import {Nav, NavLink, NavBtn, NavBtnLink, NavBtnSignIn, NavMenu, Image} from './NavBarElements'
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
                    {/* <NavLink to="/contact" activeStyle>Contact Us</NavLink> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin" activeStyle>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default NavBar
