import { createContext, useEffect, useState } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener, signOutUser } from '../utils/firebase/firebase.utils'

// The actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

export const UserProvider = ({ children }) => {
    // Every component that has a currentUser, will re-render after the setCurrentUser
    // Function being called.
    const [currentUser, setCurrentUser] = useState(null)
    const value = { currentUser, setCurrentUser }

    // Calling the signOutUser here, garantees that there is no user logged.
    // signOutUser()

    // Here's the magic. Once we log in, the auth triggers the listener, and re-renders
    // with no need to set the user by the setter function.
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            // If there is not current user with the google log in, it will create.
            if(user){
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
