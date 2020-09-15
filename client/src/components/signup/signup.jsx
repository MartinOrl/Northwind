import React from 'react';
import { auth, createUserProfile } from '../../firebase/firebase';

const Signup = () => {

    const handleSubmit = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value
        const name = event.target.name.value;
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfile(user, name)
        }
        catch(error){
            console.error(error)
        }

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label for='name'>Name</label>
                <input type='text' name='name' placeholder='Username' />
                <label for='email'>Email</label>
                <input type='email' name='email' placeholder='Email' />
                <label for='password'>Password</label>
                <input type='password' name='password' placeholder='Password...' />
            </form>
        
        </div>
    )
};

export default Signup 

