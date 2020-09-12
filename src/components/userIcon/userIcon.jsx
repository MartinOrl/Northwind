import React, { useState } from 'react'

import { Container, IconHolder, Icon, UserOptionsContainer, Option } from './userIconStyles'

import user from '../../assets/user.svg'

const UserOptions = () => {

    return(
        <UserOptionsContainer>
            <Option>My Profile</Option>
            <Option>My Orders</Option>
            <Option>Options</Option>
            <Option>Log Out</Option>
        </UserOptionsContainer>
    )
}


const UserIcon = ({clickable}) => {
    const [visible, setVisible] = useState(false)

    return(
        <Container>
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