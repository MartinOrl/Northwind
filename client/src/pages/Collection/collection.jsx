import React from 'react';
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { SelectCollection } from '../../redux/shopData/shopUtils'
import { SelectShopItems } from '../../redux/shopData/shopSelectors'

import { CollectionItemsContainer } from './collectionStyles'

import CollectionItem from '../../components/collection/collectionitem/collectionitem'
import { firestore } from '../../firebase/firebase';
import { AddItem } from '../../redux/shopData/shopActions';


class Collection extends React.Component{
    displayTitle = ''
    constructor(props){
        super(props);
        this.state = {
            collection: []
        }
    }
    
    componentDidMount(){
        let id = this.props.match.params.id
        const { shop, addItem } = this.props
        var title = id.split('-')
        if(title.length > 1){
            title = [title[0], title[1].charAt(0).toUpperCase() + title[1].slice(1)].join('')
        }
        else{
            title = title.join('')
        }
        let reduxCollection = SelectCollection(shop, title)
        if(reduxCollection.length === 0){
            firestore.collection('shopData').doc(`${title}`).get().then((doc) => {addItem(doc.data().items); this.setState({collection: [...doc.data().items]})})
        }
        else{
            this.setState({
                collection: [...reduxCollection]
            })
        }
        this.displayTitle = id.split("-").map(text => text.charAt(0).toUpperCase() + text.slice(1)).join(' ')
    };

    render(){
        const { collection } = this.state
        return(
            <div>
                <h1 style={{textAlign: 'center'}} >{this.displayTitle}</h1>
                <CollectionItemsContainer>
                {
                    collection.length > 0 ? collection.map(item => <CollectionItem item={item} /> ) : null
                }
                </CollectionItemsContainer>
            </div>
        )
    }
}


const mapState = createStructuredSelector({
    shop: SelectShopItems
})

const mapDispatch = dispatch => ({
    addItem: item => dispatch(AddItem(item))
})

export default connect(mapState, mapDispatch)(withRouter(Collection)) 

