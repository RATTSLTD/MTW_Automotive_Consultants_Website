import React from 'react'
import WorldMap from '../../../images/Global.png'
import {AboutInfoContainer, AboutInfoWrapper, AboutInfoText, AboutFlagsWrapper, AboutCountry, AboutFlag, AboutInfoImages, MapImage} from './AboutInfoElements'
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
                    </AboutCountry>
                    <AboutCountry>
                        <AboutFlag src={Russia}/>
                    </AboutCountry>
                    <AboutCountry>
                        <AboutFlag src={Sweden}/>
                    </AboutCountry>
                    <AboutCountry>
                        <AboutFlag src={UAE}/>
                    </AboutCountry>
                    <AboutCountry>
                        <AboutFlag src={UK}/>
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
