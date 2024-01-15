import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './TeamDetails.css';

const TeamDetails = ({ onNext, teamDetails, setTeamDetails }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeamDetails({ ...teamDetails, [name]: value });
  };

  const handleNext = () => {
    // Validate the form data before proceeding to the next step
    // For simplicity, let's assume it's always valid for now
    onNext();
  };

  return (
    <Form  data-bs-theme="dark" className='form'>
        <h1 className='form-title'>Team Registration</h1>
      <Form.Group controlId="teamName">
        <Form.Label>Team Name</Form.Label>
        <Form.Control
        className='form-field'
          type="text"
          placeholder="Enter Team Name"
          name="teamName"
          value={teamDetails.teamName}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="collegeName">
        <Form.Label>College Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter College Name"
          name="collegeName"
          value={teamDetails.collegeName}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="numberOfMembers">
        <Form.Label>Number of Team Members</Form.Label>
        <Form.Control
          as="select"
          name="numberOfMembers"
          value={teamDetails.numberOfMembers}
          onChange={handleChange}
        >
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </Form.Control>
      </Form.Group>

      <Button variant="primary" onClick={handleNext}>
        Next
      </Button>

    </Form>
  );
};

export default TeamDetails;
