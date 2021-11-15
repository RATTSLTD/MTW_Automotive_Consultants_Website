import React, { useState } from 'react'
import CarVideo from '../../../images/CarVideo.mp4';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroSH, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';
import {Button} from '../../ButtonElement.js'


const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={CarVideo} type='video/mp4'></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>Automotive Training and Development from MTW Automotive</HeroH1>
                <HeroSH>providing essential skills for automotive industry professionals for over 20 years</HeroSH>
                <HeroP>Try some of our content for free</HeroP>
                <HeroBtnWrapper>
                    <Button 
                     to="/training"
                     onMouseEnter={onHover} 
                     onMouseLeave={onHover} 
                     primary='true'
                     dark='true'
                     activeStyle>
                        View Here 
                        {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
