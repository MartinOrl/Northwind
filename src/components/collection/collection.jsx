import React from 'react';
import { useParams } from 'react-router-dom'

const Collection = () => {
    let { id } = useParams()
    var title = id.split("-").map(text => text.charAt(0).toUpperCase() + text.slice(1)).join(' ')

    return(
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
        </div>
    )
};

export default Collection 

