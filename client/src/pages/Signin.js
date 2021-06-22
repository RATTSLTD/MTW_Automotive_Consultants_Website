import React from 'react'
import SignIn from '../components/SignIn'

const SigninPage = (props) => {
    return (
        <div>
            <SignIn setter={props.setter}/>
        </div>
    )
}

export default SigninPage
