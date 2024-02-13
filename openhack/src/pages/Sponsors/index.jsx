import React from 'react';
import * as Icon from 'react-bootstrap-icons'
import './Sponsors.css';
import { Assets } from '../../assets';

 

export const Sponsors = () => {

  return (
  <div className='sponsors-page'>
    <h1 className='sponsors-title'>Sponsors</h1>
    <div className='sponsors-card title_sponsor'>
          <div className='sponsors-card-content '>
          <h1 className='sponsors-card-title'>Title Sponsor</h1>
          <p className="sponsors-card-description">Ready Bytes Software Labs Pvt. Ltd. is a Bhilwara based Software company founded by Mr. Shyam Sundar Verma in 2009. Ready Bytes specializes in creating software solutions.</p>
          <span className='sponsors__icon-container'>
          <a href="https://www.facebook.com/readybytes" target="_blank" rel="noopener noreferrer">
            <Icon.Facebook className='sponsors__icon' color='#8CE8E5' />
          </a>
          <a href="https://www.instagram.com/readybytes/" target="_blank" rel="noopener noreferrer">
            <Icon.Instagram className='sponsors__icon' color='#8CE8E5' />
          </a>
          <a href="http://www.linkedin.com/company/ready-bytes-software-labs-pvt.-ltd." target="_blank" rel="noopener noreferrer">
            <Icon.Linkedin className='sponsors__icon' color='#8CE8E5' />
          </a>
          <a href="https://www.readybytes.in/" target="_blank" rel="noopener noreferrer">
            <Icon.Globe className='sponsors__icon' color='#8CE8E5' />
          </a>
        </span>
          </div>
          <img className='sponsors-card-bg-img' src={Assets.ReadyBytes} alt="sponsors" />        
        </div>
        <div className='sponsors-card associate_sponsor-1'>
          
          <img className='sponsors-card-bg-img' src={Assets.Take2Technology} alt="sponsors" />       
          <div className='sponsors-card-content'>
          <h1 className='sponsors-card-title'>Associate Sponsor</h1>
          <p className="sponsors-card-description">Take2 Technologies is one of the fastest growing web and mobile application development companies that is based in India. They offer a comprehensive suite of services</p>
          <span className='sponsors__icon-container'>
          <a href="https://www.facebook.com/taketwotech" target="_blank" rel="noopener noreferrer">
            <Icon.Facebook className='sponsors__icon' color='#8CE8E5' />
          </a>
          <a href="https://www.instagram.com/taketwotech/" target="_blank" rel="noopener noreferrer">
            <Icon.Instagram className='sponsors__icon' color='#8CE8E5' />
          </a>
          <a href="https://www.linkedin.com/company/take-2-technologies/" target="_blank" rel="noopener noreferrer">
            <Icon.Linkedin className='sponsors__icon' color='#8CE8E5' />
          </a>
          <a href="https://taketwotechnologies.com/" target="_blank" rel="noopener noreferrer">
            <Icon.Globe className='sponsors__icon' color='#8CE8E5' />
          </a>
        </span>
          </div> 
        </div>
        <div className='sponsors-card associate_sponsor-2'>
          <div className='sponsors-card-content'>
          <h1 className='sponsors-card-title'>Affiliate Sponsor</h1>
          <p className="sponsors-card-description">Versatile is not just an IT solution provider, it is professional managed company with qualified
team. Versatile strength is its team who is capable to face any type of challenges.</p>
          <span className='sponsors__icon-container'>
          <a href="https://www.facebook.com/VersatilePrimeItSolutionPvtLtd/" target="_blank" rel="noopener noreferrer">
            <Icon.Facebook className='sponsors__icon' color='#8CE8E5' />
          </a>
          <a href="https://www.instagram.com/itsoftwarecompany__?igsh=MTE0azJzcnZ3dDEyZQ/" target="_blank" rel="noopener noreferrer">
            <Icon.Instagram className='sponsors__icon' color='#8CE8E5' />
          </a>
          <a href="https://in.linkedin.com/company/versatile-prime-it-solution-pvt-ltd-" target="_blank" rel="noopener noreferrer">
            <Icon.Linkedin className='sponsors__icon' color='#8CE8E5' />
          </a>
          <a href="https://www.versatileitsolution.com/" target="_blank" rel="noopener noreferrer">
            <Icon.Globe className='sponsors__icon' color='#8CE8E5' />
          </a>
        </span>
          </div>
          <img className='sponsors-card-bg-img' src={Assets.VersatilePrime} alt="sponsors" />        
        </div>
        <div className='sponsors-card digital_ally'>
          
          <img className='sponsors-card-bg-img' src={Assets.TrickyLab} alt="sponsors" />       
          <div className='sponsors-card-content'>
          <h1 className='sponsors-card-title'>Digital Ally</h1>
          <p className="sponsors-card-description">Tricky Lab is a marketing communication agency with expertise in messaging, strategy and technology, creating engaging experiences through design craft and superior technical resources.</p>
          <span className='sponsors__icon-container'>
          <a href="https://www.facebook.com/trickylab121" target="_blank" rel="noopener noreferrer">
            <Icon.Facebook className='sponsors__icon' color='#8CE8E5' />
          </a>
          <a href="https://www.instagram.com/trickylab121/" target="_blank" rel="noopener noreferrer">
            <Icon.Instagram className='sponsors__icon' color='#8CE8E5' />
          </a>
          <a href="https://www.linkedin.com/company/trickylab/" target="_blank" rel="noopener noreferrer">
            <Icon.Linkedin className='sponsors__icon' color='#8CE8E5' />
          </a>
          <a href="https://www.trickylab.com" target="_blank" rel="noopener noreferrer">
            <Icon.Globe className='sponsors__icon' color='#8CE8E5' />
          </a>
        </span>
          </div> 
        </div>

  </div>
  );
}
