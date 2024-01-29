import React from 'react';
import { Assets } from '../../assets';
import * as Icon from 'react-bootstrap-icons';
import './Home.css';

export const Home = () => {
  return (
    <div className='home'>
    <div className='coming-soon'>
          <video autoPlay loop muted className='coming-soon__brand-logo'>
            <source src={Assets.OpenHackWebM} type="video/webm" />
            <source src={Assets.OpenHackMp4} type="video/mp4" />
            Oops! The OpenHack 2024 logo video couldn't be loaded. Stay tuned for exciting updates!
            </video>
        <h1 className='coming-soon__year'>24-25 FEB, 2024</h1>
        <div className='name-container'><h3 className='coming-soon__text'>Registrations Open Soon.</h3>
        <h3 className='coming-soon__text-1'>Stay Tuned.</h3></div>
        <span className='coming-soon__icon-container'>
          <a href="tel:+917568379160" >
            <Icon.Telephone className='coming-soon__icon' color='#8CE8E5' />
          </a>
          <a href="mailto:info_openhack@mlvti.ac.in" target="_blank" rel="noopener noreferrer">
            <Icon.EnvelopeOpen className='coming-soon__icon' color='#8CE8E5' />
          </a>
          <a href="https://www.instagram.com/openhack2024/" target="_blank" rel="noopener noreferrer">
            <Icon.Instagram className='coming-soon__icon' color='#8CE8E5' />
          </a>
        </span>
        </div>
          <div className='sponsors'>
              
              <div className='sponsor-title'>
                <h3 className='title-heading'>Powered By</h3>
                <img className='title-sponsor' src={Assets.ReadyBytes} alt='Ready Bytes' />
              </div>

              <div className='sponsor-associate'>
              <h3 className='associate-heading'>In Association with</h3>
                <div className='ass'>
                 <img className='associate' src={Assets.Take2Technology} alt='Take 2 Technology' />
                 <img className='associate' src={Assets.VersatilePrime} alt='Versatile Prime' />
                </div>
              </div>
              <div className='sponsor-ally'>
              <h3 className='digital-heading'>Digital Ally</h3>
                <img className='digital-ally' src={Assets.TrickyLab} alt='Tricky' /></div>
            </div>
        <div className='about-card'>
          <div className='about-card-content'>
          <h1 className='about-card-title'>About OpenHack 2024</h1>
          <p className="about-card-description">Tech Bizz Club presents OpenHack 2024, the first Open Source Hackathon at MLVTEC, Bhilwara. Ignite innovation in a code-driven journey—be part of the revolution! #CodeKar</p>
          </div>
          <img className='about-card-bg-img' src={Assets.About} alt="about" />        
        </div>
        <div className='about-theme'>
          <div className='about-theme-content'>
          <h1 className='about-theme-title'>About the Theme</h1>
          <h1 className='about-theme-title-1'>Igniting Your Coding Journey</h1>
          <p className="about-theme-description">Fuel your coding journey at OpenHack, a celebration of open source collaboration. Ignite innovation and share ideas in this dynamic hackathon. Dive into the world of collaborative coding, where every line written contributes to the tapestry of open source projects. Join us and let your code spark the next wave of technological advancements!</p>
          </div>
          <img className='about-theme-bg-img' src={Assets.Code} alt="about" />        
        </div>
        <div className='about-prize'>
          <div className='about-prize-content'>
          <h1 className='about-prize-title'>Prize Pool</h1>
          <h1 className='about-prize-title-1'>Rs.9000/-*</h1>
          <p className="about-prize-description">*Including cash prizes, goodies, bounties and more.</p>
          </div>
          <img className='about-prize-bg-img' src={Assets.Prize} alt="about" />        
        </div>
        <div className='about-club'>
          <div className='about-club-content'>
          <h1 className='about-club-title'>About Tech Bizz Club</h1>
          <p className="about-club-description">A community created by students for students, Tech Bizz Club places an emphasis on the intellectual, technical, and general growth of members by planning events that encourage students to learn about technology and build original projects utilising cutting-edge tools.
Hackathons, project marathons, and interesting events are among the objectives of Tech Bizz.
</p>
          </div>
          <img className='about-club-bg-img' src={Assets.TechBizz} alt="about" />        
        </div>
    </div>
  );
};