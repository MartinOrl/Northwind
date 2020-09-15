import React from 'react';
import { auth, signInWithGoogle  } from '../../firebase/firebase'

import { GlobalContainer, Form, Button, ButtonContainer, StyledLink, GoogleButton, GoogleImage, GoogleText } from './signinStyles'

import google from '../../assets/google.png'

import FormInput from '../forminput/forminput'

const Signin = () => {

    const handleSubmit = async event => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        try{
            await auth.signInWithEmailAndPassword(email, password)
            console.log('Sign In Success')
        }
        catch(error){
            console.error(error)
        }
    }

    return(
        <GlobalContainer>
            <Form onSubmit={handleSubmit} >
                <FormInput type='email' name='email' placeholder='Email' />
                <FormInput type='password' name='password' placeholder='Password' />
                <ButtonContainer>
                    <Button type='submit'>Sign In</Button>
                    <StyledLink type='submit' link>Sign Up</StyledLink>
                </ButtonContainer> 
                <GoogleButton onClick={signInWithGoogle} >
                    <GoogleImage src={google} alt='google icon' />
                    <GoogleText>Sign in with Google</GoogleText>
                </GoogleButton>
                
            </Form>
        </GlobalContainer>
    )
};

export default Signin 

