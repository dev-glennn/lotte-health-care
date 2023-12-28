import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      404 Not Found
      <div
        onClick={() => {
          navigate('/');
        }}
      >
        Click
      </div>
    </div>
  );
};

export default NotFound;
