import React, { useState } from "react";
import { SignIn } from "../../functions/emailFunctions";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    let navigate = useNavigate();
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    const signIn = async (event) => {
        event.preventDefault();
        try {
            const userCredential = await SignIn(emailValue, passwordValue);
            if (userCredential.user) {
                console.log('Login Form: ', userCredential.user);
                navigate('/Home');
                setEmailValue('');
                setPasswordValue('');
            }
        } catch (error) {
            console.log(error)
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password. Please try again');
            } else if (errorCode === 'auth/user-not-found') {
                alert(`Can't find email: ${emailValue} in our database. Please make sure you are using the correct email.`);
            } else {
                alert(errorMessage);
            }
        }
    }

    return (
        <div className="container" margin-top="20px">
            <form
                onSubmit={(e) => signIn(e)}
            >
                <label>What is your email?</label>
                <input
                    type="email"
                    placeholder="Email"
                    value={emailValue}
                    onChange={(event) => setEmailValue(event.target.value)}
                />
                <label>What is your password?</label>
                <input
                    type="password"
                    placeholder="Password"
                    value={passwordValue}
                    onChange={(event) => setPasswordValue(event.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;