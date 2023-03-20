import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import React, { useState } from 'react';


import "./SignUpForm.css"

export const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUpFunction = (event) => {
        event.preventDefault()
        // const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
        setEmail("");
        setPassword("")
    }

    return (
        <div className="container">
            <form onSubmit={(e) => signUpFunction(e)}>
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm
/* 
 Google Console : https://console.firebase.google.com/u/0/

 (1) create an app and disable google analytics,
 (2) go to Authentication => click get started (this example enables only native email/password)
 (3) go to home console, and add web services. From here you will get the initial code to initalize firebase

*/