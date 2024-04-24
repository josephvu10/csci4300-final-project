import { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({
        token: undefined,
        user: undefined
    });

    useEffect(() => {
        // Check for stored token in localStorage at startup
        try {
            const token = localStorage.getItem('auth-token');
            if (token) {
                setUserData({
                    token: token,
                    user: undefined // Clear user when setting token
                });
                // Optionally, you might want to verify the token with your backend here
                // and load the user data if the token is still valid
            }
        } catch (error) {
            console.error('Error accessing localStorage:', error);
            // Handle the error gracefully, such as redirecting to an error page
        }
    }, []);

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
