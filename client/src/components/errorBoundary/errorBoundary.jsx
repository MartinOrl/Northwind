import React from 'react'

import { ErrorImageContainer, ErrorImageText, ErrorImageOverlay, LinkHome } from './errorBoundaryStyles'

class ErrorBoundary extends React.Component {
    constructor(){
        super()
        this.state = {
            hasErrored: false
        }
    }

    static getDerivedStateFromError(error){
        return { hasErrored: true }
    }

    componentDidCatch(error, info){
        
    }
    render(){
        if(this.state.hasErrored){
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/A040Lxr.png' />
                    <ErrorImageText>Sorry, this page appears to be broken!</ErrorImageText>
                    <LinkHome to='/'>Return Home</LinkHome>
                </ErrorImageOverlay>
            )
        }

        return this.props.children;
    }



}

export default ErrorBoundary