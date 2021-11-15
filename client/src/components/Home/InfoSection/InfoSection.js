import React from 'react'
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Subtitle, ImgWrap, Img} from './InfoElements.js'

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, darkText, description, descLine1, descLine2, descLine3, img, alt}) => {

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
