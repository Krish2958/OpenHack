import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import "./Registration.css";

export const Registration = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className='registration-page'>
    <div className='registration-container'>
      {isLoading && (
        <div className="loading-container">
          <Spinner animation="border" variant="primary" />
          <p>Loading Registration Form...</p>
        </div>
      )}
      <iframe
        className='registration-form'
        src="https://www.jotform.com/form/240374706186055"
        title='Registration_Form'
        loading="lazy"
        onLoad={handleLoad}
      />
    </div>
    </div>
  );
};
