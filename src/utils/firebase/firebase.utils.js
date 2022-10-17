import { initializeApp } from "firebase/app";
import {
    getAuth,    // Gets the auth
    signInWithRedirect,   //  sign in with google redirect
    signInWithPopup,   // sign in with google pop up
    GoogleAuthProvider,    // google provider 
    createUserWithEmailAndPassword,   // Creates the user with email and pass
    signInWithEmailAndPassword     // sign in the user with email and pass
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'
import { Form } from "react-router-dom";

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

// seting the google provider. Each provider need to be setted as such. Facebook, email/password, etc
const googleProvider = new GoogleAuthProvider() // You can have different auth providers, such as fb, github..

googleProvider.setCustomParameters({
    prompt: "select_account"
})

// You only need one auth.
export const auth = getAuth();

// Using the google sigIn pop up
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

// Using the Google signIn with redirect 
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)


export const db = getFirestore();


//Checking weather there is a user ('user') or not. If false, create a new one.
export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef);
    // console.log(userSnapshot.exists()) // Check for the existence of the snapshot on the db

    if (!userSnapshot.exists()) {  // the ! works to reverse, so if its false (doesnt exist, it will trigger)
        const { displayName, email } = userAuth;
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation   // Its on the end, bc it'll set the previous features to 
                                           // the actual values in ...additionalInformation.
            });
        } catch (error) {
            console.log('Error creating the user', error.message)
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (formFields) => {
    const {email, password, displayName} = formFields
    if (!email || !password) return;
    
    return createUserWithEmailAndPassword(auth, email, password)

}

export const signInAuthUserWithEmailAndPassword = async (formFields) => {
    const {email, password} = formFields
    if (!email || !password) return;
    return signInWithEmailAndPassword(auth, email, password)

}
