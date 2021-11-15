import styled from 'styled-components'

export const ServicesContainer = styled.div`
    color:#fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#121212')};

    @media screen and (max-width: 768px){
        padding: 150px 0;
    }
    @media screen and (max-width: 480px){
        padding: 0px 0;
    }
`

export const ServicesWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 15%;
    width: 100vw;
    max-width: 2200px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;  
`

export const ServicesRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};


    @media screen and (max-width: 750px){
        padding-left: 5%;
        padding-right: 5%;
    } 
    @media screen and (max-width: 1000px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
    @media screen and (min-width: 1020px){
        padding-right: 10%
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`
export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    @media screen and (min-width: 2560px){
        max-width: 650px;

    }
`

export const TopLine = styled.p`
    color: #09558f;
    font-size: 2rem;
    padding-top: 10px;
    padding-bottom: 10px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 40px;
`

export const Subtitle = styled.p`
    max-width: 500px;
    margin-bottom: 35px;
    padding-left:0;
    font-size: 1.5rem;
    line-height: 35px;
    color: ${({darkText}) => (darkText ? '#121212' : '#fff')};

`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
    @media screen and (min-width: 2560px){
        width: 1000px;
        height: 100%;
        padding-top: 10%;
    }
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`