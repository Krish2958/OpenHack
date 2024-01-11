// SignIn.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import  supabase from '../../supabase';
import "./SignIn.css";

export const SignIn = ({ onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    // Call your Supabase sign in function here
    const { user, error } = await supabase.auth.signIn({ email, password });

    // Handle success or error
    if (user) {
      onSignIn(user); // Pass user data to parent component
    } else {
      console.error('Sign In Error:', error.message);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Button variant="primary" onClick={handleSignIn}>
          Sign In
        </Button>
      </Form>
    </div>
  );
};
