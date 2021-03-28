import React from 'react';
import {FaBars} from 'react-icons/fa'
import {animateScroll} from 'react-scroll'
import {Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon,
    NavMenu, 
    NavItem, 
    NavLinks
    } from './NavbarElements';

const Navbar = ({toggle}) => {

    const toggleTop = () => {
        animateScroll.scrollToTop();
    }

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/home" onClick={toggleTop}> Anjie Connon Artwork </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/artwork" onClick={toggleTop} activeClassName="active">Artwork</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/bio" onClick={toggleTop} activeClassName="active">Bio</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/shows" onClick={toggleTop} activeClassName="active">Shows</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/contact" onClick={toggleTop} activeClassName="active">Contact Us</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
}

export default Navbar;
