import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCRVruaNQw10JKT2vJhd1i6imLa9DD_gc4",
    authDomain: "crwn-clothing-react-app.firebaseapp.com",
    projectId: "crwn-clothing-react-app",
    storageBucket: "crwn-clothing-react-app.appspot.com",
    messagingSenderId: "875722783755",
    appId: "1:875722783755:web:fe20fae3e2c3881cafdb0e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export default signInWithGooglePopup
