//this goes in REACT

import { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const[userData, setUserData] = useState({
        token: undefined,
        user: undefined
    });

    useEffect(() => {
        //check for stored token in localStorage at startup
        const token = localStorage.getItem('auth-token');
        if (token) {
            setUserData(prev => ({
                ...prev,
                token: token
            }));
            //optionally, you might want to verify the token with your backend here
            //and load the user data id the token is still vlaid
        }
    }, []);

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;