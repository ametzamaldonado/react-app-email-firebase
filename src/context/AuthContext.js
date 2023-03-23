import React, { useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }){
  const [ currentUser, setCurrentUser ] = useState();
  const [ loading, setLoading ] = useState(true);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function login(email, password) {
    return  signInWithEmailAndPassword(auth, email, password)
  }

  function logout() {
    return (
      signOut(auth).then(() => {
          // Sign-out successful.
          alert('Successfully signed out!');
      }).catch((error) => {
          // An error happened.
          alert('Error encountered! ', error)
      })
  )
  }

  useEffect(() => {
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setCurrentUser(user);
      } else {
        // User is signed out
        setCurrentUser(null);
      }
      setLoading(false)
    });

    return unsubscribeFromAuthStateChanged;
  }, []);

  if(loading) {
    return <>Loading...</>
  }

  const value = {
    currentUser,
    login,
    signup,
    logout,
  }

  return (
    <AuthContext.Provider value={ value }>
      { !loading && children }
    </AuthContext.Provider>
  );
}



