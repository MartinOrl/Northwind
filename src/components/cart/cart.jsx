import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import CartItem from '../cartItem/cartItem'

import { CartItems } from '../../testSuite'
import { AddItem, RemoveItem, ClearFromCart } from '../../redux/cart/cartActions';
import { selectCartItems } from '../../redux/cart/cartSelectors'
import { createStructuredSelector } from 'reselect'


const Cart = ({cart, addItem, removeItem, clearItem}) => {
    useEffect(() => {
        CartItems.map(item => addItem(item))
    }, [addItem])
    return(
        <div>
            {
                cart ? cart.map(item => <CartItem item={item} {...item} addItem={addItem} removeItem={removeItem} clearItem={clearItem} />) : null
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cart: selectCartItems
  })
  
  const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(AddItem(item)),
    removeItem: item => dispatch(RemoveItem(item)),
    clearItem: item => dispatch(ClearFromCart(item))
  })

export default connect(mapStateToProps, mapDispatchToProps)(Cart)