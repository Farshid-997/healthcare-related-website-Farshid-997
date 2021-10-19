import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import useFirebase from '../../Hooks/useFirebase';
const Login = () => {
    const { signInUsingGoogle } = useFirebase();
    return (
        <div>
            <h2>Please LogIn</h2>
            <Button variant="primary m-5 p-2">Sign In With Email</Button> <br />
            <Button onClick={signInUsingGoogle} variant="success mb-5 p-2">Google Sign In</Button> <br />

            <Link to="/register">New User?</Link>
        </div>
    );
};

export default Login;