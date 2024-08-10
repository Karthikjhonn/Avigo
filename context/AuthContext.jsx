import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getUserData = async () => {
  try {
    const value = await AsyncStorage.getItem("user");
    if (value !== null) {
      console.log("Retrieved value:", value);
      return value;
    }
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  useEffect(() => {
    const fetchUserData = async () => {
      const isUser = await getUserData();
      setUser(isUser);
      console.log(isUser);
      
    };
    fetchUserData();
  }, []);
  console.log("Auth file");

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const userAuth = () => useContext(AuthContext);
