import React from 'react'
import WorldMap from '../../../images/Global.png'
import {AboutInfoContainer, AboutInfoWrapper, AboutInfoText, AboutFlagsWrapper, AboutCountry, AboutCountryName, AboutFlag, AboutInfoImages, MapImage, Dropper1, Dropper2, Dropper3, Dropper4, Dropper5} from './AboutInfoElements'
import Norway from '../../../images/Norway.png'
import Russia from '../../../images/Russia.png'
import Sweden from '../../../images/Sweden.png'
import UAE from '../../../images/UAE.png'
import UK from '../../../images/UK.png'

const AboutInfo = () => {
    return (
        <AboutInfoContainer>
            <AboutInfoWrapper>
                <AboutInfoText>
                    In the past decade we have delivered training and development across the globe, with businesses in:
                </AboutInfoText>
                <AboutFlagsWrapper>
                    <AboutCountry>
                        <AboutFlag src={Norway}/>
                        <AboutCountryName>Norway</AboutCountryName>
                    </AboutCountry>
                    <AboutCountry>
                        <AboutFlag src={Russia}/>
                        <AboutCountryName>Russia</AboutCountryName>
                    </AboutCountry>
                    <AboutCountry>
                        <AboutFlag src={Sweden}/>
                        <AboutCountryName>Sweden</AboutCountryName>
                    </AboutCountry>
                    <AboutCountry>
                        <AboutFlag src={UAE}/>
                        <AboutCountryName>The UAE</AboutCountryName>
                    </AboutCountry>
                    <AboutCountry>
                        <AboutFlag src={UK}/>
                        <AboutCountryName>The UK</AboutCountryName>
                    </AboutCountry>
                </AboutFlagsWrapper>
                <AboutInfoImages>
                    <MapImage src={WorldMap} id="Map"/>
                </AboutInfoImages>
            </AboutInfoWrapper>
        </AboutInfoContainer>
    )        
}

export default AboutInfo
