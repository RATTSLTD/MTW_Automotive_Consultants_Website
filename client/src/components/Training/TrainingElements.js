import styled from 'styled-components'

export const TrainingContainer = styled.div`
    display: grid;
    grid-template-columns: minmax(auto, auto);
    margin-right: auto;
    margin-left: auto;
    padding: 5%;

    @media screen and (max-width: 2560px){
        margin-left: 10px;
        margin-right: 10px;
    }
    @media screen and (max-width: 1024px){
        padding-top: 10%;
        margin-bottom: 100px;
    }
    @media screen and (max-width: 425px){
        padding-top: 80px;
        margin-bottom: 0px;
    }
`
export const ContentWrapper = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
    overflow: hidden;
    -webkit-transform:scale(1);
    -moz-transform-scale(1);

    @media screen and (max-width: 2560px){
        height: 1000px;
        width: 1312px;
    }
    @media screen and (max-width: 1440px){
        height: 650px;
        width: 842px;
    }
    @media screen and (max-width: 1024px){
        height: 510px;
        width: 655px;
    }
    @media screen and (max-width: 768px){
        height: 400px;
        width: 505px;
    }
    @media screen and (max-width: 425px){
        height: 320px;
        width: 370px;
        grid-column-start: 1;
    }
    @media screen and (max-width: 375px){
        height: 310px;
        width: 350px;
        grid-column-start: 1;
    }
    @media screen and (max-width: 320px){
        height: 280px;
        width: 320px;
        grid-column-start: 1;
        margin-left: -25px;
    }
`

export const ContentFrame = styled.iframe`
    border: none;
    height: 98%;
    width: 97%;
    frameborder: 0;
`

export const SelectorWrapper = styled.div`
    display: grid;
    grid-template-columns: minmax(100px, 100px, 100px);
    grid-column-start: 1;
    grid-row-start: 1;
    margin-top: 50px;

    @media screen and (max-width: 768px){
        width: 180px;
        margin-top: 25px;
    }
    @media screen and (max-width: 425px){
        grid-row-start:2;
        grid-column-start:1;
        width: 350px;
    }
    @media screen and (max-width: 320px){
        grid-row-start:2;
        grid-column-start:1;
        width: 290px;
    }
`

export const FreeContentContainer = styled.div`
    @media screen and (max-width: 425px){
        grid-column-start:1;
        grid-row-start: 1;
        margin-right: 20px;
    }
`

export const FreeContentWrapper = styled.div`
    display: grid;
    grid-column-start:1;
    grid-row-start: 1;
    width: 48%;
    background: #3e3e3e; 
    padding: 5px;
    border-radius: 5px;

    @media screen and (max-width: 1440px){
        width: 70%;
    }
    @media screen and (max-width: 1024px){
        width: 60%;
    }
    @media screen and (max-width: 425px){
        width: 80%;
    }
`

export const PaidContentContainer = styled.div`
    @media screen and (max-width: 425px){
        grid-column-start:2;
        grid-row-start: 1;
    }
`
export const PaidContentWrapper = styled.div`
    display: grid;
    grid-column-start:1;
    grid-row-start: 2;
    width: 48%;
    background: #3e3e3e; 
    padding: 5px;
    border-radius: 5px;

    @media screen and (max-width: 1440px){
        width: 70%;
    }
    @media screen and (max-width: 1024px){
        width: 60%;
    }
    @media screen and (max-width: 425px){
        width: 80%;
    }
`

export const Content = styled.button`
    max-width: 300px;
    max-height: 150px;
    margin-bottom: 15px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background: #fff;
    -webkit-box-shadow: 0 7px 3px rgba(0,0,0,0.3);
    -moz-box-shadow: 0 7px 3px rgba(0,0,0,0.3);
    box-shadow: 0 7px 3px rgba(0,0,0,0.3);
`
 
export const ContentImg = styled.img`
    max-width: 100%;
`

export const ContentHeader = styled.h1`

`

export const FreeContentHeader = styled.h2`
    font-size: 25px;
    @media screen and (max-width: 1024px){
        font-size: 20px;
    }
    @media screen and (max-width: 768px){
        font-size: 15px;
    }
    @media screen and (max-width: 768px){
        font-size: 15px;
    }
`

export const PaidContentHeader = styled.h2`
    font-size: 25px;
    @media screen and (max-width: 1024px){
        font-size: 20px;
    }
    @media screen and (max-width: 768px){
        font-size: 15px;
    }
    @media screen and (max-width: 768px){
        font-size: 15px;
    }
`