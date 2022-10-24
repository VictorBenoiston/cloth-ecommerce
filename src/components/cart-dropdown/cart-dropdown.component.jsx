import { useContext, useState } from 'react';
import { CartContext } from '../../context/cart.context';
import { useNavigate } from 'react-router-dom'


import Button from '../button/Button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)

    const navigate = useNavigate()

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return (



        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} cartItem={cartItem} />
                    ))
                ) : (
                    <span className='empty-message'> Your Cart is empty</span>
                )}
            </div>
            <Button buttonType='default' onClick={goToCheckoutHandler}>
                GO TO CHECKOUT
            </Button>
        </div>
    );
};

export default CartDropdown;

