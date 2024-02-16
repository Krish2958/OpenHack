import React from 'react';
import { Envelope, Instagram, Linkedin, Github, Reddit } from 'react-bootstrap-icons';
import './TeamCard.css';
import { Assets } from '../../../../assets';

const TeamMemberCard = ({ name, batch, role, imageUrl, email, linkedin, instagram, github, reddit }) => {
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
          {reddit && (
            <li style={{ '--i': 2 }}>
              <a href={reddit} target="_blank" rel="noopener noreferrer">
                <Reddit className="social-icon" />
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
    { name: 'Krish Maheshwari',batch: 'III, CSE-IoT', role: 'Technical Lead', imageUrl: Assets.KrishMaheshwari, email: 'krishm.km17@gmail.com', linkedin: 'https://www.linkedin.com/in/krishm2958/', instagram: 'https://www.instagram.com/krishm.km18/', github: 'https://github.com/krish2958' },
    { name: 'Lakshay Agarwal',batch: 'III, ME', role: 'Desgin Operations', imageUrl: Assets.LakshayAgarwal, email: 'lakshayagarwal490@gmail.com', linkedin: ' https://www.linkedin.com/in/lakshayagarwal490/', instagram: ' https://www.instagram.com/here.lakshay/'},
    { name: 'Rishi Raj Ojha',batch: 'III, ME', role: 'Managment', imageUrl: Assets.RishiRajOjha, email: 'rishirajojha42@gmail.com', linkedin: ' https://www.linkedin.com/in/rishi-raj-ojha-428b16271/', instagram: 'https://www.instagram.com/orishiraj_27/' },
    { name: 'Tushar Daga',batch: 'II, CSE-IoT', role: 'Technical Help', imageUrl: Assets.TusharDaga, email: 'tushardaga899@gmail.com', linkedin: ' https://www.linkedin.com/in/tushar-daga-2068a9237', github: 'https://github.com/titaniumtushar' },
    { name: 'Ajay Tamboli',batch: 'I, TC', role: 'Design', imageUrl: Assets.AjayTamboli, email: 'tamboliajay77@gmail.com', linkedin: 'https://www.linkedin.com/in/ajay-tamboli ', x: 'https://twitter.com/AjayTamboli13', reddit:'https://www.reddit.com/u/Ajay1210x/s/zRx4sRdUup' },
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
