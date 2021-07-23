import styled from 'styled-components'

export const ServicesContainer = styled.div`
    height: 750px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    backgrounds: #010606;
    padding-bottom: 10px;

    @media screen and (max-width: 770px){
        height: 1500px;
    }
    @media screen and (min-width: 778px){
        height: 500px;
    }
    @media screen and (min-width: 850px){
        height: 600px;
    }
    @media screen and (min-width: 1440px){
        height: 900px;
    }
    @media screen and (min-width: 2560px){
        height: 1300px;
    }
`

export const ServicesWrapper = styled.div`
    max-width: 1440px;
    height: 550px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    padding-bottom: 10px;
    
    @media screen and (max-width: 770px){
        grid-template-columns: 1fr;
        padding: 50px;
        height: 1500px;
    }
    @media screen and (min-width: 770px){
        padding: 20px;
        height: 500px;
    }
    @media screen and (min-width: 1440px){
        padding: 50px;
        height: 800px;
        width: 1200px;
    }
    @media screen and (min-width: 2560px){
        width: 1200px;
        height: 800px;
        grid-gap: 60px;
    }
`

export const ServicesCard = styled.button`
    background: #010606;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 15px;
    max-height: 250px;
    max-width: 350px;
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
    @media screen and (min-width: 770px){
        padding: 20px;
        height: 200px;
        width: 250px;
    }
    @media screen and (min-width: 850px){
        max-width: 300px;
        max-height: 200px;
    }
    @media screen and (min-width: 2550px){
        padding: 20px;
        max-height: 400px;
        max-width: 700px;
    }

`

export const ServicesIcon = styled.img`
    height: 70%;
    width: 100%;
    margin-bottom: 2px;
    @media screen and (min-width: 2550px){
        height: 500px;
        width: 500px;
    }
`
export const ServicesH2 = styled.h2`
    font-size: 1rem;
    color: #fff;
    margin-bottom: 2px;
    height: 40px;
    @media screen and (min-width: 2550px){
        height: 500px;
        font-size: 2rem;
    }
`
export const ServicesP = styled.p`
    width: 50%;
    height: 80px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;

    @media screen and (max-width: 320px){
        font-size:13px;
        height: 220px;
    }
    @media screen and (min-width: 320px){
        font-size:15px;
        height: 230px;
    }
    @media screen and (min-width: 380px){
        font-size:18px;
        height: 350px;
    }
    @media screen and (min-width: 501px){
        height: 290px;
    }
    @media screen and (min-width: 550px){
        height: 300px;
    }
    @media screen and (min-width: 770px){
        width: 60%;
        height: 150px;
    }
    @media screen and (min-width: 900px){
        font-size: 20px;
        height: 100px;
    }
    @media screen and (min-width:1440px){
        font-size: 30px;
        height: 200px;
    }
    @media screen and (min-width: 2390px){
        font-size: 35px;
        width: 70%;
        height: 250px;
    }
    @media screen and (min-width: 2560px){
        font-size: 50px;
        width: 70%;
        height: 200px;
    }
`