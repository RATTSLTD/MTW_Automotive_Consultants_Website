import styled from 'styled-components'

export const ServicesContainer = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    backgrounds: #010606;

    @media screen and (max-width: 768px){
        height: 500px;
    }

    @media screen and (max-width: 480px){
        height: 900px;
    }
`

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    height: 350px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    
    @media screen and (max-width: 480px){
        grid-template-columns: 1fr;
        padding: 20px;
        height: 700px;
    }
`

export const ServicesCard = styled.div`
    background: #010606;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    -webkit-box-shadow: 0 5px 3px rgba(0,0,0,0.2);
    -moz-box-shadow: 0 5px 3px rgba(0,0,0,0.2);
    box-shadow: 0 5px 3px rgba(0,0,0,0.2);
    transition: all 0.s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out
        -webkit-box-shadow: 5px 10px 5px rgba(0,0,0,0.2);
        -moz-box-shadow: 5px 10px 5px rgba(0,0,0,0.2);
        box-shadow: 5px 10px 5px rgba(0,0,0,0.7);
        cursor: pointer;
    }

    @media screen and (max-width: 480px){
        height: 200px;
    }
`

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`
export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`
export const ServicesH2 = styled.h2`
    font-size: 1rem;
    color: #fff;
    margin-bottom: 10px;
`
export const ServicesP = styled.p`
    width: 50%;
    font-size: 20px;
    font-weight: bold;
    text-align: center;

    @media screen and (max-width: 320px){
        height: 170px;
    }
    @media screen and (max-width: 768px){
        width: 60%;
    }
    @media screen and (max-width: 750px){
        width: 80%;
        font-size: 18px
    }
`