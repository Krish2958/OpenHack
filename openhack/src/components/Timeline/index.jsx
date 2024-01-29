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
    { title: 'Pre-Registration-Time', time: '9:00 AM', description: 'Participants gather for initial registration and check-in. Get ready for an exciting coding event!' },
    { title: 'Orientation', time: '9:30 - 10:15 AM', description: 'Introduction to the event, rules, and expectations. Briefing on the schedule and coding challenges.' },
    { title: 'Sponsor Speaking Time', time: '10:15 - 11:15 AM', description: 'Sponsors share insights and opportunities. Learn about the technologies and tools they offer.' },
    { title: 'Selection Time', time: '11:30 AM', description: 'Time for participants to select their preferred coding challenges. Make your choices wisely!' },
    { title: 'Lunch Time', time: '2:00 PM - 2:30 PM', description: 'A break for lunch and networking. Recharge your energy for the upcoming coding sessions.' },
    { title: 'Coding Session #2', time: '2:30 PM - 6:00 PM', description: 'Dive into the first coding session. Tackle challenging problems and collaborate with your team.' },
    { title: 'Break Time', time: '', description: 'Take a short break, stretch, and grab a snack. Refresh your mind before the next coding session.' },
    { title: 'Coding Session #3', time: '6:00 PM - 8:15 PM', description: 'Continue coding and solving problems. The competition gets intense as you approach the end of the day.' },
    { title: 'DAY -2', time: '8:30 AM', description: 'Join in and start working on form where you left it with a fresh mood and gear up for the challenges forward.' },
    { title: 'Opening Bell', time: '8:30 AM', description: 'Start of the second day. Get ready for more coding challenges and exciting activities.' },
    { title: 'COding Session #4', time: '8:30 AM - 12:30 PM', description: 'Embark on another coding session with fresh challenges. Test your coding skills and problem-solving abilities.' },
    { title: '12:30-1:00 PM BREAK', time: '', description: 'Take a break, have lunch, and recharge. Rest up for the afternoon coding session.' },
    { title: 'Coding Session #5', time: '1:00 PM - 4:00 PM', description: 'Engage in the penultimate coding session. Time to solve the most complex problems and finalize your solutions.' },
    { title: '4:00-4:30 PM BREAK', time: '', description: 'Another short break to relax and prepare for the final challenges ahead.' },
    { title: 'Final Coding Session', time: '4:30 - 6:30 PM', description: 'The last coding session. Finish strong and polish your solutions before the submission deadline.' },
    { title: 'Review and Submission', time: '6:30 - 7:00 PM', description: 'Review your code, ensure everything is in order, and submit your final solutions. Cross your fingers for success!' },
    { title: 'Result', time: '7:00 PM - 8:00 PM', description: 'Announcement of results and winners. Celebrate the achievements and efforts of all participants.' },
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
