import React from 'react';

import { GoogleButton, GoogleImage, GoogleText } from './googlebuttonStyles'

const Googlebutton = ({img, action}) => {

    return(
        <GoogleButton onClick={action} >
            <GoogleImage src={img} alt='google icon' />
            <GoogleText>Sign in with Google</GoogleText>
        </GoogleButton>
    )
};

export default Googlebutton 

