import React, { useState } from 'react'
import CarVideo from '../../../images/CarVideo.mp4';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';
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
                <HeroH1>Bringing industry knowledge to your screen</HeroH1>
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
