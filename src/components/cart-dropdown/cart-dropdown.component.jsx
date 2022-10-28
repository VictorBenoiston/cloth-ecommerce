import { useContext, useState } from 'react';
import { CartContext } from '../../context/cart.context';
import { useNavigate } from 'react-router-dom'



import CartItem from '../cart-item/cart-item.component';

import Button from '../button/Button.component';
import  { CartDropDownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)

    const navigate = useNavigate()

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return (



        <CartDropDownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} cartItem={cartItem} />
                    ))
                ) : (
                    <EmptyMessage>Your Cart is empty</EmptyMessage>
                )}
            </CartItems>
            <Button onClick={goToCheckoutHandler}>
                GO TO CHECKOUT
            </Button>
        </CartDropDownContainer>
    );
};

export default CartDropdown;

