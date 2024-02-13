import React from 'react'
import './ContactUs.css';
import * as Icon from 'react-bootstrap-icons';
import { Assets } from '../../assets';

export const ContactUs = () => {
  return (
    <div className='contact-us'>
      <div className='contact-us-content'>
      <h1 className='contact-us-heading'>Contact Us</h1>
      <div className='contact-us-info-container'>
      <span className='contact-us-description'>If you have any queries regarding the Hackathon, Contact us at:</span><br />
      <a style={{textDecoration: "none"}} href="mailto:info_openhack@mlvti.ac.in" target="_blank" rel="noopener noreferrer">
      <span className='contact-us-mail'><Icon.EnvelopeOpen className='contact-us-mail-icon'/> <h1 className='contact-us-mail-id'>info_openhack@mlvti.ac.in</h1></span>
      </a>
      <a style={{textDecoration: "none"}} href="https://www.instagram.com/openhack2024/" target="_blank" rel="noopener noreferrer">
      <span className='contact-us-mail'><Icon.Instagram className='contact-us-mail-icon'/> <h1 className='contact-us-mail-id'>@openhack2024</h1></span>
      </a>
      </div>
      <div className='contact-us-info-container-2'>
      <span className='contact-us-description'>Or contact the organizers directly through call:</span><br />
      <div className='contact-us-info'>
      <Icon.TelephoneFill className='contact-us-call' />
      <div className='contact-us-call-number'>
      <a href="tel:+917568379160" style={{textDecoration: "none"}} >
      <h2 className='contact-us-call-numbers'>Krish Maheshwari - +91 75683 79160</h2>
      </a>
      <a href="tel:+919783241801" style={{textDecoration: "none"}} >
      <h2 className='contact-us-call-numbers'>Lakshay Agarwal - +91 97832 41801</h2>
      </a>
      </div>
      </div>
      </div>
      </div>
      <img className='contact-us-illustration'src={Assets.ContactPeople} alt='contact-illustration'></img>
    </div>

  )
}

