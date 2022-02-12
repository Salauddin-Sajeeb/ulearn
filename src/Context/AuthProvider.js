import React, { createContext } from 'react';
import Usefirebase from '../Hooks/Usefirebase';
export const authContext = createContext()
const AuthProvider = ({ children }) => {
    const allContext = Usefirebase()
    return (
        <authContext.Provider value={allContext}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;