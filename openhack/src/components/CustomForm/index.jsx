import React from 'react';
import { Form, Button } from 'react-bootstrap';
import "./CustomForm.css";
const CustomForm = () => {
  return (
    <Form>
      <Form.Group controlId="teamName">
        <Form.Label>Team Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your team name" />
      </Form.Group>

      <Form.Group controlId="teamLeaderName">
        <Form.Label>Team Leader Name</Form.Label>
        <Form.Control type="text" placeholder="Enter team leader's name" />
      </Form.Group>

      <Form.Group controlId="collegeName">
        <Form.Label>College Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your college name" />
      </Form.Group>

      <Form.Group controlId="fieldOfStudy">
        <Form.Label>Field of Study</Form.Label>
        <Form.Control type="text" placeholder="Enter your field of study" />
      </Form.Group>

      <Form.Group controlId="batch">
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" placeholder="Enter your batch" />
      </Form.Group>

      {/* TODO: Adding Other fileds and modification */}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default CustomForm;
