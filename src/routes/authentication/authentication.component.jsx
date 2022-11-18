import { useState, useEffect } from 'react'

import './authentication.styles.scss'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import SignInForm from '../../components/sign-in-form/sign-in-form.component'



const Authentication = () => {

    const defaultFormFields = {
        email: '',
        password: '',
    }

    const [formFields, setFormFields] = useState(defaultFormFields);

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormFields({ ...formFields, [name]: value }) /*  The name will be set by the name tag on each input
         The values in formFields are kept (...formFields) but the ones
         which are not changing */
    }

    const { email, password } = formFields;



    return (
        <div className='authentication-container'>
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign in with Google redirect
            </button> */}
            <SignInForm/>
            <SignUpForm />
        </div>
    )
}

export default Authentication
