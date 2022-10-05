import { Outlet, Link } from 'react-router-dom'
import './navigation.styles.scss'
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'


const Navigation = () => {
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
                    <Link to='/cart' className='nav-link'>
                        Cart
                    </Link>
                    <Link to='/checkout' className='nav-link'>
                        Checkout
                    </Link>
                    <Link to='/logout' className='nav-link'>
                        Logout 
                    </Link>
                    <Link to='/signin' className='nav-link'>
                        Sign in 
                    </Link>

                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation
