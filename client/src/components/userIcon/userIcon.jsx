import React, { useState } from 'react'

import { auth } from '../../firebase/firebase'

import { Container, IconHolder, Icon, UserOptionsContainer, Option } from './userIconStyles'

import user from '../../assets/user.svg'

const UserOptions = () => {

    return(
        <UserOptionsContainer>
            <Option>My Profile</Option>
            <Option>My Orders</Option>
            <Option onClick={() => {auth.signOut(); window.location.href = '/'} }>Log Out</Option>
        </UserOptionsContainer>
    )
}


const UserIcon = ({clickable}) => {
    const [visible, setVisible] = useState(false)

    return(
        <Container tabIndex='1' onBlur={() => setVisible(!visible)}>
            <IconHolder onClick={() => setVisible(!visible)}>
                <Icon src={user} />
            </IconHolder>
            {
                visible && clickable  ? <UserOptions /> : null
            }
        </Container>
    )
}

export default UserIcon