import React from 'react'
import {useState} from 'react';
import {Redirect} from 'react-router-dom';
import {SignInContainer, SignInWrapper, SignInHeader, Image, RejectionText, InputWrapper, InputBox, Button} from './SignInElements';
import logo from '../../images/LogoTran.png'

export const SignIn = (props) => {
    const[text, setText] = useState();
    const[signedIn, setSignedIn] = useState(false);
  
    async function sendPassword(password){
      const res = fetch("/api/paid",{
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({password})
      })
      return res;
    }
  
    async function submit(e){
      e.preventDefault();
      const res = await sendPassword(text)
      if (await res.status === 200){
        const json = await res.json()
        props.setter(json)
        setSignedIn(true);            
      } else {
        document.getElementById("incorrect").style.display="flex"
      }
    }
  
    if (signedIn) return <Redirect to="/training"/>;
  
    return (
        <SignInContainer>
            {signedIn === false ?
                <SignInWrapper>
                <SignInHeader>Sign In</SignInHeader>
                <Image src={logo}/>
                <InputWrapper onSubmit={submit}>
                    <InputBox onChange={(e)=> {setText(e.target.value)}} placeholder="Insert PassKey"/>
                    <Button type="submit" value="submit">Submit</Button> {/*clear the textbox*/}
                    <RejectionText id="incorrect">Incorrect Password</RejectionText>
                </InputWrapper>
                </SignInWrapper>
            : signedIn}
        </SignInContainer>
    )
  }

export default SignIn
