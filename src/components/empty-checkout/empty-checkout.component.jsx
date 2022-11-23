import React from "react";
import { Link } from "react-router-dom";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button.component";

import emptyCart from '../../assets/empty-cart.png'


import {EmptyCartImg, CheckoutEmptyDiv, EmptyCartButton} from './empty-checkout.styles'

const EmptyCheckout = () => {
    return (
        <CheckoutEmptyDiv>
            <h2>
                Your cart is empty!
            </h2>
            <EmptyCartImg src={emptyCart}/>
            <Link to={'/shop'}>
            <EmptyCartButton buttonType={BUTTON_TYPE_CLASSES.base}>
                Browse shop
            </EmptyCartButton>
            </Link>
            
        </CheckoutEmptyDiv>)

}

export default EmptyCheckout;
