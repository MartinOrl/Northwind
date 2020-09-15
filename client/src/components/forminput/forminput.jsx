import React from 'react';

import { Input } from './forminputStyles'

const Forminput = ({type, name, placeholder}) => {

    return(
        <Input type={type} name={name} placeholder={placeholder} />
    )
};

export default Forminput 

