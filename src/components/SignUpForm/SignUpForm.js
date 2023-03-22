import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { CreateUser } from "../../functions/emailFunctions";

// CSS
import "./SignUpForm.css"

export const SignUpForm = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUpFunction = async (event) => {
        event.preventDefault()
        try {
            const userCredentials = await CreateUser(email, password)
            if (userCredentials.user) {
                console.log('SignUp Form: ', userCredentials.user);
                navigate('/Home');
                setEmail("");
                setPassword("");
            } 
        } catch (error) {
            alert(error)
        }
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