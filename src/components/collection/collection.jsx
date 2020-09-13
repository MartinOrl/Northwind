import React from 'react';
import { useParams } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { SelectCollection } from '../../redux/shopData/shopUtils'
import { SelectShopItems } from '../../redux/shopData/shopSelectors'

import { CollectionItemsContainer } from './collectionStyles'

import CollectionItem from './collectionitem/collectionitem'

const Collection = ({shop}) => {
    let { id } = useParams()
    var collection = [];
    var title = id.split('-')
    if(title.length > 1){
        // eslint-disable-next-line
        title.map((item, i) => {
            if(i === 1){
                let temp = item
                temp = temp.charAt(0).toUpperCase() + temp.slice(1)
                title = [title[0], temp].join('')
            }
        })
    }
    else{
        title = title.join('')
    }
    
    collection = SelectCollection(shop, title)
    var displayTitle = id.split("-").map(text => text.charAt(0).toUpperCase() + text.slice(1)).join(' ')

    return(
        <div>
            <h1 style={{textAlign: 'center'}}>{displayTitle}</h1>
            <CollectionItemsContainer>
            {
                collection.length > 0 ? collection.map(item => <CollectionItem item={item} />) : null
            }
            </CollectionItemsContainer>
        </div>
    )
};

const mapState = createStructuredSelector({
    shop: SelectShopItems
})

export default connect(mapState)(Collection) 

