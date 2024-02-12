import React from 'react';
import './Timeline.css';

const TimelineItem = ({ title, time, description, isLeftContainer }) => {
  return (
    <div className={`timeline-container ${isLeftContainer ? 'left-container' : 'right-container'}`}>
      <div className="text-box">
        <h2 className='timeline-title'>{title}</h2>
        <small className='timeline-time'>{time}</small>
        <p className='timeline-description'>{description}</p>
        <span className={`${isLeftContainer ? 'left-container' : 'right-container'}-arrow`}></span>
      </div>
    </div>
  );
};

export const Timeline = () => {
  const scheduleData = [
    { title: 'Day-1: 24 Feb, 2024', description: 'Day 1 will go as follows:' },
    { title: 'Pre-Registration-Time', time: '9:00 AM', description: 'Participants gather for initial registration and check-in. Get ready for an exciting coding event!' },
    { title: 'Orientation', time: '1 hr 30 min', description: 'Introduction to the event, rules, and expectations. Briefing on the schedule and coding challenges.' },
    { title: 'Selection of Issues', time: '30 min', description: 'Time for participants to select their preferred coding challenges. Make your choices wisely!' },
    { title: 'Coding Starts!', time: '2 hrs', description: 'Dive into the first coding session. Tackle challenging problems and collaborate with your team.' },
    { title: 'Lunch Time', description: 'A break for lunch and networking. Recharge your energy for the upcoming coding sessions.' },
    { title: 'Coding Session #2', time: '3 hrs', description: 'Continue solving issue after issue to gain points during this second coding session.' },
    { title: 'Break Time', time: '15 min', description: 'Take a short break, stretch, and grab a snack. Refresh your mind before the next coding session.' },
    { title: 'Coding Session #3', time: '2 hrs', description: 'Continue coding and solving problems. The competition gets intense as you approach the end of the day.' },
    { title: 'Day-2: 25 Feb, 2024', time: '8:30 AM', description: 'Join in and start working on form where you left it with a fresh mood and gear up for the challenges forward.' },
    { title: 'Opening Bell', time: '9:00 AM', description: 'Start of the second day. Get ready for more coding challenges and exciting activities.' },
    { title: 'Coding Session #4', time: '4 hrs', description: 'Embark on another coding session with fresh challenges. Test your coding skills and problem-solving abilities.' },
    { title: 'Break', description: 'Take a break, have lunch, and recharge. Rest up for the afternoon coding session.' },
    { title: 'Coding Session #5', time: '2 hrs', description: 'Engage in the penultimate coding session. Time to solve the most complex problems and finalize your solutions.' },
    { title: 'Break', description: 'Another short break to relax and prepare for the final challenges ahead.' },
    { title: 'Final Coding Session', time: '2 hrs PM', description: 'The last coding session. Finish strong and polish your solutions before the submission deadline.' },
    { title: 'Review and Submission', time: '30 min', description: 'Review your code, ensure everything is in order, and submit your final solutions. Cross your fingers for success!' },
    { title: 'Evaluation & Result', description: 'Announcement of results and winners. Celebrate the achievements and efforts of all participants.' },
  ];
  return (
    <div className="timeline">
      {scheduleData.map((item, index) => (
        <TimelineItem
          key={index}
          title={item.title}
          time={item.time}
          description={item.description}
          isLeftContainer={index % 2 === 0}
        />
      ))}
    </div>
  );
};
