import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

export const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZero = value => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className="countdown-timer">
      <div className="timer">
        <div className="time-block">
          <span>{addLeadingZero(timeLeft.days)}</span>
          <p className='timer-heading'>Days</p>
        </div>
        <div className="time-block">
          <span>{addLeadingZero(timeLeft.hours)}</span>
          <p className='timer-heading'>Hours</p>
        </div>
        <div className="time-block">
          <span>{addLeadingZero(timeLeft.minutes)}</span>
          <p className='timer-heading'>Minutes</p>
        </div>
        <div className="time-block">
          <span>{addLeadingZero(timeLeft.seconds)}</span>
          <p className='timer-heading'>Seconds</p>
        </div>
      </div>
    </div>
  );
};
