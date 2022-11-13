import { Outlet, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { selectIsCartOpen } from '../../store/cart/cart.selector'
import { selectCurrentUser } from '../../store/user/user.selector'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import { NavigationContainer, NavLinks, NavLink, LogoContainer } from  './navigation.styles.jsx'


const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

    // const signOutHandler = async () => {
    //     // Once you log out, the user is re-set to null.
    //     await signOutUser()
    //     setCurrentUser(null)
    //     console.log(currentUser)
    //     console.log('Logged out')
    // }

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
