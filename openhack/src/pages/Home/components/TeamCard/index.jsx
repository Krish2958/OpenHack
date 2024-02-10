import React from 'react';
import { Envelope, Instagram, Linkedin, Github } from 'react-bootstrap-icons';
import './TeamCard.css';
import { Assets } from '../../../../assets';

const TeamMemberCard = ({ name, batch, role, imageUrl, email, linkedin, instagram, github }) => {
  return (
    <div className="card p-0">
      <div className="card-image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-content d-flex flex-column align-items-center">
        <h4 className="pt-2">{name}</h4>
        <h5>{batch}</h5>
        <h6>{role}</h6>
        <ul className="social-icons d-flex justify-content-center">
          {email && (
            <li style={{ '--i': 1 }}>
              <a href={`mailto:${email}`}>
                <Envelope className="social-icon" />
              </a>
            </li>
          )}
          {linkedin && (
            <li style={{ '--i': 2 }}>
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="social-icon" />
              </a>
            </li>
          )}
          {instagram && (
            <li style={{ '--i': 3 }}>
              <a href={instagram} target="_blank" rel="noopener noreferrer">
                <Instagram className="social-icon" />
              </a>
            </li>
          )}
          {github && (
            <li style={{ '--i': 4 }}>
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Github className="social-icon" />
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    { name: 'Krish Maheshwari',batch: 'III, CSE-IoT', role: 'Technical Operations Lead', imageUrl: Assets.KrishMaheshwari, email: 'krishm.km17@gmail.com', linkedin: 'https://www.linkedin.com/in/krishm2958/', instagram: 'https://www.instagram.com/krishm.km18/', github: 'https://github.com/krish2958' },
    { name: 'Lakshay Agarwal',batch: 'III, ME', role: 'Design Operations Help', imageUrl: Assets.LakshayAgarwal, email: 'lakshay@example.com', linkedin: 'https://www.linkedin.com/in/lakshayagarwal/', instagram: 'https://www.instagram.com/lakshayagarwal/' },
    { name: 'Rishi Raj Ojha',batch: 'III, ME', role: 'Managment Help', imageUrl: Assets.RishiRajOjha, email: 'rishi@example.com', linkedin: 'https://www.linkedin.com/in/rishirajojha/', instagram: 'https://www.instagram.com/rishirajojha/' },
    { name: 'Tushar Daga',batch: 'II, CSE-IoT', role: 'Dev Help', imageUrl: Assets.TusharDaga, email: 'tushar@example.com', linkedin: 'https://www.linkedin.com/in/tushardaga/', instagram: 'https://www.instagram.com/tushardaga/', github: 'https://github.com/tushardaga' },
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
