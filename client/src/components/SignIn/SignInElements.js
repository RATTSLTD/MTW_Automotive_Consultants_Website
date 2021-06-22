import styled from 'styled-components'

export const SignInContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -200px;
    margin-left: -200px;
    max-width: 400px;
    box-shadow: 10px 10px 5px rgba(0,0,0,0.4);
    -moz-box-shadow: 10px 10px 5px rgba(0,0,0,0.4);
    -webkit-box-shadow: 10px 10px 5px rgba(0,0,0,0.4);
    -o-box-shadow: 10px 10px 5px rgba(0,0,0,0.4);
    border-radius:25px;

    @media screen and (max-width: 480px){
        top: 50%;
        left: 50%;
        margin-top: -200px;
        margin-left: -170px;
        max-width: 350px;
    }
    @media screen and (max-width: 375px){
        top: 50%;
        left: 50%;
        margin-top: -200px;
        margin-left: -160px;
        max-width: 320px;
    }
    @media screen and (max-width: 320px){
        top: 50%;
        left: 50%;
        margin-top: -200px;
        margin-left: -130px;
        max-width: 250px;
    }
`

export const SignInWrapper = styled.div`
    background: #c3c3c3;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SignInHeader = styled.h2`
    font-size: 25px;
`

export const Image = styled.img`
    width: 80%;
`

export const InputWrapper = styled.form`
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
`

export const InputBox = styled.input`
    font-size: 15px;
    width: 100%;
`

export const Button = styled.button`
    font-size: 20px;
    width: 100%;
`

export const RejectionText = styled.h2`
    font-size: 20px;
    color: red;
    display: none;
`