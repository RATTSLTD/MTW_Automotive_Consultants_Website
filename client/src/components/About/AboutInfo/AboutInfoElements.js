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
    margin-right: 10px;
    display: flex;
    flex-direction: row;
    box-shadow: 0px 5px 5px rgba(0,0,0,0.4);
    -moz-box-shadow: 0px 5px 5px rgba(0,0,0,0.4);
    -webkit-box-shadow: 0px 5px 5px rgba(0,0,0,0.4);
    -o-box-shadow: 0px 5px 5px rgba(0,0,0,0.4);
    border-radius:5px;
    
    @media screen and (max-width: 320px){
        height: 50px;
    }
    @media screen and (min-width: 320px){
        height: 50px;
    }
    @media screen and (min-width: 375px){
        height: 50px;
    }
    @media screen and (min-width: 425px){
        height: 60px;
    }
    @media screen and (min-width: 768px){
        height: 40px;
    }
    @media screen and (min-width: 1024px){
        height: 60px;
    }
    @media screen and (min-width: 1440px){
        height: 80px;
    }    
`

export const AboutFlag = styled.img`
    width: 100%;
`