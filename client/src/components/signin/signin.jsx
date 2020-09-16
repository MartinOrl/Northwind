import React from 'react';
import { auth, signInWithGoogle  } from '../../firebase/firebase'

import { GlobalContainer, Form, Button, ButtonContainer, StyledLink } from './signinStyles'

import google from '../../assets/google.png'

import FormInput from '../forminput/forminput'
import Googlebutton from '../googlebutton/googlebutton';

const Signin = () => {

    const handleSubmit = async event => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        try{
            await auth.signInWithEmailAndPassword(email, password)
        }
        catch(error){
            console.error(error)
        }
    }

    return(
        <GlobalContainer>
            <Form onSubmit={handleSubmit} >
                <FormInput type='email' name='email' placeholder='Email' required />
                <FormInput type='password' name='password' placeholder='Password' required />
                <ButtonContainer>
                    <Button type='submit'>Sign In</Button>
                    <StyledLink type='submit' to='/signUp'>Sign Up</StyledLink>
                </ButtonContainer> 
                <Googlebutton img={google} action={signInWithGoogle} />
            </Form>
        </GlobalContainer>
    )
};

export default Signin 

