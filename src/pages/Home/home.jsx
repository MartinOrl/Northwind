import React from 'react'
import styled from 'styled-components'

import Directory from '../../components/directory/directory'

const GlobalContainer = styled.div`
`


const Home = () => {

    return(
        <GlobalContainer>
            <Directory />
        </GlobalContainer>
    )
}

export default Home;