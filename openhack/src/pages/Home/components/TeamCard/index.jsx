import React from 'react';
import { Envelope, Instagram, Linkedin } from 'react-bootstrap-icons';
import './TeamCard.css';

const TeamMemberCard = ({ name, role, imageUrl }) => {
  return (
    <div className="col-lg-4">
      <div className="card p-0">
        <div className="card-image">
          <img src={imageUrl} alt="" />
        </div>
        <div className="card-content d-flex flex-column align-items-center">
          <h4 className="pt-2">{name}</h4>
          <h5>{role}</h5>

          <ul className="social-icons d-flex justify-content-center">
            <li style={{ '--i': 1 }}>
              <a href="/">
                <Envelope />
              </a>
            </li>
            <li style={{ '--i': 2 }}>
              <a href="/">
                <Linkedin />
              </a>
            </li>
            <li style={{ '--i': 3 }}>
              <a href="/">
                <Instagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    { name: 'Krish Maheshwari', role: 'Event Lead', imageUrl: 'https://images.pexels.com/photos/2746187/pexels-photo-2746187.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
    { name: 'Lakshay Agarwal', role: 'Bekar Aadmi Designer', imageUrl: 'https://images.pexels.com/photos/381843/pexels-photo-381843.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
    { name: 'Rishi Raj Ojha', role: 'Bekar Aadmi', imageUrl: 'https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
    { name: 'Tushar Daga', role: 'Harami Aadmi', imageUrl: 'https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
  ];

  return (
    <div className="team-container">
      <h1 className='team-title'>Organizing Team</h1>
      <div className="team-row">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
