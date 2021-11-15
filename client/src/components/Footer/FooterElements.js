import styled from 'styled-components'

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
    @media screen (min-width: 2560px){
        max-width: 2400px;
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
    @media screen and (min-width: 2560px){
        width: 100%;
    }    

`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
    @media screen and (min-width: 2560px){
        max-width: 2400px;
    }
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
    @media screen and (min-width: 2560px){
        max-width: 2400px;
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
    @media screen and (min-width: 2560px){
        width: 350px;
    }
`

export const SocialIconLink = styled.a`
    color: #010606;
    font-size: 2.5rem;
`