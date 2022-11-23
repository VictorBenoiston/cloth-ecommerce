import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import { selectCartTotal } from '../../store/cart/cart.selector'
import { selectCurrentUser } from '../../store/user/user.selector'
import { setCartToClear } from '../../store/cart/cart.action';


import { BUTTON_TYPE_CLASSES } from "../button/Button.component";
import { PaymentButton } from './payment-form.styles'
import { PaymentFormContainer, FormContainer } from './payment-form.styles'
import { notifySuccess, notifyFailure } from '../../utils/toastify/toastify.utils'

import { ToastContainer } from "react-toastify";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();
    const cleanCart = () => dispatch(setCartToClear());
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);

    const paymentHandler = async (e) => {
        e.preventDefault();

        // Preventing to go further if no stripe or elements were passed.
        if (!stripe || !elements) {
            return;
        }

        setIsProcessingPayment(true);

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({amount: amount * 100}),
        }).then((res) => res.json());

        const {paymentIntent: { client_secret }} = response;

        // // Specificaly for card payments
        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'Guest'
                },
            },
        });

        setIsProcessingPayment(false);

        if (paymentResult.error) {
            notifyFailure();

        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                notifySuccess();
                cleanCart();
            } 
        }
    };

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment: </h2>
                <CardElement />
                <PaymentButton isLoading={isProcessingPayment}
                    buttonType={BUTTON_TYPE_CLASSES.inverted}>
                    Pay now
                </PaymentButton>
            </FormContainer>
            <ToastContainer />
        </PaymentFormContainer>
    );
};

export default PaymentForm;