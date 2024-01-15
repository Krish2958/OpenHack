import React, { useState } from 'react';
import TeamDetails from './components/TeamDetails';

export const Registration = () => {
  const [teamDetails, setTeamDetails] = useState({
    teamName: '',
    collegeName: '',
    numberOfMembers: 2,
    teamMembers: [],
  });

  const [step, setStep] = useState(1);

  const onNext = () => {
    setStep(step + 1);
  };

  const onPrevious = () => {
    setStep(step - 1);
  };

  return (
    <div className='form-section'>
          <TeamDetails
            onNext={onNext}
            onPrevious={onPrevious}
            teamDetails={teamDetails}
            setTeamDetails={setTeamDetails}
          />
          </div>
  );
};
