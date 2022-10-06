import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

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
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
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
                createdAt
            });
        } catch (error) {
            console.log('Error creating the user', error.message)
        }
    }

    return userDocRef;
}
