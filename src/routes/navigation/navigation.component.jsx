import { Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { selectIsCartOpen } from '../../store/cart/cart.selector'
import { selectCurrentUser } from '../../store/user/user.selector'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { signOutStart } from '../../store/user/user.action'

import { NavigationContainer, NavLinks, NavLink, LogoContainer } from  './navigation.styles.jsx'
import { setIsCartOpen } from '../../store/cart/cart.action'


const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);
    const dispatch = useDispatch();

    const handleSwitchingPages = () => dispatch(setIsCartOpen(false))

    const signOutUser = () => dispatch(signOutStart());

    return (
        <>
            <NavigationContainer> 
                <LogoContainer to='/'>
                    <CrwnLogo className='logo' onClick={handleSwitchingPages}/>
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        Shop
                    </NavLink>
                    <NavLink to='/checkout' onClick={handleSwitchingPages}>
                        Checkout
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>)
                            : (<NavLink to='/auth' onClick={handleSwitchingPages}>
                                Sign in
                            </NavLink>)
                    }
                    <CartIcon className='nav-link' />
                </NavLinks>
                
                
                {/* {isCartOpen? <CartDropdown/>
                : null} */}

                {isCartOpen && <CartDropdown/>} 

            </NavigationContainer>

            <Outlet />
        </>
    )
}

export default Navigation
