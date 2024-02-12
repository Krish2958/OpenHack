import React from 'react'
import { Timeline } from '../../components/Timeline';

import './Schedule.css';
export const Schedule = () => {
  return (
    <div className='schedule'>
        <h1 className='schedule-title'>Schedule</h1> 
        <Timeline className='schedule-timeline' />
        </div>
  )
}

