import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
// import { CreateUser } from "../../functions/emailFunctions";
import { useAuth } from '../../context/AuthContext';

// CSS
import "./SignUpForm.css"

export const SignUpForm = () => {
    const { signup } = useAuth()

    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSignUpSubmit(event) {
        event.preventDefault();

        if (password !== passwordConfirmation) {
            return setError("Passwords do not match")
        }

        try {
            setError('');
            setLoading(true);
            await signup(email, password);
            navigate('/');
        } catch {
            setError("Failed to create an account")
        }
        setLoading(false);
    }


    return (
        <div className="container">
            {error && <h1>{error}</h1>}
            <form onSubmit={handleSignUpSubmit}>
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <label>Password Confirmation</label>
                <input type="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />

                <button type='submit' disabled={loading}>Sign Up</button>
                <button>Already have an account?<Link to="/login">Log In</Link></button>
            </form>
        </div>
    )
}

export default SignUpForm
/* 
 Google Console : https://console.firebase.google.com/u/0/

 (1) create an app and disable google analytics,
 (2) go to Authentication => click get started (this example enables only native email/password)
 (3) go to Dashboard console, and add web services. From here you will get the initial code to initalize firebase

*/