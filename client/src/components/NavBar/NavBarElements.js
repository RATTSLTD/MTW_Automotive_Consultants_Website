import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'

export const Nav = styled.nav`
    background: #181818;
    height: 80px;
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
    @media screen and (min-width: 2000px){
        height: 120px;
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

    
    @media screen and (max-width: 450px){
        grid-column-start: 2;
        font-size: 8px;
        margin-right: 0px;
        margin-left: -60px;
        grid-gap: -50px;
    }
    @media screen and (min-width: 450px){
        grid-column-start: 2;
        font-size: 10px;
        margin-right: 0px;
        margin-left: -50px;
    }

    @media screen and (max-width: 768px) and (min-width: 668px){
        grid-column-start: 2;
        margin-left: 0px;
        font-size: 13px;
        margin-right: 5%;
    }
    @media screen and (min-width: 900px){
        margin-right: 0px;
        margin-left: 100px;
    }
    @media screen and (min-width: 1200px){
        margin-right: -40%;
        margin-left: 10%;
    }@media screen and (min-width: 1700px){
        margin-right: -50%;
        margin-left: 40%;
    }
    @media screen and (min-width: 1900px){
        margin-right: -80%;
        margin-left: 60%;
    }
    @media screen and (min-width: 2000px){
        margin-right: -30%;
        margin-left: 30%;
        font-size:25px;
    }
    @media screen and (min-width: 2415px){
        margin-right: -80%;
        margin-left: 80%;
        font-size:25px;
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

    @media screen and (max-width: 365px){
        display: none;
    }
    @media screen and (max-width: 400px){
        grid-column-start: 1;
        width: 60px;
        margin-left: -10px;
    }
    @media screen and (min-width: 400px){
        grid-column-start: 1;
        width: 80px;
        margin-left: -10px;
    }
    @media screen and (min-width: 415px){
        grid-column-start: 1;
        width: 100px;
        margin-left: -10px;
    }
    @media screen and (min-width: 480px){
        width: 300px;
        margin-right: 30px;
    }
    @media screen and (min-width: 768px){
        width: 300px;
        margin-right: 30px;
    }
    @media screen and (min-width: 1024px){
        width: 300px;
        margin-right: 100px;
    }
    @media screen and (min-width: 1520px){
        width: 400px;
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

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#010606' : '#fff')};
        color: ${({dark}) => (dark ? '#fff' : '#010606')};
    }
    @media screen and (max-width: 480px){
        padding: 5px 10px;
        font-size: 10px;
    }
    @media screen and (min-width: 2000px){
        padding: 20px 50px;
        font-size: 24px;
    }
    
`