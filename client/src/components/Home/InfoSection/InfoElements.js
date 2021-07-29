import styled from 'styled-components'

export const InfoContainer = styled.div`
    color:#fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#121212')};

    @media screen and (max-width: 480px){
    }
    @media screen and (max-width: 1000px){
        padding: 10px 0;
    }
    @media screen and (min-width: 1000px){
        padding: 150px 0;
    }
    
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;  
    @media screen and (max-width: 400px){
        max-width: 600px;
        height: 600px;
    } 
    @media screen and (min-width: 400px){
        max-width: 600px;
        height: 900px;
    }
    @media screen and (min-width: 600px){
        max-width: 1000px;
        height: 1100px;
    }
    @media screen and (min-width: 1500px){
        max-width: 2000px;
        max-height: 1000px;
    }
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
    @media screen and (max-width: 480px){
        padding-right: 10%;
    } 
    @media screen and (min-width: 480px){
        padding-left: 10%;
        padding-right: 10%
    } 
    @media screen and (min-width: 1020px){
        padding-right: 10%
    }
`

export const Column1 = styled.div`
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
    @media screen and (min-width: 1500px){
        max-width: 650px;

    }
`

export const TopLine = styled.p`
    color: #09558f;
    font-size: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
    line-height: 50px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 40px;

    @media screen and (max-width: 400px){
        font-size: 24px;
    }
    @media screen and (min-width: 400px){
        font-size: 34px;
    }
    @media screen and (min-width: 1500px){
        line-height: 50px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 25px;
    line-height: 30px;
    color: ${({darkText}) => (darkText ? '#121212' : '#fff')};
    
    @media screen and (max-width: 400px){
        font-size: 15px;
        line-height: 20px;
        margin-bottom: 0px;
    }
    @media screen and (min-width: 400px){
        font-size: 20px;
        line-height: 30px;
    }
    @media screen and (min-width: 1500px){
        font-size: 32px;
        line-height: 44px;
    }
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
    @media screen and (max-width: 768px){
        width: 100%;
    }
    @media screen and (min-width: 1500px){
        width: 100%;
        height: 100%;
        padding-top: 10%;
    }
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;

    @media screen and (max-width: 768px){
        width: 70%;
    }
    @media screen and (min-width: 1500px){
        width: 90%;
    }
`