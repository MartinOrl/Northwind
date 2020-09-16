import React from 'react';
import { auth, createUserProfile, signInWithGoogle } from '../../firebase/firebase';

import { GlobalContainer, Form, Button } from './signupStyles'

import FormInput from '../forminput/forminput'
import Googlebutton from '../googlebutton/googlebutton';

import google from '../../assets/google.png'

const Signup = () => {

    const handleSubmit = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value
        const name = event.target.name.value;
        console.log(name)
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfile(user, name)
            window.location.href = '/'
        }
        catch(error){
            console.error(error)
        }

    }

    return(
        <GlobalContainer>
            <Form onSubmit={handleSubmit}>
                <FormInput type='text' name='name' placeholder='Username' required />
                <FormInput type='email' name='email' placeholder='Email' required />
                <FormInput type='password' name='password' placeholder='Password...' required />
                <Button type='submit' >Sign Up</Button>
            </Form>
            
            <Googlebutton img={google} action={signInWithGoogle} />
        </GlobalContainer>
    )
};

export default Signup 

