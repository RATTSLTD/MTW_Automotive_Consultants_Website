import styled from 'styled-components'

export const AboutHeaderContainer = styled.div`
    width: 100%;
    max-height: 170px;
    padding-top: 100px;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 780px){
        padding-top: 120px;
        padding-bottom: 0px;
    }
    @media screen and (min-width: 2560px){
        padding-top: 150px;
        padding-bottom: 20px;
    }
`
export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const HeaderText = styled.h1`
    color: #09558f;
    font-size: 3rem;
    @media screen and (max-width: 900px){
        font-size: 2rem;
    }
    @media screen and (min-width: 1440px){
        font-size: 4rem;
    }
    @media screen and (min-width: 2560px){
        font-size: 5rem;
    }
`