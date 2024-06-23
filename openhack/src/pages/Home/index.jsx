import React from 'react';
import { Button } from 'react-bootstrap';
import { Assets } from '../../assets';
import * as Icon from 'react-bootstrap-icons';
import './Home.css';
import Team from './components/TeamCard';
import { CountdownTimer } from '../../components/CountdownTimer';

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
        <span className='coming-soon__text-sep' >
        <h3 className='coming-soon__text-1'>#Code</h3>
        <h3 className='coming-soon__text-2'>Kar</h3>
        </span>
        <div className='name-container'>
        <h3 className='coming-soon__text-1'>2024 Was Good Fun :)</h3>
        <h3 className='coming-soon__text-2 ' >OpenHack 2025 kicks off in :</h3>
        </div>
        <CountdownTimer  targetDate="2025-02-24T08:29:59" />
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
              <a href="https://readybytes.in/" className='sponsor-title' target="_blank" rel="noopener noreferrer">
                
                <img className='title-sponsor' src={Assets.ReadyBytes} alt='Ready Bytes' />
              </a>
              </div>
              <div className='sponsor-associate'>
              <h3 className='associate-heading'>In Association with</h3>
                <div className='ass'>
                  
                    <a className='sp-c' href="https://www.taketwotechnologies.com/" target="_blank" rel="noopener noreferrer">
                        <img className='associate' src={Assets.Take2Technology} alt='Take 2 Technology' />
                    </a>
                  
                                 </div>
              </div>
              <div className='sponsor-associate'>
              <h3 className='associate-heading'>Affiliate Partner</h3>
                <div className='ass'>
                  
                <a className='sp-c' href="https://www.versatileitsolution.com/" target="_blank" rel="noopener noreferrer">
                        <img className='associate' src={Assets.VersatilePrime} alt='Versatile Prime' />
                  </a>
                                 </div>
              </div>
                            <div className='sponsor-ally'>
              <h3 className='digital-heading'>Digital Ally</h3>
              <a  href="https://trickylab.com/" className='sponsor-title' target="_blank" rel="noopener noreferrer">
                <img className='digital-ally' src={Assets.TrickyLab} alt='Tricky' />
                </a>
                </div>
            </div>
        <div className='about-card'>
          <div className='about-card-content'>
          <h1 className='about-card-title'>About OpenHack 2024</h1>
          <p className="about-card-description">Tech Bizz Club presents OpenHack 2024, the first Open Source Hackathon at MLVTEC, Bhilwara. Ignite innovation in a code-driven journey—be part of the revolution! <span className='coming-soon__text-sep' >
        <h3 className='coming-soon__text-1' >#Code</h3>
        <h3 className='coming-soon__text-2' >Kar</h3>
        </span></p>
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
          {/* <Button className='about-prize-reg-button' href='/registration' variant="primary">Register Now</Button> */}
          </div>
          <img className='about-prize-bg-img' src={Assets.Prize} alt="about" />        
        </div>
        <div className='about-rules'>
          <div className='about-rules-content'>
          <h1 className='about-rules-title'>Explore The Rulebook!</h1>
          <p className="about-rules-description">Ready to dive into the challenge? Explore the guidelines and regulations in our comprehensive rulebook.</p>
          <Button className='about-rules-reg-button' href={Assets.OpenHackRuleBook} target='_blank' variant="primary">Download</Button>
          </div>
          <img className='about-rules-bg-img' src={Assets.Rules} alt="about" />        
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
        <Team />
        <div className='dev-partners'>
              <h3 className='associate-heading'>Development Partners</h3>
                <div className='dev'>
                  
                    <a className='sp-c' href="https://www.vercel.com/" target="_blank" rel="noopener noreferrer">
                        <img className='development-partner' src={Assets.Vercel} alt='Vercel' />
                    </a>
                    <a className='sp-c' href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
                        <img className='development-partner' src={Assets.GitHub} alt='GitHub' />
                    </a>
                  
                                 </div>
              </div>
    </div>
  );
};
