import { Outlet, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { selectIsCartOpen } from '../../store/cart/cart.selector'
import { selectCurrentUser } from '../../store/user/user.selector'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { signOutStart } from '../../store/user/user.action'

import { NavigationContainer, NavLinks, NavLink, LogoContainer } from  './navigation.styles.jsx'


const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);
    const dispatch = useDispatch();

    const signOutUser = () => dispatch(signOutStart());

    return (
        <>
            <NavigationContainer> 
                <LogoContainer to='/'>
                    <CrwnLogo className='logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        Shop
                    </NavLink>
                    <NavLink to='/checkout'>
                        Checkout
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>)
                            : (<NavLink to='/auth' >
                                Sign in
                            </NavLink>)
                    }
                    <CartIcon className='nav-link' />

                </NavLinks>
                
                
                {/* {isCartOpen? <CartDropdown/>
                : null} */}

                {isCartOpen && <CartDropdown/>} {/* True && True. If both are true, its going to return
                                                    the last parameter (CartDropdown)  */}
            </NavigationContainer>

            <Outlet />
        </>
    )
}

export default Navigation
