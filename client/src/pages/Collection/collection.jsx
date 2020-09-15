import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { SelectCollection } from '../../redux/shopData/shopUtils'
import { SelectShopItems } from '../../redux/shopData/shopSelectors'

import { CollectionItemsContainer } from './collectionStyles'

import CollectionItem from '../../components/collection/collectionitem/collectionitem'
import { firestore } from '../../firebase/firebase';
import { AddItem } from '../../redux/shopData/shopActions';

const Collection = ({shop, addItem}) => {
    let { id } = useParams()
    var collection = [];
    var title = id.split('-')
    if(title.length > 1){
        title = [title[0], title[1].charAt(0).toUpperCase() + title[1].slice(1)].join('')
    }
    else{
        title = title.join('')
    }
    useEffect(() => {
        var test = SelectCollection(shop, title)
        if(test.length > 0){
            return ''
        }
        else{
            firestore.collection('shopData').doc(`${title}`).get().then(doc => addItem(doc.data().items))
        }
    }, [addItem, title, shop])
    
    
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

const mapDispatch = dispatch => ({
    addItem: item => dispatch(AddItem(item))
})

export default connect(mapState, mapDispatch)(Collection) 

