import React from 'react'
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'
import {SocialBarContainer, SocialLinkContainer, SocialIconLink} from './SocialBarElements'

const SocialBar = () => {
    return (
        <SocialBarContainer>
            <SocialLinkContainer>
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
            </SocialLinkContainer>
        </SocialBarContainer>
    )
}

export default SocialBar
