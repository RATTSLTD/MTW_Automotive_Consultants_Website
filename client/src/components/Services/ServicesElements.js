import styled from 'styled-components'

export const ServicesHeader = styled.h1`
    padding-top: 150px;
`

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
    height: 1200px;
    width: 100%;
    max-width: 2200px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;  
    
    @media screen and (max-width: 500px){
        height: 1000px;
        width: 100%;
    }
    @media screen and (min-width: 500px){
        height: 1300px;
        width: 100%;
    }
    @media screen and (min-width: 750px){
        height: 1470px;
        width: 100%;
    }
    @media screen and (min-width: 1000px){
        height: 1200px;
        width: 100%;
    }
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
    font-size: 40px;
    padding-top: 10px;
    padding-bottom: 10px;
    line-height: 56px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 40px;

    @media screen and (max-width: 500px){
        font-size: 20px;
        line-height: 25px;
    }
    @media screen and (min-width: 500px){
        font-size: 25px;
    }
    @media screen and (min-width: 2560px){
        font-size: 50px;
    }
`

export const Subtitle = styled.p`
    max-width: 500px;
    margin-bottom: 35px;
    padding-left:0;
    font-size: 25px;
    line-height: 35px;
    color: ${({darkText}) => (darkText ? '#121212' : '#fff')};
    @media screen and (max-width: 500px){
        font-size: 15px;
        line-height: 25px;
    }
    @media screen and (min-width: 500px){
        font-size: 20px;
        line-height: 30px;
    }
    @media screen and (min-width: 2560px){
        max-width: 900px;
        font-size: 32px;
        line-height: 44px;
    }
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