import { initializeApp } from "firebase/app";
import {
    getAuth,    // Gets the auth
    signInWithRedirect,   //  sign in with google redirect
    signInWithPopup,   // sign in with google pop up
    GoogleAuthProvider,    // google provider 
    createUserWithEmailAndPassword,   // Creates the user with email and pass
    signInWithEmailAndPassword,     // sign in the user with email and pass
    signOut, 
    onAuthStateChanged
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
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

// You only need one auth. It keeps track of what user is logged in.
export const auth = getAuth();

// Using the google sigIn pop up
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

// Using the Google signIn with redirect 
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)


export const db = getFirestore();


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    // We have the 1st param as the key, and the 2nd as the db (--> SETTER)
    const collectionRef = collection(db, collectionKey);
    const batch =  writeBatch(db);

    // Here we have the objects to add. In this case, the category.
    // Inside it, we have all the documents (other objects)
    objectsToAdd.forEach((object) => {
        // For each object, is created a key (2nd param), based on a db (1st param)
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    // Start batching.
    await batch.commit();
    console.log('done')
};


export const getCategoriesAndDocuments = async () => {
    // 1st param: db, 2nd param: the key title. (--> GETTER)
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(docSnapshot => docSnapshot.data());

}


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

    return userSnapshot;
}


// Creating an user with email and pass
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return createUserWithEmailAndPassword(auth, email, password)

}

// Logging an user with email and pass
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)


// Open listener. Once it renders, its always opened to percieve changes.
// Once its called, it subscribes to a stream.
export const onAuthStateChangedListener = (callback) => 
    onAuthStateChanged(auth, callback, );

export const getCurrentUser = () => {
     return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
            auth,
            (userAuth) => {
                unsubscribe();
                resolve(userAuth);
            },
            reject
        );
     });
};
