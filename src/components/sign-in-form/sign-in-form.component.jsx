// import { useActionData } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import FormInput from '../form-input/form-input.component'
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button.component'
import './sign-in-form.styles.scss'
import { googleSignInStart, emailSignInStart } from '../../store/user/user.action'

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const dispatch = useDispatch();

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart());
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            dispatch(emailSignInStart(email, password))
            console.log('logged in')
            resetFormFields()

        } catch (error) {
            switch (error.code) {
                case 'auth/user-not-found':
                    alert('No user associated with this email.')
                    break;
                case 'auth/wrong-password':
                    alert('Wrong password for email.')
                    break;
                default:
                    console.log(error)
            }
        }

    }

    const handleChange = (event) => {
        const { name, value } = event.target;


        setFormFields({ ...formFields, [name]: value }) /*  The name will be set by the name tag on each input
         The values in formFields are kept (...formFields) but the ones
         which are not changing */
    }

    return (
        <div className='sign-in-container'>
            <h2>I already have an account </h2>
            <span>Sign in with your email and password</span>
            <form className='signUpFormgroup' onSubmit={(handleSubmit)}>
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

                <div className='buttons-container'>
                    <Button type='submit'>Sign in</Button >
                    <Button buttonType={BUTTON_TYPE_CLASSES.google} type='button'
                        onClick={signInWithGoogle}>
                        Sign in with Google
                    </Button>
                </div>
            </form>
        </div>

    )
}

export default SignInForm;
