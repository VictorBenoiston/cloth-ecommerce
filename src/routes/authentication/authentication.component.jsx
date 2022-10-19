import { useState, useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth'

import './authentication.styles.scss'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import SignInForm from '../../components/sign-in-form/sign-in-form.component'



const Authentication = () => {

    // Using the redirect, we need to use a useEffect, to every time we login again, we trigger the function.
    // useEffect(() => {
    //     const asFn = async () => { // We need to create a function, bc the useEffect cant be async.
    //         const response = await getRedirectResult(auth);
    //         console.log(response)
    //         if (response) { // If there is a repsonse, i.e, its not null.
    //             const { user } = response
    //             const userDocRef = await createUserDocumentFromAuth(user)
    //             setName(`, ${user.displayName}`)
    //         }

    //     }
    //     asFn()
    // }, []) // Empty array indicates that it'll run only when loading the page.)

    // Logging with the google popUp

    // const logGoogleUser = async () => {
    //     const { user } = await signInWithGooglePopup()
    //     const { displayName, uid } = user
    //     setName(`, ${displayName}!`)
    //     setAccessToken(`Your unique id is: ${uid}`)
    //     const userDocRef = await createUserDocumentFromAuth(user)
    // }

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
