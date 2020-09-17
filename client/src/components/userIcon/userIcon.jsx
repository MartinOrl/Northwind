import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { auth } from '../../firebase/firebase'

import { Container, IconHolder, Icon, UserOptionsContainer, Option } from './userIconStyles'

import userIcon from '../../assets/user.svg'

import { SelectCurrentUser } from '../../redux/user/userSelectors'


const UserOptions = ({user}) => {
    return(
        <UserOptionsContainer>
        {
            user ? <Option onClick={() => user ? window.location.href='/myOrders' : window.location.href='/signIn'} >My Orders</Option> : null
        }
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

    const handleResponsiveClick = () => {
        if(window.innerWidth < 768){
            window.location.href='/myOrders'
        }
    }

    return(
        <Container>
            <IconHolder onClick={() => {setVisible(!visible); handleResponsiveClick()}}>
                <Icon src={userIcon}  />
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