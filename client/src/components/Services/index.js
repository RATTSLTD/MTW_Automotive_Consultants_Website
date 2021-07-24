import React from 'react'
import { ServicesHeader} from './ServicesHeader'
import { ServicesContainer, ServicesWrapper, ServicesRow, Column1, Column2, TextWrapper, TopLine, Subtitle, ImgWrap, Img} from './ServicesElements'

export const Services = ({lightBg, id, imgStart, topLine, lightText, darkText, description, descLine1, descLine2, img, alt}) => {
    return (
        <ServicesContainer lightBg={lightBg} id={id}>
            <ServicesWrapper>
                <ServicesRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <Subtitle darkText={darkText}>{descLine1}</Subtitle>
                            <Subtitle darkText={darkText}>{descLine2}</Subtitle>
                        </TextWrapper>
                    </Column1>    
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </ServicesRow>    
            </ServicesWrapper>    
          </ServicesContainer> 
    )
}


export default Services