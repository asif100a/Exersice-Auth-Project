import { createContext } from "react";
import PropTypes from 'prop-types';
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();

    // Register with email & password
    const registerWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // Sign in with email & password
    const loginWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Sign in with Google
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    };



    // User sign out
    const signOutAccount = () => {
        return signOut(auth);
    };

    const authInfo = {
        registerWithEmailAndPassword,
        loginWithEmailAndPassword,
        signOutAccount,
        googleSignIn,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;