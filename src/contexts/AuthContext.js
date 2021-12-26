// FIREBASE AUTH CONTEXT

import { useState, createContext, useContext, useEffect } from "react";
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebaseConfig from "../config/firebase";

import useLocalStorage from '../hooks/useLocalStorage';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const AuthContext = createContext();

const initialAuthState = {
    email: "",
    uid: "",
};

const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('user', initialAuthState);
    const value = { user };
    console.log(user);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => { // detaching the listener
            if (user) {
                let email = user.email;
                let uid = user.uid;
                setUser({...initialAuthState, email, uid});
                
            } else {
                setUser(initialAuthState);
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuthContext() {
    const authState = useContext(AuthContext);

    return authState;
}

export { AuthProvider, useAuthContext };




// LOCAL STORAGE CONTEXT
// import { createContext, useContext } from "react";
// import useLocalStorage from '../hooks/useLocalStorage';
// export const AuthContext = createContext();

// const initialAuthState = {
//     email: "",
//     uid: "",
// };

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useLocalStorage('user', initialAuthState);


//     function login(authData) {
//         setUser(authData);
//     }

//     function logout() {
//         setUser(initialAuthState);
//     }


//     return (
//         <AuthContext.Provider value={{ user, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuthContext = () => {
//     const authState = useContext(AuthContext);

//     return authState;
// }

