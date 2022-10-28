import { useContext } from 'react'

import { CartContext } from '../../context/cart.context'

import { ShoppingSvg, CartIconContainer, ItemCount } from './cart-icon.styles'

const CartIcon = (() => {
    const { isCartOpen, setIsCartOpen, itemsCounter } = useContext(CartContext) //

    // It will invert the current value of isCartOpen
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

    return (
        <CartIconContainer>
            <ShoppingSvg onClick={toggleIsCartOpen}/>
            <ItemCount>{itemsCounter}</ItemCount> 
        </CartIconContainer>
    )
})

export default CartIcon;
