import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'

export const Nav = styled.nav`
    background: #181818;
    height: 10vh;
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
    font-size: 1rem;

    &.active{
        color: #09558f;
    }
    @media screen and (max-width: 550px){
        font-size: 0.7rem;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    grid-column-start: 2;
    grid-row-start:1;
    font-size: 1rem;
    
    @media screen and (max-width: 700px){
        grid-column-start: 2;
        font-size: 0.5rem;
        margin-right: 0px;
        margin-left: -60px;
        grid-gap: -50px;
    }
`

export const Image = styled.img`
    overflow: hidden;
    display: flex;
    top: 0;
    left: 0;
    width: 90%;
    max-height: 100%;
    padding-left: 5%;
    grid-column-start: 1;
    grid-row-start:1;

    @media screen and (max-width: 365px){
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    grid-column-start: 3;
    grid-row-start:1;
    margin-left: 0px;
    margin-right: 30px; 
    @media screen and (min-width: 355px){
        font-size: 13px;
        margin-left: -20px;
        padding-right: 0px;
        grid-column-start: 3;
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
    font-size: 1rem;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#010606' : '#fff')};
        color: ${({dark}) => (dark ? '#fff' : '#010606')};
    }
    @media screen and (max-width: 550px){
        padding: 5px 10px;
        font-size: 0.7rem;
    }
    @media screen and (min-width: 2000px){
        padding: 20px 50px;
    }
    
`