import './cart-dropdown.styles.scss'
import Button from '../button/Button.component';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
            </div>
            <Button buttonType='default'>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;
