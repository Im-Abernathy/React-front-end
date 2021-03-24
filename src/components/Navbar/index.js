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
                    <NavLogo to="/home"> Anjie Connon Artwork </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/artwork" activeClassName="active">Artwork</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/bio" activeClassName="active">Bio</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/shows" activeClassName="active">Shows</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/contact" activeClassName="active">Contact Details</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
}

export default Navbar;
