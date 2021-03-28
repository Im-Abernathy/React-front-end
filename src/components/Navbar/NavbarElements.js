import styled from 'styled-components'
import {Link as LinkR, NavLink} from 'react-router-dom'

export const Nav = styled.nav`
    background: #88d8b0;
    height: 4.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1em;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.2s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 3rem;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
    color: #212f2c;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    margin-right: 2rem;

    @media screen and (max-width: 400px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 370px) {
        font-size: 1.2rem;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 800px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #212f2c;
        padding-top: 2px;

    }

    &:hover {
        color: #ff6f69;
        transition: 0.2 ease-in-out;
    }

    @media screen and (max-width: 400px) {
        font-size: 1.5rem;
        padding-top: 6px;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 800px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(NavLink)`
    color: #212f2c;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 1.2em;

    &:hover {
        transition: all 0.2s easin-in-out;
        color: #ff6f69;
    }

    &.active {
        color: #ff6f69;
        border-bottom: 4px solid #ff6f69;
    }
`;




