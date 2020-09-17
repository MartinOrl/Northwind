import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { auth } from '../../firebase/firebase'

import { Container, IconHolder, Icon, UserOptionsContainer, Option } from './userIconStyles'

import userIcon from '../../assets/user.svg'

import { SelectCurrentUser } from '../../redux/user/userSelectors'


const UserOptions = ({user}) => {
    console.log(user)
    return(
        <UserOptionsContainer>
            <Option onClick={() => user ? window.location.href='/myProfile' : window.location.href='/signIn'} >My Profile</Option>
            <Option onClick={() => user ? window.location.href='/myOrders' : window.location.href='/signIn'} >My Orders</Option>
            {
                user
                ? 
                <Option onClick={() => {auth.signOut(); window.location.href = '/'} }>Log Out</Option>
                :
                <Option onClick={() => window.location.href = '/signIn' }>Sign In</Option>
            }
        </UserOptionsContainer>
    )
}


const UserIcon = ({clickable, user}) => {
    const [visible, setVisible] = useState(false)

    return(
        <Container>
            <IconHolder onClick={() => setVisible(!visible)}>
                <Icon src={userIcon} />
            </IconHolder>
            {
                visible && clickable  ? <UserOptions user={user} /> : null
            }
        </Container>
    )
}

const mapState = createStructuredSelector({
    user: SelectCurrentUser
})

export default connect(mapState)(UserIcon)