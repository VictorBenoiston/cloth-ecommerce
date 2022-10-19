import { useContext } from 'react'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import { CartContext } from '../../context/cart.context'

import './cart-icon.styles.scss'

const CartIcon = (() => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext)

    // It will invert the current value of isCartOpen
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

    return (
        <div className='cart-icon-container'>
            <ShoppingIcon className='shopping-icon' onClick={toggleIsCartOpen}/>
            <span className='item-count'>0</span>
        </div>
    )
})

export default CartIcon;
