import React, {useState} from 'react'
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img} from './InfoElements.js'

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, darkText, description, descLine1, descLine2, descLine3, buttonOn, buttonLink, buttonLabel, img, alt, primary, dark}) => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    // fadeInOnScroll = () => {
    //     $(document).on("scroll", function() {
    //         var pageTop = $(document).scrollTop()
    //         var pageBottom = pageTop + $(window).height()
    //         var tags = $("section")
            
    //         for (var i = 0; i < tags.length; i++) {
    //         var tag = tags[i]            
    //             if ($(tag).position().top < pageBottom) {
    //             $(tag).addClass("visible")
    //             } else {
    //             $(tag).removeClass("visible")
    //             }
    //         }
    //     })
    // }

    return (
        <>
          <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <Subtitle darkText={darkText}>{descLine1}</Subtitle>
                            <Subtitle darkText={darkText}>{descLine2}</Subtitle>
                            <Subtitle darkText={darkText}>{descLine3}</Subtitle>
                        </TextWrapper>
                    </Column1>    
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>    
            </InfoWrapper>    
          </InfoContainer>  
        </>
    )
}

export default InfoSection
