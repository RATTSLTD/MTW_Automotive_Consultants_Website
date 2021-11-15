import React from 'react'
import {FaInstagram, FaLinkedin, FaTwitter, FaFacebook} from 'react-icons/fa'
import {
    FooterContainer, 
    FooterWrapper,   
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
                                    aria-label="LinkedIn">
                                        <FaLinkedin/>
                                </SocialIconLink>
                                <SocialIconLink href="https://www.instagram.com/mtwauto/" target="___"
                                aria-label="Instagram">
                                    <FaInstagram/>
                                </SocialIconLink>
                                <SocialIconLink href="https://twitter.com/MTWAutomotive" target="___"
                                aria-label="Twitter">
                                    <FaTwitter/>
                                </SocialIconLink>
                                <SocialIconLink href="https://www.facebook.com/MTWautomotive" target="___"
                                aria-label="Facebook">
                                    <FaFacebook/>
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
