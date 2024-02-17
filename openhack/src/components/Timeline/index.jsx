import React from 'react';
import './Timeline.css';

const TimelineItem = ({ title, time, description, isLeftContainer, index }) => {
  let Color = '#8CE8E5'; // Default border color

  if (index >= 10) {
    Color = '#6F61C0'; // New border color for events after "Day-2"
  }

  return (
    <div className={`timeline-container ${isLeftContainer ? 'left-container' : 'right-container'}`} >
      <div className="text-box" style={{ border: '2px solid', borderColor: Color }}>
        <h2 className='timeline-title' style={{color: Color}}>{title}</h2>
        {time && <small className='timeline-time'>{time}</small>}
        <p className='timeline-description'>{description}</p>
        <span className={`${isLeftContainer ? 'left-container' : 'right-container'}-arrow`}></span>
      </div>
    </div>
  );
};

export const Timeline = () => {
  const scheduleData = [
    { id: 1, title: 'Day-1: 24 Feb, 2024', description: 'Day 1 will go as follows:' },
    { id: 2, title: 'Pre-Registration-Time', time: '9:00 AM', description: 'Participants gather for initial registration and check-in. Get ready for an exciting coding event!' },
    { id: 3, title: 'Orientation', time: '1 hr 30 min', description: 'Introduction to the event, rules, and expectations. Briefing on the schedule and coding challenges.' },
    { id: 4, title: 'Selection of Issues', time: '30 min', description: 'Time for participants to select their preferred coding challenges. Make your choices wisely!' },
    { id: 5, title: 'Coding Starts!', time: '2 hrs', description: 'Dive into the first coding session. Tackle challenging problems and collaborate with your team.' },
    { id: 6, title: 'Lunch Time', description: 'A break for lunch and networking. Recharge your energy for the upcoming coding sessions.' },
    { id: 7, title: 'Coding Session #2', time: '3 hrs', description: 'Continue solving issue after issue to gain points during this second coding session.' },
    { id: 8, title: 'Break Time', time: '15 min', description: 'Take a short break, stretch, and grab a snack. Refresh your mind before the next coding session.' },
    { id: 9, title: 'Coding Session #3', time: '2 hrs', description: 'Continue coding and solving problems. The competition gets intense as you approach the end of the day.' },
    { id: 10, title: 'Day-2: 25 Feb, 2024', time: '8:30 AM', description: 'Join in and start working on form where you left it with a fresh mood and gear up for the challenges forward.' },
    { id: 11, title: 'Opening Bell', time: '9:00 AM', description: 'Start of the second day. Get ready for more coding challenges and exciting activities.' },
    { id: 12, title: 'Coding Session #4', time: '4 hrs', description: 'Embark on another coding session with fresh challenges. Test your coding skills and problem-solving abilities.' },
    { id: 13, title: 'Break', description: 'Take a break, have lunch, and recharge. Rest up for the afternoon coding session.' },
    { id: 14, title: 'Coding Session #5', time: '2 hrs', description: 'Engage in the penultimate coding session. Time to solve the most complex problems and finalize your solutions.' },
    { id: 15, title: 'Break', description: 'Another short break to relax and prepare for the final challenges ahead.' },
    { id: 16, title: 'Final Coding Session', time: '2 hrs PM', description: 'The last coding session. Finish strong and polish your solutions before the submission deadline.' },
    { id: 17, title: 'Review and Submission', time: '30 min', description: 'Review your code, ensure everything is in order, and submit your final solutions. Cross your fingers for success!' },
    { id: 18, title: 'Evaluation & Result', description: 'Announcement of results and winners. Celebrate the achievements and efforts of all participants.' },
];

  return (
    <div className="timeline">
      {scheduleData.map((item) => (
        <TimelineItem
          key={item.id}
          title={item.title}
          time={item.time}
          description={item.description}
          isLeftContainer={item.id % 2} // Using id for left/right placement
          index={item.id}
        />
      ))}
    </div>
  );
};
