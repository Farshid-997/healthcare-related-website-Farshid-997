import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
    const handleReg = e => {
        e.preventDefault()
        if (password.length < 6) {
            setError('password must be 6 character');
            return;
        }
        if (!/^(?=.*\d)(?=(.*\W){2})(?=.*[a-zA-Z])(?!.*\s).{1,15}$/.test(password)) {
            setError('PassWord Inncorrect');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                console.log(user)
            })

    }
    const [email, setEmail] = useState('')
    const [password, setPassWord] = useState('')
    const [error, setError] = useState('')
    const auth = getAuth();
    const handlePasswordChange = e => {
        setPassWord(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    return (
        <div>
            <h2>Please Register</h2>

            <Form onSubmit={handleReg}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Form.Text className="text-danger ">
                    {error}
                </Form.Text> <br />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <Link to="/login">Already Registered?</Link>
        </div>
    );
};

export default Register;