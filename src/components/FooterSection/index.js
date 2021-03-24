import React from 'react'
import { FaFacebook, FaYoutube, FaInstagram} from 'react-icons/fa'
import {FooterContainer, FooterWrap, FooterLinksContainer, 
        FooterLinksWrapper, FooterLinkItems,
        FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, 
        WebsiteRights, SocialIcons, SocialIconLink
        } from './FooterElements'

import {
    }  from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
        <FooterWrap>
        <FooterLinksContainer>

            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLink to="/home">Home Page</FooterLink>
                    <FooterLink to="/artwork">Artwork</FooterLink>
                    <FooterLink to="/shows">Shows</FooterLink>
                    
                </FooterLinkItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLink to="/bio">Bio</FooterLink>
                    <FooterLink to="/contact">Contact Us</FooterLink>
                    <FooterLink to="/terms">Terms of Service</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>

        </FooterLinksContainer>

        <SocialMedia>
            <SocialMediaWrap>

                <SocialLogo to="/">Anjie Connon</SocialLogo>
                <WebsiteRights> 
                    Anjie Connon Works © {new Date().getFullYear()}
                </WebsiteRights>

                <SocialIcons>
                    <SocialIconLink href="//www.Facebook.com" target="_blank" aria-label="Facebook">
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href="//www.Instagram.com" target="_blank" aria-label="Instagram">
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href="//www.Youtube.com" target="_blank" aria-label="Youtube">
                        <FaYoutube />
                    </SocialIconLink>
                </SocialIcons>

            </SocialMediaWrap>
        </SocialMedia>
        </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
