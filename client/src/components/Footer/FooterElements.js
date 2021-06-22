import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.div`
    background-color: #fff;
`

export const FooterWrapper = styled.div`
    padding: 42px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinkContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen (max-width: 820px){
        padding-top: 32px;
    }
`

export const FooterLinkWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px){
        flex-direciton: column;
    }
`

export const FooterLinkItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #010606;

    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.div`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 16px;
`

export const FooterLink = styled(Link)`
    color: #010606;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover{
        color: #09558f;
        transition: 0.3s ease-in-out;
    }
`
export const FooterImageContainer = styled.div`
    display: flex;
    width: 50%;
`

export const Image = styled.img`
    display: flex;
    top: 0;
    padding-left: 20%;

    @media screen and (max-width: 550px){
        width: 80%;
    }
    @media screen and (max-width: 450px){
        width: 80%;
    }
`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`

export const SocialLogo = styled.section`
    color: #09558f;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`

export const WebsiteCopyright = styled.small`
    color: #010606;
    margin-bottom: 16px;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export const SocialIconLink = styled.a`
    color: #010606;
    font-size: 24px;
`