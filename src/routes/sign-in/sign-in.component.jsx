import { useState } from 'react'
import signInWithGooglePopup from '../../utils/firebase/firebase.utils'
import './sign-in.styles.scss'


const SignInComponent = () => {

    const [name, setName] = useState('')
    const [accesstoken, setAccessToken] = useState('')

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup()
        console.log(response)
        setName(`, ${response.user.displayName}!`)
        // setAccessToken(`Your access token is: ${response.user.}`)
    }

    return (
        <div className='signInDiv'>
            <h1>Sign in page</h1>
            <h2>Hello {name}</h2>
            <h2>{accesstoken}</h2>
            <button onClick={logGoogleUser}>
                Sign in with Google
            </button>
        </div>
    )
}

export default SignInComponent
