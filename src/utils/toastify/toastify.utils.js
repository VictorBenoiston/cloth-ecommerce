import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

export const notifySuccess = () => {
    toast.success('Payment Successful!', {
        position: "bottom-left",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
}

export const notifyFailure = () => {
    toast.error('Oops! Something went wrong, try again.', {
        position: "bottom-left",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
}