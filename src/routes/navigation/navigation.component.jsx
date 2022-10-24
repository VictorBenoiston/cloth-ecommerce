import { Outlet, Link } from 'react-router-dom'
import './navigation.styles.scss'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { useContext } from 'react'
import { UserContext } from '../../context/user.context'
import { CartContext } from '../../context/cart.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'


const Navigation = () => {

    // Getting the current value from the UserContext element.
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)
    // console.log(currentUser)
    // After the setter function being called in signIn, it triggers every component
    // that has a currentUser, it should also re-render.



    // const signOutHandler = async () => {
    //     // Once you log out, the user is re-set to null.
    //     await signOutUser()
    //     setCurrentUser(null)
    //     console.log(currentUser)
    //     console.log('Logged out')
    // }

    return (
        <>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        Shop
                    </Link>
                    <Link to='/checkout' className='nav-link'>
                        Checkout
                    </Link>

                    {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutUser}>Sign Out</span>)
                            : (<Link to='/auth' className='nav-link'>
                                Sign in
                            </Link>)
                    }
                    <CartIcon className='nav-link' />

                </div>
                
                
                {/* {isCartOpen? <CartDropdown/>
                : null} */}

                {isCartOpen && <CartDropdown/>} {/* True && True. If both are true, its going to return
                                                    the last parameter (CartDropdown)  */}
            </div>

            <Outlet />
        </>
    )
}

export default Navigation
