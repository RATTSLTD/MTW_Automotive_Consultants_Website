import React from 'react'
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'
import {
    FooterContainer, 
    FooterWrapper, 
    FooterLinkContainer, 
    FooterLinkWrapper, 
    FooterLinkItem, 
    FooterLinkTitle, 
    FooterLink, 
    SocialMedia, 
    SocialMediaWrap, 
    SocialLogo, 
    WebsiteCopyright, 
    SocialIconLink, 
    SocialIcons,} 
    from './FooterElements.js'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrapper>
                    <FooterLinkContainer>
                        <FooterLinkWrapper>
                            {/* <FooterLinkItem>
                                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to="/contact">Email</FooterLink>                            
                            </FooterLinkItem>
                            <FooterLinkItem>
                                <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to="/">Facebook</FooterLink>
                                <FooterLink to="/">Instagram</FooterLink>
                                <FooterLink to="/">Twitter</FooterLink>
                            </FooterLinkItem> */}
                        </FooterLinkWrapper>
                    </FooterLinkContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to="/">
                                MTW Automotive Consulants
                            </SocialLogo>
                            <WebsiteCopyright>
                                Email: enquiries@mtwautomotive.co.uk
                                <br/>
                                Copyright © MTW Automotive Consultants Ltd {new Date().getFullYear()}
                                <br/>All rights reserved.
                                <br/>Website Created by RATTS.Ltd.
                                <br/>For website enquires email: rattsltd@gmail.com
                            </WebsiteCopyright>
                            <SocialIcons>
                            <SocialIconLink href="https://www.linkedin.com/in/matthew-watkiss-5b620420/" target="___"
                                aria-lable="LinkedIn">
                                    <FaLinkedin/>
                                </SocialIconLink>
                                <SocialIconLink href="https://www.instagram.com/mtwauto/" target="___"
                                aria-lable="Instagram">
                                    <FaInstagram/>
                                </SocialIconLink>
                                <SocialIconLink href="https://twitter.com/MTWAutomotive" target="___"
                                aria-lable="Twitter">
                                    <FaTwitter/>
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrapper>
            </FooterContainer>
        </>
    )
}

export default Footer
