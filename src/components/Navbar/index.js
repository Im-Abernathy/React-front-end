import React from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon,
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
    } from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/"> Obsidian </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="profile">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contacts">Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="security">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup">Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
}

export default Navbar;
