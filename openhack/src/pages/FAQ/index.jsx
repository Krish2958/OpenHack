import React, {useState} from 'react';
import { Accordion } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons'
import './FAQ.css';
import faqs from './constants.js';

 

export const FAQ = () => {

    const [openToggle, setOpenToggle] = useState(null);

    const toggleIcon = (eventKey) => {
      setOpenToggle((prevToggle) => (prevToggle === eventKey ? null : eventKey));
    };
    const CustomToggle = ({ children, eventKey }) => (
        <Accordion.Header onClick={() => toggleIcon(eventKey)}>
          <span>{children}</span>
          <span className="icon ml-auto">{openToggle === eventKey ? <Icon.X /> : <Icon.Plus />}</span>
        </Accordion.Header>
      );
      
 

  return (
    <Accordion className='faq' defaultActiveKey="0">
      {faqs.map((faq) => (
       <Accordion.Item key={faq.id} eventKey={faq.id.toString()}>
       <CustomToggle eventKey={faq.id.toString()} customIcon={{ open: <Icon.X className='x'/>, close: <Icon.Plus className='plus'/> }}>
         {faq.question}
       </CustomToggle>
       <Accordion.Body>
         {faq.answer}
       </Accordion.Body>
     </Accordion.Item>
     
      ))}
    </Accordion>
  );
}


