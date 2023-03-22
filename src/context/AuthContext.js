import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";

export const AuthContext = React.createContext();
 
export function AuthProvider({ children }){
  const [ user, setUser ] = useState(null);
  const [ pending, setPending ] = useState(true);

  useEffect(() => {
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
      setPending(false)
    });

    return unsubscribeFromAuthStateChanged;
  }, []);

  if(pending) {
    return <>Loading...</>
  }

  return (
    <AuthContext.Provider value={{ user }}>
      { children }
    </AuthContext.Provider>
  );
}



