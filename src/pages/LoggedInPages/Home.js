import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut } from '../../functions/emailFunctions';
import { AuthContext } from '../../context/AuthContext';

function Home() {
    console.log('here in Home Page')

    let navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const logOut = () => {
        LogOut();
        navigate('/login');
    }

    return (
        <>
            <h1>Hi {user.email}</h1>
            <button onClick={logOut}>Log Out!</button>
        </>
    )
}

export default Home