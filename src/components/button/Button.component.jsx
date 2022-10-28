import { BaseButton, InvertedButton, GoogleSignInButton} from './button.styles'

/*In this component, we have 3 different buttons on the buttonType props:
google-sign-in, default and inverted. */ 

export const BUTTON_TYPE_CLASSES = {
    // When set an object, we can access the types when calling the const.
    // Then, we can use the autocomplete.
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted'
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => 
// The standard model is the base. So, we dont need a buttonType feat.
({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton
}[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return <CustomButton {...otherProps}>{children}</CustomButton>
};

export default Button;
