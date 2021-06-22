import styled from 'styled-components'

export const AboutInfoContainer = styled.div`
    width: 100%;
    max-height: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const AboutInfoWrapper = styled.div`
    max-width: 60%;
`
export const AboutInfoText = styled.div`
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 20px;
`
export const AboutInfoImages = styled.div`
`
export const MapImage = styled.img`
    width: 100%;
`

export const AboutFlagsWrapper = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 10px;
`

export const AboutCountry = styled.div`
    width: 200px;
    height: 70px;
    margin-right: 10px;
    display: flex;
    flex-direction: row;
    box-shadow: 0px 5px 5px rgba(0,0,0,0.4);
    -moz-box-shadow: 0px 5px 5px rgba(0,0,0,0.4);
    -webkit-box-shadow: 0px 5px 5px rgba(0,0,0,0.4);
    -o-box-shadow: 0px 5px 5px rgba(0,0,0,0.4);
    border-radius:5px;
`

export const AboutFlag = styled.img`
    width: 40%;
`

export const AboutCountryName = styled.h2`
    width: 50%;
    margin-left: 10px;
    font-size: 18px;
    font-weight: bold;
`