import { createContext, useContext } from "react";
import useLocalStorage from '../hooks/useLocalStorage';
export const AuthContext = createContext();

const initialAuthState = {
    email: "",
    uid: ""
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('user', initialAuthState);

    function login (authData){
        setUser(authData);
    }

    function logout(){
        setUser(initialAuthState);
    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () =>{
    const authState = useContext(AuthContext);

    return authState;
}
