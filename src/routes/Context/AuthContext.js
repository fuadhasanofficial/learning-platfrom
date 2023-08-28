import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../Firebase/firebase.config';

export const AuthProviderContext = createContext();


const auth = getAuth(app)




const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)

    }
    const githubLogIn = () => {
        return signInWithPopup(auth, gitProvider);

    }


    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);

    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);

    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })

        return () => {
            unSubscribe()
        }
    }, [])
    const authInfo = {
        user,
        googleSignIn,

        register,
        logIn,
        logOut,
        githubLogIn,
        loading
    }
    return (
        <AuthProviderContext.Provider value={authInfo}>
            {children}
        </AuthProviderContext.Provider>
    );
};

export default AuthContext;