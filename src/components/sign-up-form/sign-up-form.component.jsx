import { useActionData } from 'react-router-dom'
import { useState } from 'react'
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect,
    signInWithGooglePopup
} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import Button, {BUTTON_TYPE_CLASSES} from '../button/Button.component'
import './sign-up-form.styles.scss'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;


    // console.log(formFields)

    const handleSubmit = async (event) => {
        event.preventDefault();

        // A reset function for all the fields after creating user.
        const resetFormFields = () => {
            setFormFields(defaultFormFields)
        }

        if (password != confirmPassword) {
            alert('Passwords do not match!')
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                formFields
            );


            resetFormFields()
            alert(`Succesfully created! Welcome, ${displayName}`)


            await createUserDocumentFromAuth(user, { displayName })
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use!')
            } else {
                console.log('Error! ', error)
            }
        }
    }

    // Logging with the google popUp

    // const logGoogleUser = async () => {
    //     const { user } = await signInWithGooglePopup()
    //     const { displayName, uid } = user
    //     // setName(`, ${displayName}!`)
    //     // setAccessToken(`Your unique id is: ${uid}`)
    //     const userDocRef = await createUserDocumentFromAuth(user)
    // }


    const handleChange = (event) => {
        const { name, value } = event.target

        setFormFields({ ...formFields, [name]: value }) /*  The name will be set by the name tag on each input
         The values in formFields are kept (...formFields) but the ones
         which are not changing */
    }

    return (
        <div className='sign-up-container' >
            <h2>I do not have an account </h2>
            <span>Sign up with your email and password</span>
            <form className='signUpFormgroup' onSubmit={(handleSubmit)}>
                <FormInput
                    label='Display Name'
                    type="text"
                    required
                    name='displayName'    // The displayName is the value on the event.target 
                    onChange={handleChange}
                    value={displayName} />  {/* The displayName is the value on the event.target */}
                <FormInput
                    label='E-mail'
                    type="email"
                    required
                    name='email'   // The email is the value on the event.target 
                    onChange={handleChange}
                    value={email} />  {/* The email is the value on the event.target */}
                <FormInput
                    label='Password'
                    type="password"
                    required
                    name='password'
                    onChange={handleChange}
                    value={password} />  {/* The password is the value on the event.target */}

                <FormInput
                    label='Confirm Password'
                    type='password'
                    required
                    name='confirmPassword'
                    onChange={handleChange}
                    value={confirmPassword}
                />
                <div className='buttons-container'>
                    <Button type='submit'>Sign up</Button >
                </div>

            </form>
        </div>

    )
}

export default SignUpForm
