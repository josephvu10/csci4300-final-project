//this goes in REACT
"use client";
import { createContext, useState, useEffect, useContext } from "react";
import { API_URL } from "../../constants";

import axios from "axios";

/**
 * @type {import('react').Context<{userData: {ready: boolean, token?: string, user?: {id: string, email: string}}, setUserData: (user?: any) => void , logout: () => void>}}
 */
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [ready, setReady] = useState(false);
  const [userData, setUserData] = useState({
    ready: false,
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

  const logout = () => {
    if (userData == null) return;
    localStorage.removeItem("auth-token");
    setUserData((prev) => ({
      ready: prev.ready,
      token: undefined,
      user: undefined,
    }));
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
          console.log("init load", response.data, {
            token: token,
            user: {
              id: response.data.id,
              email: response.data.email,
            },
          });
          setUserData((prev) => ({
            ...prev,
            token: token,
            user: {
              id: response.data.id,
              email: response.data.email,
            },
          }));
        })
        .catch((error) => {
          console.error(error);
          if (error.response) {
            console.error(error.response.data);
          }
        })
        .finally(() => {
          setReady(true);
        });

      //optionally, you might want to verify the token with your backend here
      //and load the user data id the token is still vlaid
    } else {
      setReady(true);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ ready, userData, setUserData: setSetUserData, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

export const useUserCtx = () => useContext(UserContext);
