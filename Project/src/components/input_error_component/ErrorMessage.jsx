import React from 'react';

const ErrorMessage = ({ touched, error }) => {

  return (
    <div className="error_box">
      {touched && error && <small className="error">{error}</small>}
    </div>
  );
};

export default ErrorMessage;
