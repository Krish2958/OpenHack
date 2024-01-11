// SignUp.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import supabase from '../../supabase';
import "./SignUp.css";

export const SignUp = ({ onSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    // Call your Supabase sign up function here
    const { user, error } = await supabase.auth.signUp({ email, password });

    // Handle success or error
    if (user) {
      onSignUp(user); // Pass user data to parent component
    } else {
      console.error('Sign Up Error:', error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Button variant="primary" onClick={handleSignUp}>
          Sign Up
        </Button>
      </Form>
    </div>
  );
};
