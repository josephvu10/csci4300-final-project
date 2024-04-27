//this goes in REACT
"use client";
import { createContext, useState, useEffect, useContext } from "react";
import { API_URL } from "../../constants";

import axios from "axios";

/**
 * @type {import('react').Context<{userData: {token?: string, user?: {id: string, email: string}}, setUserData: (user?: any) => void>}}
 */
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  const setSetUserData = (userData) => {
    if (userData == null) {
      localStorage.removeItem("auth-token");
    } else {
      if (userData.token == null) {
        localStorage.removeItem("auth-token");
      } else {
        localStorage.setItem("auth-token", userData.token);
      }
    }

    setUserData(userData);
  };

  useEffect(() => {
    //check for stored token in localStorage at startup
    const token = localStorage.getItem("auth-token");
    if (token) {
      axios
        .get(`${API_URL}/api/users/tokenInfo`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUserData((prev) => ({
            ...prev,
            token: token,
            user: {
                id: response.data.id,
                email: response.data.email
            }
          }));
        })
        .catch((error) => {
          console.error(error);
          if (error.response) {
            console.error(error.response.data);
          }
        });

      //optionally, you might want to verify the token with your backend here
      //and load the user data id the token is still vlaid
    }
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData: setSetUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

export const useUserCtx = () => useContext(UserContext);
