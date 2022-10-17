import './button.styles.scss'
import React from 'react'

/*In this component, we have 3 different buttons on the buttonType props:
google-sign-in, default and inverted. */ 

const Button = ({ children, buttonType, ...otherProps }) => {
    return (
        <div>
            <button className={`button-container ${buttonType}`}
                {...otherProps}>{children}</button>
        </div>
    )
}

export default Button
