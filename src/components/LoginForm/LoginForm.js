import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(event) {
    event.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailValue, passwordValue);
      navigate("/");
    } catch (error) {
      const errorCode = error.code;
      if (errorCode === "auth/wrong-password") {
        setError("Wrong password. Please try again");
      } else if (errorCode === "auth/user-not-found") {
        setError(
          `Can't find email: ${emailValue} in our database. Please make sure you are using the correct email.`
        );
      } else {
        setError("Failed to log in");
      }
    }
    setLoading(false);
  }

  return (
    <div className="container" margin-top="20px">
      {error && <h1>{error}</h1>}
      <form onSubmit={handleLogin}>
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
        <button type="submit" disabled={loading}>
          Log In
        </button>
        <button>
          <Link to="/signup">Sign Up</Link>
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
