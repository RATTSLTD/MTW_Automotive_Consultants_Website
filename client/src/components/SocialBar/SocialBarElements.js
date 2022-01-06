import styled from "styled-components";

export const SocialBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50px;
    height: 100vh;
    z-index: 999;
    position: fixed;
    margin-top: 150px;
    overflow: hidden;
`

export const SocialLinkContainer = styled.div`
    height: 25%;
    padding: 10%;
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    @media screen and (max-width: 480px){
        background-color: #fff;
        opacity: 70%;
    }
`

export const SocialIconLink = styled.a`
    color: #09558f;
    font-size: 2.5rem;
    overflow: hidden;
`