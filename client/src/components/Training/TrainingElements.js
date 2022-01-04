import styled from 'styled-components'

export const TrainingContainer = styled.div`
    display: grid;
    grid-template-columns: minmax(auto, auto);
    margin-right: auto;
    margin-left: auto;
    padding: 5%;
`
export const ContentWrapper = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row: 1;
    overflow: hidden;
    -webkit-transform:scale(1);
    -moz-transform-scale(1);
    height: 80vh;
    width: 70vw;

    @media screen and (max-width: 375px){
        height: 320px;
        width: 300px;
        grid-column-start: 1;
        margin-left: -10px;
    }
`

export const ContentFrame = styled.iframe`
    border: none;
    height: 98%;
    width: 97%;
    frameborder: 0;
    sandbox="allow-forms allow-scripts";
    scrolling="no;
    type="video/mp4";
`

export const SelectorWrapper = styled.div`
    display: grid;
    grid-template-columns: minmax(100px, 100px, 100px);
    grid-column-start: 1;
    grid-row-start: 1;
    margin-top: 50px;
    width: 20vw;

    @media screen and (max-width: 700px){
        grid-row-start:2;
        grid-column-start:2;
        width: 50vw;
    }
    @media screen and (max-width: 360px){
        grid-row-start:2;
        grid-column-start:1;
    }
`

export const FreeContentContainer = styled.div`
    @media screen and (max-width: 700px){
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
    overflow-y: hidden;

    @media screen and (max-width: 1440px){
        width: 70%;
    }
    @media screen and (max-width: 1024px){
        width: 60%;
    }
    @media screen and (max-width: 700px){
        width: 80%;
    }
`

export const PaidContentContainer = styled.div`
    @media screen and (max-width: 700px){
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
    overflow-y: hidden;

    @media screen and (max-width: 1440px){
        width: 70%;
    }
    @media screen and (max-width: 1024px){
        width: 60%;
    }
    @media screen and (max-width: 700px){
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
    overflow-y: hidden;

`
 
export const ContentImg = styled.img`
    max-width: 100%;
    max-height: 80%;
    overflow-y: hidden;

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