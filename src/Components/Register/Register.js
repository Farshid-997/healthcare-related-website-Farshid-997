import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Register = () => {
    const handleReg = e => {
        console.log(email, password)
        e.preventDefault()
    }
    const [email, setEmail] = useState('')
    const [password, setPassWord] = useState('')
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
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <Link to="/login">Already Registered?</Link>
        </div>
    );
};

export default Register;