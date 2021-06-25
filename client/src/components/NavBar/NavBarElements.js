import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'

export const Nav = styled.nav`
    background: #181818;
    height: 100px;
    display: grid;
    grid-template-columns: minmax(auto, auto);
    column-gap: 25px;
    justify-content: space-between;
    font-size: 1rem;
    top: 0;
    padding-right: 10vw;
    z-index: 10;
    position: fixed;
    width: 100%;
    
    @media screen and (min-width: 2560px){
        height: 150px;
    }
`

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    grid-column-start: 1;
    grid-row-start:1;

    &.active{
        color: #09558f;
    }
    @media screen and (min-width: 2560px){
        font-size: 25px;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    grid-column-start: 2;
    grid-row-start:1;

    @media screen and (max-width: 375px){
        grid-column-start: 2;
        font-size: 13px;
        margin-right: 0px;
        margin-left: -20px;
    }
    @media screen and (max-width: 425px) and (min-width: 375px){
        grid-column-start: 2;
        font-size: 13px;
        margin-right: 0px;
        margin-left: 0px;
    }
    @media screen and (max-width: 768px) and (min-width: 425px){
        grid-column-start: 2;
        margin-left: 0px;
        font-size: 13px;
        margin-right: 5%;
    }
    @media screen and (min-width: 900px){
        margin-right: 0px;
        margin-left: 100px;
    }
    @media screen and (min-width: 1000px){
        margin-right: -40%;
        margin-left: 10%;
    }
    @media screen and (min-width: 1600px){
        margin-right: -60%;
        margin-left: 50%;
    }
`

export const Image = styled.img`
    overflow: hidden;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    grid-column-start: 1;
    grid-row-start:1;

    @media screen and (max-width: 350px){
        display: none;
    }
    @media screen and (max-width: 375px){
        grid-column-start: 1;
        width: 100px;
        margin-left: -10px;
    }
    @media screen and (min-width: 425px){
        width: 300px;
        margin-right: 0px;
    }
    @media screen and (min-width: 768px){
        width: 300px;
        margin-right: 50px;
    }
    @media screen and (min-width: 1024px){
        width: 300px;
        margin-right: 250px;
    }
    @media screen and (min-width: 1440px){
        width: 300px;
        margin-right: 600px;
    }
    @media screen and (min-width: 1440px){
        width: 300px;
        margin-right: 500px;
    }

`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    grid-column-start: 3;
    grid-row-start:1;
    margin-left: 0px;
    margin-right: 30px;
    @media screen and (max-width: 425px){
        font-size: 13px;
        margin-right: 0px;
        padding-right: 20px;
        grid-column-start: 3;
    }
    @media screen and (max-width: 450px){
        width: 100px;
        margin-right: -40px;
    }
    
    
`

export const NavBtnLink = styled(Link)`
    border-radius: 50px;
    background: #09558f;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    grid-column-start: 3;
    grid-row-start:1;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#010606' : '#fff')};
        color: ${({dark}) => (dark ? '#fff' : '#010606')};
    }
    @media screen and (max-width: 425px){
        padding: 7px 15px;
    }
    @media screen and (min-width: 2560px){
        padding: 20px 50px;
        font-size: 24px;
    }
    
`