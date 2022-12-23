import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { useNavigate } from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component'

import Button from '../button/Button.component';
import  { CartDropDownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles'
import { setIsCartOpen } from '../../store/cart/cart.action';


const CartDropdown = () => {
    const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems);
    // const cartItems = selectCartItems

    const navigate = useNavigate()

    const goToCheckoutHandler = () => {
        navigate('/checkout')
        dispatch(setIsCartOpen(false))
        console.log('its workoing')
    }

    return (

        <CartDropDownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((item) => 
                        <CartItem key={item.id} cartItem={item} />
                    )
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

