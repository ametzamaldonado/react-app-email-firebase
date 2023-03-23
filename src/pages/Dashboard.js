import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Dashboard() {
    console.log('here in Dashboard Page')
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    async function handleLogout() {
        setError('')
        try {
            await logout();
            navigate('/login');
        } catch {
            setError("Failed to log out")
        }
    }

    return (
        <>
            {error && <h1>ERROR</h1>}
            <h1>Hi {currentUser.email}</h1>
            <button onClick={handleLogout}>Log Out!</button>
        </>
    )
}

export default Dashboard