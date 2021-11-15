import React from 'react'
import SignIn from '../components/SignIn/SignIn'
import NavBar from '../components/NavBar/NavBar'

const SigninPage = (props) => {
    return (
        <div>
            <NavBar/>
            <SignIn setter={props.setter}/>
        </div>
    )
}

export default SigninPage
